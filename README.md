# SayHello Node.js + UI (Starter)

Minimal Node.js (Express) API with a small demo UI.
- Route: `/sayHello` -> `{"message":"Hello User"}`
- UI: `public/index.html` demonstrates API usage
- Runs on port **80**
- Deploys via GitHub Actions -> rsync -> systemd on VM (no git pull on VM)

## Quick local test (recommended)
```bash
npm install
# Running on port 80 requires elevated privileges. Use sudo for local test:
sudo npm start
# Then open http://localhost/ in your browser
```

## Deploy (high-level)
1. Create a **private** GitHub repo and push this project.
2. Add GitHub Secrets:
   - `VM_HOST=40.76.97.198`
   - `VM_USER=azureuser`
   - `VM_SSH_KEY=<private ssh key contents>`
3. Push to `main` — Actions will rsync the project to the VM and install/start a `systemd` service.
4. Test from any machine: `curl http://40.76.97.198/sayHello`

## Submission
Fill `SUBMISSION.md` with your private repo link, exported ZIP, and notes.
