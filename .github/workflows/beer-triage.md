---
on:
  issues:
    types: [opened]

permissions:
  contents: read
  issues: read

tools:
  github:
    toolsets: [issues]
    min-integrity: none

safe-outputs:
  add-comment:
  add-labels:

---

# Automatic Belgian Beer issue triage

Analyze the newly opened issue (title and body).
- If it mentions "bug", "broken" or "wrong": add the "bug" label
  and post a comment asking for reproduction steps.
- If it mentions "beer", "missing" or "feature": add the "enhancement"
  label and thank the author for their suggestion.
