# Backend (Express + Prisma + PostgreSQL)

API em TypeScript com Postgres via Docker. As credenciais no `docker-compose.yml` são só para **desenvolvimento local**; não uses isto em produção.

## Pré-requisitos

- Node.js 20+ (o projeto foi testado com Node 22)
- Docker Desktop (ou outro motor Docker) a correr

## Configuração

1. Copia o ficheiro de ambiente:

   ```bash
   cp .env.example .env
   ```

2. Ajusta `.env` se mudares portas ou credenciais do Postgres.

   - `DATABASE_URL` — por defeito aponta para `localhost:5433` (Postgres no Docker; a porta **5433** evita conflito com um Postgres local na 5432).
   - `PORT` — porta da API (ex.: `3333`).

3. Sobe o Postgres:

   ```bash
   docker compose up -d
   ```

4. Instala dependências e gera o Prisma Client (`postinstall` corre `prisma generate`):

   ```bash
   npm install
   ```

5. Aplica migrações (com a base a correr):

   ```bash
   npx prisma migrate dev
   ```

   Em ambientes só com artefactos já gerados (CI/prod), podes usar `npx prisma migrate deploy`.

6. Arranca a API:

   ```bash
   npm run dev
   ```

## Endpoints úteis

| Método | Caminho        | Descrição        |
|--------|----------------|------------------|
| GET    | `/health`      | Estado do serviço |
| GET    | `/todos`       | Lista todos       |
| POST   | `/todos`       | Corpo JSON: `{ "name": "..." }` |
| PUT    | `/todos`       | Corpo JSON: `{ "id": "...", "name": "...", "status": true/false }` |
| DELETE | `/todos/:id`   | Remove por `id`   |

## Prisma Studio (opcional)

```bash
npx prisma studio
```

Se o browser integrado do editor mostrar erros do tipo “Failed to fetch”, abre o URL indicado no terminal (ex.: `http://localhost:5555`) num browser externo. Ao editar linhas, não apagues o campo `id` (UUID).

## O que não commits

- `.env` (secrets) — mantém apenas `.env.example` no Git.
- `node_modules/` e `dist/` — listados em `.gitignore`.
