# Commit Message Pattern

Commits are part of the public story. Make them easy to scan without turning them into essays.

## Pattern

```text
<Verb> <specific change>
```

## Useful verbs

| Verb | Use when |
| --- | --- |
| `Add` | Introducing an experiment, note, example, or feature |
| `Update` | Revising existing content or behavior |
| `Fix` | Correcting a defect, typo, or broken link |
| `Remove` | Taking out work that is no longer useful |
| `Document` | Recording a decision, result, or lesson |
| `Refactor` | Restructuring without changing the outcome |

## Examples

| Weak | Clear |
| --- | --- |
| `updates` | `Document first onboarding experiment` |
| `wip` | `Add notes from prototype feedback` |
| `fixed it` | `Fix broken link in project roadmap` |
| `changes` | `Update roadmap after interview results` |

## Rules of thumb

- Describe what changed, not how busy the work felt.
- Keep one logical change per commit when practical.
- Use the body for context when the reason is not obvious.
- Never include secrets or private details in a commit message.
