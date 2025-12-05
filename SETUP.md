# Setup Instructions for MERN Stack Portfolio

## Quick Start

### Step 1: Enable PowerShell Scripts (One-time setup)
Open PowerShell as Administrator and run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Step 2: Install Dependencies

**Option A: Install all at once (Recommended)**
```bash
npm install
cd frontend && npm install && cd ..
cd backend && npm install && cd ..
```

**Option B: Install separately**
```bash
# Root dependencies
npm install

# Frontend dependencies
cd frontend
npm install
cd ..

# Backend dependencies
cd backend
npm install
cd ..
```

### Step 3: Setup MongoDB

**Option A: Local MongoDB**
1. Install MongoDB Community Edition from https://www.mongodb.com/try/download/community
2. Start MongoDB service
3. Create `.env` file in `backend` folder:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

**Option B: MongoDB Atlas (Cloud - Free)**
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get connection string
4. Create `.env` file in `backend` folder:
```
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
NODE_ENV=development
```

### Step 4: Run the Application

**Development Mode (Both servers):**
```bash
npm run dev
```

**Or run separately:**

Terminal 1 - Backend:
```bash
cd backend
npm run dev
```

Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
```

### Step 5: Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Troubleshooting

### If npm commands don't work:
1. Open Command Prompt (cmd) instead of PowerShell
2. Or run: `powershell -ExecutionPolicy Bypass -Command "npm install"`

### If MongoDB connection fails:
- Check if MongoDB is running
- Verify connection string in `.env` file
- For Atlas: Check IP whitelist and credentials

### Port already in use:
- Change ports in `vite.config.js` (frontend) and `backend/server.js`

## Features Included

✅ React frontend with Vite
✅ Express.js backend
✅ MongoDB integration
✅ Three.js 3D graphics
✅ Framer Motion animations
✅ Particle background effects
✅ Contact form with backend API
✅ Fully responsive design
✅ Modern dark theme with gradients

