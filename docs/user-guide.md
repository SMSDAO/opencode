# User Guide

## Getting Started

After logging in you land on the **User Dashboard** (`/dashboard`).

### Dashboard Sections

#### Account Overview (KPI row)

The four metric cards at the top show:

- **API Calls (30d)** — total API requests made in the last 30 days.
- **Tokens Used** — LLM tokens consumed vs. your plan's included quota.
- **Sessions** — number of coding sessions started.
- **Active Since** — your account creation date and current plan name.

#### Metered Usage

Two cards show your resource consumption against plan limits:

- **Token Quota** — three progress bars: Tokens, API Requests, and Storage.
  - Purple = tokens, Green = requests, Amber = storage.
  - Bars fill proportionally to usage (e.g. 24% = 1.2M of 5M tokens used).
- **Billing Summary** — your current plan, renewal date, and next invoice amount.
  A "Manage Billing →" link opens the billing portal.

#### Recent Activity

A chronological list of your last coding sessions, API events, and account actions.

#### Notifications

Unread notifications (highlighted with a purple border) and read notifications.
Types include: new model releases, invoice availability, account events.

#### Account Settings

A table showing:

- Your RBAC role (User, Developer, Admin, or Auditor).
- 2FA status.
- Number of active API keys.
- Session timeout setting.

## Account Settings

### Changing Your Plan

Contact your admin or click **Manage Billing** from the dashboard.

### Rotating API Keys

Use the CLI:

```bash
opencode auth rotate-key
```

Or ask your admin to rotate keys from the Admin Dashboard.

### Enabling 2FA

Follow the setup wizard under **Account Settings → Security** (coming in v1.1).

## Understanding Metered Usage

| Metric       | Included (Pro) | Overage Rate        |
| ------------ | -------------- | ------------------- |
| Tokens       | 5M / month     | $0.002 / 1K tokens  |
| API Requests | 100K / month   | $0.01 / 1K requests |
| Storage      | 10 GB          | $0.05 / GB          |

Quota resets on the 1st of each calendar month.

## Keyboard Shortcuts (CLI)

| Key        | Action                               |
| ---------- | ------------------------------------ |
| `Tab`      | Switch between Build and Plan agents |
| `Ctrl+C`   | Cancel current operation             |
| `Ctrl+D`   | Exit opencode                        |
| `@general` | Invoke the general subagent          |
