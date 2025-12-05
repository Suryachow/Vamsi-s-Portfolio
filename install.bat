@echo off
echo Installing MERN Stack Portfolio Dependencies...
echo.

echo Installing root dependencies...
call npm install
if errorlevel 1 (
    echo Error installing root dependencies
    pause
    exit /b 1
)

echo.
echo Installing frontend dependencies...
cd frontend
call npm install
if errorlevel 1 (
    echo Error installing frontend dependencies
    cd ..
    pause
    exit /b 1
)
cd ..

echo.
echo Installing backend dependencies...
cd backend
call npm install
if errorlevel 1 (
    echo Error installing backend dependencies
    cd ..
    pause
    exit /b 1
)
cd ..

echo.
echo ========================================
echo Installation Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Create backend\.env file (see SETUP.md)
echo 2. Start MongoDB
echo 3. Run: npm run dev
echo.
pause

