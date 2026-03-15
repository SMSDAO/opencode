# Deployment Guide

## Prerequisites

- Bun ≥ 1.3
- Node.js ≥ 22 (for enterprise Nitro server)
- AWS account (S3) or Cloudflare account (R2/Workers) for storage
- SST CLI: `npm i -g sst` (for cloud deploys)

## Local Development

```bash
# Install all workspace dependencies
bun install

# Run the core CLI in dev mode
bun dev

# Run the enterprise web app locally
cd packages/enterprise
bun dev

# Run the marketing/docs site locally
cd packages/web
bun dev
```

## Building

```bash
# Build everything (Turborepo)
bun turbo build

# Build only the enterprise app
cd packages/enterprise
bun build

# Build for Cloudflare Workers
OPENCODE_DEPLOYMENT_TARGET=cloudflare bun build:cloudflare
```

## Running Tests

```bash
# Typecheck + unit tests (from root)
bun turbo typecheck
bun turbo test
```

## Environment Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Fill in required values — see [env-vars.md](./env-vars.md) for full reference.

## Cloud Deployment (SST)

OpenCode uses [SST v3](https://sst.dev) for infrastructure-as-code.

```bash
# Deploy to a named stage
sst deploy --stage production

# Remove a stage
sst remove --stage staging
```

Infrastructure is defined in `infra/`:
- `app.ts` — app-level resources
- `enterprise.ts` — enterprise Cloudflare Worker + R2 bucket
- `console.ts` — console web app
- `desktop.ts` — desktop auto-update bucket
- `secret.ts` — secrets manager definitions

## Docker (optional)

The enterprise app runs as a standard Node.js HTTP server. A minimal Dockerfile:

```dockerfile
FROM oven/bun:1.3
WORKDIR /app
COPY . .
RUN bun install --frozen-lockfile
RUN bun --cwd packages/enterprise build
EXPOSE 3000
CMD ["bun", "--cwd", "packages/enterprise", "start"]
```

## Health Check

The enterprise app exposes a health endpoint at `GET /api/health` (routed via `src/routes/api/[...path].ts`).

## CI/CD

GitHub Actions workflows in `.github/workflows/`:

| Workflow | Trigger | Purpose |
|---|---|---|
| `test.yml` | push / PR | Typecheck + unit tests + SDK check |
| `typecheck.yml` | PR to dev | Standalone typecheck |
| `publish.yml` | push to main | Publish npm packages |
| `snapshot.yml` | manual | Publish canary snapshot |
| `deploy.yml` | push to production | Deploy to cloud |
| `format.yml` | PR | Check code formatting |
