# 🛠️ My Big Vision RV App Setup Guide

## 🚀 Step-by-Step Instructions for Environment & GitHub Setup

### 📁 1. Create the GitHub Repo

1. Go to [https://github.com/new](https://github.com/new)
2. **Repository name**: `big-vision-rv-app`
3. Description: `Comprehensive travel assistant for RVers with React, React Native, and Node.js`
4. Check:
   - ✅ *Initialize this repository with a README*
   - ✅ *Add .gitignore* → choose **Node**
   - ✅ *Add a license* → choose **MIT**
5. Click **Create repository**

---

### 🧑‍💻 2. Clone the Repo Locally

```bash
git clone https://github.com/YOUR_USERNAME/big-vision-rv-app.git
cd big-vision-rv-app
```

---

### 🌐 3. Setup React Web App

```bash
npx create-react-app web --template typescript
cd web
npm start
```

> ✅ You now have a React app running at `localhost:3000`.

Push it to GitHub:

```bash
cd web
git add .
git commit -m "Initialize React web app"
git push origin main
```

---

### 📱 4. Setup React Native Mobile App (iOS + Android)

**📦 Install Prerequisites**

- Install [Node.js](https://nodejs.org)
- Install [Watchman](https://facebook.github.io/watchman/) (macOS only)
- Install [Xcode](https://developer.apple.com/xcode/) (macOS only)
- Install Android Studio (for Android emulator): https://developer.android.com/studio#downloads

**Install React Native CLI**

```bash
npm install -g expo-cli
```

**Create the App**

```bash
cd ..
npx create-expo-app mobile --template Navigation\ \(TypeScript\)
cd mobile
npm start
```

> Open the Expo Dev Tools in your browser. Use a simulator or scan QR code with the Expo Go app.

Push it to GitHub:

```bash
cd mobile
git add .
git commit -m "Initialize React Native mobile app"
git push origin main
```

---

### ⚙️ 5. Setup Backend with Node.js/Express

**Initialize Backend**

```bash
cd ..
mkdir backend
cd backend
npm init -y
npm install express cors dotenv
```

**Create `index.js`**

```js
// backend/index.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Big Vision RV API is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

**Run the Server**

```bash
node index.js
```

Push it to GitHub:

```bash
cd ..
git add backend
git commit -m "Initialize Node.js backend"
git push origin main
```

---

### 🔐 6. Environment Variable Setup

Create a `.env` file in each subdirectory (`web/`, `mobile/`, `backend/`) and add your API keys like so:

```env
# Example for backend
GOOGLE_MAPS_API_KEY=your_google_maps_key_here
VIN_API_KEY=your_vin_decoder_key_here
```

**Important:** Add `.env` to `.gitignore` first before creating `.env` files to avoid accidentally committing secrets.

Check `.gitignore`:

```bash
# .gitignore
.env
```

If you've already committed `.env`, remove it with:

```bash
git rm --cached .env
git commit -m "Ensure .env is ignored"
```

---

### 🌍 7. Project Directory Structure

```
big-vision-rv-app/
├── backend/        # Node.js + Express API
├── mobile/         # React Native mobile app (Expo)
├── web/            # React web app
└── README.md
```

---

### ✅ 8. Useful GitHub Tips

- Use **GitHub Projects** or **Issues** to track roadmap
- Protect `main` branch with PR reviews
- Enable **GitHub Actions** for CI/CD (optional)
- Setup **Secrets** in repo settings for any environment keys

---
