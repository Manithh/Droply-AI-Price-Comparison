# 🛒 Droply — AI-Powered Price Comparison Website

Droply is a smart price comparison web app that uses a **locally hosted AI model (via Ollama)** to fetch, analyze, and recommend the **best e-commerce deals** in real time.  
Built with **Node.js**, **Express**, **Vite**, **TailwindCSS**, and **TypeScript**, Droply combines a clean frontend and intelligent backend to provide an efficient shopping experience.

---

## 🚀 Features
- 🧠 AI-powered product search using **local Ollama models**
- 🔍 Real-time price comparison across e-commerce sites
- 🔐 Local backend (no cloud APIs)
- 🧩 Full-stack setup with **Vite + Tailwind** frontend
- ⚙️ Secure & private — your data never leaves your system

---
## 🖼️ Screenshots

### Homepage
<p align="center">
  <img src="screenshots/Homepage_1.jpg" width="30%" style="margin-right: 10px;">
  <img src="screenshots/Homepage_2.jpg" width="30%" style="margin-right: 10px;">
  <img src="screenshots/Homepage_3.jpg" width="30%">
</p>

---
## 🧠 How It Works
1. The user enters a query (e.g., “Find the cheapest Nike Pegasus 41”)
2. The frontend sends the question to the Node.js backend via `/ask`
3. The backend interacts with **Ollama** running locally (e.g., `llama3`)
4. The AI parses product info and returns structured price comparisons

---

## ⚙️ Tech Stack
**Frontend:** HTML, CSS, TypeScript, TailwindCSS, Vite  
**Backend:** Node.js, Express.js  
**AI Engine:** Ollama (local LLM)  

---

## 🧩 Project Setup

### Frontend,  and Ollama Model
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
node server.js
```

### Run Ollama Model
```bash
ollama run llama3
```

### Licence
This project is licensed under the MIT License.

⭐ If you found this project interesting, give it a star on GitHub!
