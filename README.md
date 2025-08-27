# SayHello Node.js + UI (Starter)(Index.html +Style.css)

Minimal Node.js (Express) API with a small demo UI.
- Route: `/sayHello` -> `{"message":"Hello User"}`
- UI: `public/index.html` demonstrates API usage
- Runs on port **80**
- Deploys via GitHub Actions -> rsync -> systemd on VM (no git pull on VM)

## Quick local test (recommended)
```bash
npm install express ,cors, dotenv
# Running on port 80 requires elevated privileges. Use sudo for local test:
npm run start-> for frontend 
can use any one
node server.js -> for backend
# Then open http://localhost/ in your browser
```

## Deploy (high-level)
1. Created a **private** GitHub repo and pushed this project.
2. Added GitHub Secrets:
   - `VM_HOST="Give your host"`
   - `VM_USER="Give User "`
   - `SSH_PRIVATE_KEY=<private ssh key contents>`
3. Pushed to `main` — Actions will rsync the project to the VM and install/start a `systemd` service.
4. Test from any machine: `curl process.env.Avaliable`

## Submission
Fill `SUBMISSION.md` with your private repo link, exported ZIP, and notes.
