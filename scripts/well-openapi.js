module.exports = {
  "openapi": "3.0.3",
  "info": {
    "title": "Well Suplementos API",
    "version": "8.1",
    "description": "Inventário inicial de rotas da Etapa 7. Contratos parciais: exemplos ilustrativos; respostas e campos ainda requerem homologação. Não execute operações de escrita em produção."
  },
  "servers": [
    {
      "url": "/"
    }
  ],
  "paths": {
    "/healthz": {
      "get": {
        "tags": [
          "Sistema"
        ],
        "summary": "GET /healthz",
        "security": [],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      }
    },
    "/api/status": {
      "get": {
        "tags": [
          "Sistema"
        ],
        "summary": "GET /api/status",
        "security": [],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      }
    },
    "/api/products": {
      "get": {
        "tags": [
          "Loja"
        ],
        "summary": "GET /api/products",
        "security": [],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      }
    },
    "/api/store-config": {
      "get": {
        "tags": [
          "Loja"
        ],
        "summary": "GET /api/store-config",
        "security": [],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      }
    },
    "/api/shipping": {
      "post": {
        "tags": [
          "Loja"
        ],
        "summary": "POST /api/shipping",
        "security": [],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        },
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "additionalProperties": true
              },
              "example": {
                "subtotal": 150,
                "bairro": "Centro",
                "cidade": "São Paulo"
              }
            }
          }
        }
      }
    },
    "/api/coupons/quote": {
      "post": {
        "tags": [
          "Loja"
        ],
        "summary": "POST /api/coupons/quote",
        "security": [],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        },
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "additionalProperties": true
              },
              "example": {
                "code": "WELL10",
                "items": [
                  {
                    "id": 1,
                    "quantity": 1
                  }
                ]
              }
            }
          }
        }
      }
    },
    "/api/customer/register": {
      "post": {
        "tags": [
          "Cliente"
        ],
        "summary": "POST /api/customer/register",
        "security": [],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        },
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "additionalProperties": true
              },
              "example": {
                "name": "Cliente Teste",
                "email": "teste@example.com",
                "password": "SenhaExemplo123!"
              }
            }
          }
        }
      }
    },
    "/api/customer/login": {
      "post": {
        "tags": [
          "Cliente"
        ],
        "summary": "POST /api/customer/login",
        "security": [],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        },
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "additionalProperties": true
              },
              "example": {
                "email": "teste@example.com",
                "password": "SenhaExemplo123!"
              }
            }
          }
        }
      }
    },
    "/api/customer/email/verify": {
      "post": {
        "tags": [
          "Cliente"
        ],
        "summary": "POST /api/customer/email/verify",
        "security": [],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        },
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "additionalProperties": true
              },
              "example": {
                "token": "TOKEN_DE_TESTE"
              }
            }
          }
        }
      }
    },
    "/api/customer/password/forgot": {
      "post": {
        "tags": [
          "Cliente"
        ],
        "summary": "POST /api/customer/password/forgot",
        "security": [],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        },
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "additionalProperties": true
              },
              "example": {
                "email": "teste@example.com"
              }
            }
          }
        }
      }
    },
    "/api/customer/password/reset": {
      "post": {
        "tags": [
          "Cliente"
        ],
        "summary": "POST /api/customer/password/reset",
        "security": [],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        },
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "additionalProperties": true
              },
              "example": {
                "token": "TOKEN_DE_TESTE",
                "password": "NovaSenha123!"
              }
            }
          }
        }
      }
    },
    "/api/customer/me": {
      "get": {
        "tags": [
          "Cliente"
        ],
        "summary": "GET /api/customer/me",
        "security": [
          {
            "customerSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      }
    },
    "/api/customer/orders": {
      "get": {
        "tags": [
          "Cliente"
        ],
        "summary": "GET /api/customer/orders",
        "security": [
          {
            "customerSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      }
    },
    "/api/customer/email/resend": {
      "post": {
        "tags": [
          "Cliente"
        ],
        "summary": "POST /api/customer/email/resend",
        "security": [
          {
            "customerSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      }
    },
    "/api/customer/logout": {
      "post": {
        "tags": [
          "Cliente"
        ],
        "summary": "POST /api/customer/logout",
        "security": [
          {
            "customerSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      }
    },
    "/api/customer/profile": {
      "put": {
        "tags": [
          "Cliente"
        ],
        "summary": "PUT /api/customer/profile",
        "security": [
          {
            "customerSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      }
    },
    "/api/orders": {
      "post": {
        "tags": [
          "Pedidos"
        ],
        "summary": "POST /api/orders",
        "security": [
          {
            "customerSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      }
    },
    "/api/login": {
      "post": {
        "tags": [
          "Administração"
        ],
        "summary": "POST /api/login",
        "security": [],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      }
    },
    "/api/logout": {
      "post": {
        "tags": [
          "Administração"
        ],
        "summary": "POST /api/logout",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      }
    },
    "/api/setup": {
      "post": {
        "tags": [
          "Sistema"
        ],
        "summary": "POST /api/setup",
        "security": [],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      }
    },
    "/api/admin/overview": {
      "get": {
        "tags": [
          "Administração"
        ],
        "summary": "GET /api/admin/overview",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      }
    },
    "/api/admin/management": {
      "get": {
        "tags": [
          "Administração"
        ],
        "summary": "GET /api/admin/management",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        },
        "parameters": [
          {
            "name": "from",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "to",
            "in": "query",
            "schema": {
              "type": "string"
            }
          }
        ]
      }
    },
    "/api/admin/commercial": {
      "get": {
        "tags": [
          "Administração"
        ],
        "summary": "GET /api/admin/commercial",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        },
        "parameters": [
          {
            "name": "from",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "to",
            "in": "query",
            "schema": {
              "type": "string"
            }
          }
        ]
      }
    },
    "/api/admin/shop-reports": {
      "get": {
        "tags": [
          "Administração"
        ],
        "summary": "GET /api/admin/shop-reports",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        },
        "parameters": [
          {
            "name": "type",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "from",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "to",
            "in": "query",
            "schema": {
              "type": "string"
            }
          }
        ]
      }
    },
    "/api/admin/shop-settings": {
      "get": {
        "tags": [
          "Administração"
        ],
        "summary": "GET /api/admin/shop-settings",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      },
      "put": {
        "tags": [
          "Administração"
        ],
        "summary": "PUT /api/admin/shop-settings",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      }
    },
    "/api/admin/products": {
      "get": {
        "tags": [
          "Administração"
        ],
        "summary": "GET /api/admin/products",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      },
      "post": {
        "tags": [
          "Administração"
        ],
        "summary": "POST /api/admin/products",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      }
    },
    "/api/admin/products/{id}": {
      "put": {
        "tags": [
          "Administração"
        ],
        "summary": "PUT /api/admin/products/{id}",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ]
      },
      "delete": {
        "tags": [
          "Administração"
        ],
        "summary": "DELETE /api/admin/products/{id}",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ]
      }
    },
    "/api/admin/customers": {
      "get": {
        "tags": [
          "Administração"
        ],
        "summary": "GET /api/admin/customers",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      }
    },
    "/api/admin/customers/{id}": {
      "get": {
        "tags": [
          "Administração"
        ],
        "summary": "GET /api/admin/customers/{id}",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ]
      },
      "patch": {
        "tags": [
          "Administração"
        ],
        "summary": "PATCH /api/admin/customers/{id}",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ]
      },
      "delete": {
        "tags": [
          "Administração"
        ],
        "summary": "DELETE /api/admin/customers/{id}",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ]
      }
    },
    "/api/admin/catalog-meta": {
      "get": {
        "tags": [
          "Administração"
        ],
        "summary": "GET /api/admin/catalog-meta",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      },
      "post": {
        "tags": [
          "Administração"
        ],
        "summary": "POST /api/admin/catalog-meta",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      }
    },
    "/api/admin/coupons": {
      "get": {
        "tags": [
          "Administração"
        ],
        "summary": "GET /api/admin/coupons",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      },
      "post": {
        "tags": [
          "Administração"
        ],
        "summary": "POST /api/admin/coupons",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      }
    },
    "/api/admin/lots": {
      "get": {
        "tags": [
          "Administração"
        ],
        "summary": "GET /api/admin/lots",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      },
      "post": {
        "tags": [
          "Administração"
        ],
        "summary": "POST /api/admin/lots",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      }
    },
    "/api/admin/lots/{id}": {
      "patch": {
        "tags": [
          "Administração"
        ],
        "summary": "PATCH /api/admin/lots/{id}",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ]
      }
    },
    "/api/admin/stock-movements": {
      "get": {
        "tags": [
          "Administração"
        ],
        "summary": "GET /api/admin/stock-movements",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      }
    },
    "/api/admin/pending-orders": {
      "get": {
        "tags": [
          "Administração"
        ],
        "summary": "GET /api/admin/pending-orders",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        },
        "parameters": [
          {
            "name": "days",
            "in": "query",
            "schema": {
              "type": "string"
            }
          }
        ]
      }
    },
    "/api/admin/orders": {
      "get": {
        "tags": [
          "Administração"
        ],
        "summary": "GET /api/admin/orders",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        }
      }
    },
    "/api/admin/orders/{id}": {
      "patch": {
        "tags": [
          "Administração"
        ],
        "summary": "PATCH /api/admin/orders/{id}",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ]
      }
    },
    "/api/admin/orders/{id}/delivery": {
      "patch": {
        "tags": [
          "Administração"
        ],
        "summary": "PATCH /api/admin/orders/{id}/delivery",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ]
      }
    },
    "/api/admin/orders/{id}/payment": {
      "patch": {
        "tags": [
          "Administração"
        ],
        "summary": "PATCH /api/admin/orders/{id}/payment",
        "security": [
          {
            "adminSession": []
          }
        ],
        "responses": {
          "200": {
            "description": "Resposta de sucesso (o código pode variar conforme a operação)"
          },
          "400": {
            "description": "Dados inválidos"
          },
          "401": {
            "description": "Não autenticado"
          },
          "403": {
            "description": "Acesso ou origem não autorizada"
          },
          "500": {
            "description": "Erro interno"
          }
        },
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ]
      }
    }
  },
  "components": {
    "securitySchemes": {
      "adminSession": {
        "type": "apiKey",
        "in": "cookie",
        "name": "well_session"
      },
      "customerSession": {
        "type": "apiKey",
        "in": "cookie",
        "name": "well_customer"
      }
    }
  }
};
