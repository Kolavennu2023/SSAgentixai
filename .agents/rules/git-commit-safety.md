# SSAgentix.ai Workspace Rules

## Git & Version Control — MANDATORY

1. **Never commit, stage, or push without explicit user approval.**
   - Always present a full summary of what will be committed (files, author identity, commit message, push target) and wait for the user to say "approve" or equivalent before running any `git commit` or `git push` command.

2. **Never commit under `kiran.kumar@purpleplumfi.com` without explicit written approval.**
   - Before any `git commit`, verify the active Git author identity (`git config user.name` and `git config user.email`).
   - If the identity resolves to `kiran.kumar@purpleplumfi.com` or `kirankumar` (the global default on this machine), **stop immediately** and ask the user which identity should be used.
   - The approved author for the `c:\SSAgentixai` repository is:
     - Name: `Kolavennu2023`
     - Email: `kolavennu2023@users.noreply.github.com` (or the user's confirmed GitHub noreply address)
   - This identity is set as a **local repo config** and must not be removed or overridden without the user's permission.

3. **Never reset, rebase, force-push, or alter Git history** without explicit user approval.

4. **Never deploy to Cloudflare Pages, Netlify, Vercel, or any other host** without explicit user approval.

## General Agent Behaviour

5. **Always confirm destructive or irreversible actions** (delete, overwrite, force-push, reset) before executing.
6. When in doubt about intent, ask — do not assume approval carries over from a previous message.
