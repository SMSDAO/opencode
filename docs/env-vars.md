# Environment Variables

## Core (opencode CLI)

| Variable | Required | Default | Description |
|---|---|---|---|
| `OPENCODE_STORAGE_ADAPTER` | Yes (server) | — | `s3` or `r2` — selects storage backend |
| `OPENCODE_STORAGE_BUCKET` | Yes (server) | — | S3/R2 bucket name |
| `OPENCODE_STORAGE_REGION` | No | `us-east-1` | AWS region (S3 only) |
| `OPENCODE_STORAGE_ACCESS_KEY_ID` | Yes (server) | — | AWS / R2 access key ID |
| `OPENCODE_STORAGE_SECRET_ACCESS_KEY` | Yes (server) | — | AWS / R2 secret access key |
| `OPENCODE_STORAGE_ACCOUNT_ID` | Yes (R2 only) | — | Cloudflare account ID |
| `OPENCODE_DEPLOYMENT_TARGET` | No | node | Set to `cloudflare` for Cloudflare Worker build |

## Authentication

| Variable | Required | Description |
|---|---|---|
| `JWT_SECRET` | Yes | Secret for signing JWT access tokens (min 32 chars) |
| `JWT_REFRESH_SECRET` | Yes | Secret for signing refresh tokens (min 32 chars) |
| `SESSION_TIMEOUT_HOURS` | No | Session expiry in hours (default: 8) |

## Database (optional PostgreSQL)

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | No | `postgresql://user:pass@host:5432/dbname` |
| `DATABASE_POOL_MIN` | No | Minimum connection pool size (default: 2) |
| `DATABASE_POOL_MAX` | No | Maximum connection pool size (default: 10) |

## Billing / Stripe

| Variable | Required | Description |
|---|---|---|
| `STRIPE_SECRET_KEY` | No | Stripe secret key (sk_live_… or sk_test_…) |
| `STRIPE_WEBHOOK_SECRET` | No | Stripe webhook signing secret (whsec_…) |

## SST / Infra

These are injected automatically by SST at deploy time; see `infra/` for definitions.

| Variable | Description |
|---|---|
| `SST_STAGE` | Deployment stage (e.g. `production`, `dev`) |

## Example `.env` file

```bash
# Storage
OPENCODE_STORAGE_ADAPTER=r2
OPENCODE_STORAGE_BUCKET=opencode-share
OPENCODE_STORAGE_ACCOUNT_ID=abc123
OPENCODE_STORAGE_ACCESS_KEY_ID=your-access-key
OPENCODE_STORAGE_SECRET_ACCESS_KEY=your-secret-key

# Auth
JWT_SECRET=change-me-to-a-long-random-string-min-32-chars
JWT_REFRESH_SECRET=another-long-random-string-for-refresh-tokens

# Database (optional)
DATABASE_URL=postgresql://opencode:password@localhost:5432/opencode

# Billing (optional)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```
