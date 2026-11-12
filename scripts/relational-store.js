const fs=require("node:fs"),path=require("node:path");
const spec={"products": ["products", {"id": "integer", "name": "text", "cat": "text", "price": "numeric", "stock": "integer", "active": "boolean", "desc": "text", "label": "text", "image": "text"}], "customers": ["customers", {"id": "text", "name": "text", "email": "text", "salt": "text", "hash": "text", "phone": "text", "emailVerified": "boolean", "createdAt": "text"}], "orders": ["orders", {"id": "text", "customerId": "text", "status": "text", "paymentStatus": "text", "subtotal": "numeric", "shipping": "numeric", "total": "numeric", "createdAt": "text", "displayId": "text", "idempotencyKey": "text"}], "productLots": ["product_lots", {"id": "text", "productId": "integer", "lot": "text", "expiry": "text", "quantity": "integer"}], "stockMovements": ["stock_movements", {"id": "text", "productId": "integer", "delta": "integer", "balance": "integer", "orderId": "text", "reason": "text", "at": "text"}]};

const lock=c=>c.query('SELECT pg_advisory_xact_lock(913721,1)');
const quote=k=>'"'+k+'"';
async function load(c){
 const db={admin:null};
 for(const [key,[table,fields]] of Object.entries(spec)){
  const r=await c.query(`SELECT * FROM ${table} ORDER BY position`);
  db[key]=r.rows.map(row=>{const obj={...row.extra};for(const [k,t] of Object.entries(fields))if(row[k]!==null)obj[k]=t==='numeric'?Number(row[k]):row[k];return obj;});
 }
 const a=await c.query('SELECT email,salt,hash FROM well_admin_account');db.admin=a.rows[0]||null;
 const addresses=await c.query('SELECT * FROM customer_addresses');for(const row of addresses.rows)db.customers.find(x=>x.id===row.customer_id).address=row.address;
 const items=await c.query('SELECT * FROM order_items ORDER BY position');const history=await c.query('SELECT * FROM order_history ORDER BY position');
 for(const o of db.orders){o.items=items.rows.filter(x=>x.order_id===o.id).map(x=>({id:x.product_id,name:x.name,quantity:x.quantity,unitPrice:Number(x.unit_price),subtotal:Number(x.subtotal)}));o.history=history.rows.filter(x=>x.order_id===o.id).map(x=>x.event);}
 const settings=await c.query('SELECT * FROM well_settings');for(const x of settings.rows)db[x.key]=x.value;
 const sessions={admin:{},customer:{}};for(const x of (await c.query('SELECT * FROM well_sessions')).rows)sessions[x.kind][x.token]={...(x.customer_id?{id:x.customer_id}:{}),exp:Number(x.expires)};
 return {database:db,sessions};
}
async function persist(c,db,sessions){
 // Compatibility adapter: atomic snapshot of normalized entities, serialized across instances.
 for(const table of ['well_sessions','order_history','order_items','customer_addresses','orders','product_lots','stock_movements','customers','products','well_admin_account','well_settings'])await c.query('DELETE FROM '+table);
 for(const [key,[table,fields]] of Object.entries(spec))for(const [i,obj] of (db[key]||[]).entries()){
  const extra={...obj};for(const k of Object.keys(fields))delete extra[k];if(key==='customers')delete extra.address;if(key==='orders'){delete extra.items;delete extra.history;}
  const cols=[...Object.keys(fields),'position','extra'];const values=[...Object.keys(fields).map(k=>obj[k]??null),i,JSON.stringify(extra)];
  await c.query(`INSERT INTO ${table} (${cols.map(quote).join(',')}) VALUES (${values.map((_,j)=>'$'+(j+1)).join(',')})`,values);
 }
 if(db.admin)await c.query('INSERT INTO well_admin_account VALUES(1,$1,$2,$3)',[db.admin.email,db.admin.salt,db.admin.hash]);
 for(const x of db.customers)if(x.address)await c.query('INSERT INTO customer_addresses VALUES($1,$2)',[x.id,JSON.stringify(x.address)]);
 for(const o of db.orders){for(const [i,x] of (o.items||[]).entries())await c.query('INSERT INTO order_items VALUES($1,$2,$3,$4,$5,$6,$7)',[o.id,i,x.id,x.name,x.quantity,x.unitPrice,x.subtotal]);for(const [i,x] of (o.history||[]).entries())await c.query('INSERT INTO order_history VALUES($1,$2,$3)',[o.id,i,JSON.stringify(x)]);}
 for(const [kind,entries] of Object.entries(sessions))for(const [token,x] of Object.entries(entries))await c.query('INSERT INTO well_sessions VALUES($1,$2,$3,$4)',[kind,token,x.id||null,x.exp]);
 for(const [key,value] of Object.entries(db))if(key!=='admin'&&!Object.hasOwn(spec,key))await c.query('INSERT INTO well_settings VALUES($1,$2)',[key,JSON.stringify(value)]);
}
async function migrate(pool,seed){const c=await pool.connect();try{await c.query('BEGIN');await lock(c);await c.query(fs.readFileSync(path.join(__dirname,'../migrations/001-relational.sql'),'utf8'));if(!(await c.query('SELECT 1 FROM well_migrations WHERE version=1')).rowCount){let state={database:seed(),sessions:{admin:{},customer:{}}};if((await c.query("SELECT to_regclass('well_store_state') AS name")).rows[0].name){const old=await c.query('SELECT payload FROM well_store_state WHERE id=1');if(old.rowCount)state=old.rows[0].payload;}await persist(c,state.database,state.sessions);await c.query('INSERT INTO well_migrations(version) VALUES(1)');}await c.query('COMMIT');}catch(e){await c.query('ROLLBACK');throw e;}finally{c.release();}}
module.exports={lock,load,persist,migrate};
