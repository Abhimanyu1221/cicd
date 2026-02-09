# 🚀 React Counter: CI/CD Deep Dive

This project demonstrates a professional **GitOps** pipeline using GitHub Actions and Vercel.

##  Tech Stack
* **Frontend:** React.js
* **CI/CD Orchestrator:** GitHub Actions
* **Quality Assurance:** Jest & React Testing Library
* **Hosting:** Vercel (Edge Network)

##  The Pipeline Flow
1. **Push:** Code is sent to GitHub.
2. **Test:** GitHub Actions provisions an Ubuntu Runner to execute automated tests.
3. **Deploy:** Upon successful testing, Vercel automatically deploys the production build.