CREATE TABLE IF NOT EXISTS well_mail_outbox (
 id uuid PRIMARY KEY, payload jsonb NOT NULL, attempts integer NOT NULL DEFAULT 0,
 state text NOT NULL DEFAULT 'pending' CHECK(state IN ('pending','sending','sent','failed')),
 next_attempt timestamptz NOT NULL DEFAULT now(), lease_until timestamptz,
 created_at timestamptz NOT NULL DEFAULT now(), sent_at timestamptz, last_error text
);
CREATE INDEX IF NOT EXISTS well_mail_outbox_due ON well_mail_outbox(state,next_attempt);
