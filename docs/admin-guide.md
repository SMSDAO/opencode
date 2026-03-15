# Admin Guide

## Accessing the Admin Dashboard

Navigate to `/admin`. Only users with the **Admin** role can view this page.

## System Overview

The four KPI cards at the top show platform-wide metrics:

- **Total Users** — registered accounts with week-over-week growth delta.
- **Active Sessions** — live coding sessions right now.
- **API Requests (24h)** — total requests in the last 24 hours.
- **System Health** — 30-day uptime percentage.

## User Management

The user table lists all accounts with their role, plan, status, and last-active time.

### User Statuses

| Status    | Meaning                                 |
| --------- | --------------------------------------- |
| Active    | User can log in and make API calls      |
| Idle      | Logged in but inactive for > 30 minutes |
| Inactive  | Account exists but no recent activity   |
| Suspended | Access revoked; cannot log in           |

### Actions (coming in v1.1 UI)

- **Create user** — POST `/api/admin/users`
- **Assign role** — PATCH `/api/admin/users/:id/role`
- **Suspend/Unsuspend** — PATCH `/api/admin/users/:id/status`

All actions are recorded in the Audit Log.

## RBAC Role Matrix

| Permission       | Admin | Developer | User | Auditor |
| ---------------- | ----- | --------- | ---- | ------- |
| Manage Users     | ✓     | —         | —    | —       |
| View API Logs    | ✓     | ✓         | —    | ✓       |
| Billing Controls | ✓     | —         | —    | —       |
| Deploy Configs   | ✓     | ✓         | —    | —       |
| Read Audit Logs  | ✓     | —         | —    | ✓       |

Roles are assigned per user and are mutually exclusive (single role per user).

## Billing Controls

### Revenue (MRR)

Monthly Recurring Revenue derived from active paid subscriptions.

### Seat Meters

Progress bars show seat occupancy per plan tier:

- **Enterprise** — fixed seat licences.
- **Pro** — metered seats with soft cap.
- **Free** — unlimited.

### Token Metering

Platform-level aggregate token usage vs. monthly allocation.  
Overage rate and projected overage for the current billing cycle are displayed.

### Changing Plan Limits

Update via the Stripe dashboard or by editing the plan configuration in `infra/`.

## API Monitoring

Three cards show real-time API health:

- **Avg Response Time** with P99 breakdown.
- **Error Rate** (5xx / total) for the last hour.
- **Throughput** (requests per minute).

## Audit Log

The 10 most recent audit events are shown. Each row contains:

- Timestamp
- Actor (user or system)
- Action (e.g. `USER_SUSPEND`, `CONFIG_UPDATE`)
- Resource affected
- Result (OK / Warn / Error)

Full audit log is available via `GET /api/admin/audit?limit=100`.

## Security Best Practices

1. Rotate `JWT_SECRET` and `JWT_REFRESH_SECRET` every 90 days.
2. Review the audit log daily for `RATE_LIMIT_TRIGGERED` or unexpected `LOGIN` events.
3. Suspend inactive accounts (> 90 days) to reduce attack surface.
4. Enable Stripe webhook signature verification before going live.
