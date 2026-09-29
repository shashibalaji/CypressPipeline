# Cypress Pipeline

Cypress + TypeScript end-to-end tests run from a parameterised GitHub Actions workflow.

## Pipeline

`run-cypress-test-manualy.yml` is triggered manually with the **target URL as an input**, so the same suite can point at any environment.

- **Browser matrix:** Chrome and Firefox in parallel (`fail-fast: false`).
- **Cached Cypress binary**, keyed on the lockfile.
- **On failure:** screenshots are uploaded as an artifact, and a Slack message links to the run (when a `SLACK_WEB_HOOK` secret is configured).

## Framework

- `baseUrl` comes from the `URL` environment variable.
- Per-environment config files in `cypress/config/`, selected with `--env configFile=<name>`.
- A custom `log` task for printing from specs to the terminal.

## Run locally

```bash
cd test
npm ci
URL=https://www.swtestacademy.com npx cypress run --browser chrome
```

## Tech

Cypress · TypeScript · GitHub Actions (matrix, `workflow_dispatch` inputs, caching, artifacts) · Slack notifications
