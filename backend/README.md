# Backend (Express + Prisma + PostgreSQL)

API em TypeScript com Postgres via Docker. As credenciais do `docker-compose.yml` servem só para **desenvolvimento local**; **não use** isso em produção.

## Pré-requisitos

- Node.js 20+ (o projeto foi testado com Node 22)
- Docker Desktop (ou outro runtime Docker) **rodando**

## Configuração

1. Copie o arquivo de ambiente:

   ```bash
   cp .env.example .env
   ```

2. Ajuste o `.env` se você mudar portas ou credenciais do Postgres.
   - `DATABASE_URL` — por **padrão** aponta para `localhost:5433` (Postgres no Docker; a porta **5433** evita conflito com um Postgres local na 5432).
   - `PORT` — porta da API (ex.: `3333`).

3. Suba o Postgres:

   ```bash
   docker compose up -d
   ```

4. Instale as dependências e gere o Prisma Client (o `postinstall` roda `prisma generate`):

   ```bash
   npm install
   ```

5. Rode as migrações (com o banco **no ar**):

   ```bash
   npx prisma migrate dev
   ```

   Em CI ou produção, quando só houver artefatos já gerados, você pode usar `npx prisma migrate deploy`.

6. Inicie a API:

   ```bash
   npm run dev
   ```

## Endpoints úteis

| Método | Caminho      | Descrição                                                         |
| ------ | ------------ | ----------------------------------------------------------------- |
| GET    | `/health`    | Status do serviço                                                 |
| GET    | `/todos`     | Lista os todos                                                    |
| POST   | `/todos`     | Body JSON: `{ "name": "..." }`                                    |
| PUT    | `/todos`     | Body JSON: `{ "id": "...", "name": "...", "status": true/false }` |
| DELETE | `/todos/:id` | Remove pelo `id`                                                  |

## Prisma Studio (opcional)

```bash
npx prisma studio
```

Se o navegador embutido do editor mostrar erro tipo “Failed to fetch”, abra a URL que aparecer no terminal (ex.: `http://localhost:5555`) em um navegador normal. Ao editar registros, **não apague** o campo `id` (UUID).

## O que não deve ir pro Git

- `.env` (segredos) — no repositório fica só o `.env.example`.
- `node_modules/` e `dist/` — já estão no `.gitignore`.
