@echo off
echo === TESTING BACKEND API ===
echo.

echo [1/3] GET /api/health
curl -s http://localhost:5000/api/health
echo.
echo.

echo [2/3] POST /api/contact/submit
curl -s -X POST http://localhost:5000/api/contact/submit -H "Content-Type: application/json" -d "{\"name\":\"TestUser\",\"email\":\"test@example.com\",\"message\":\"Hello World from test script\"}"
echo.
echo.

echo [3/3] GET /api/contact/messages
curl -s http://localhost:5000/api/contact/messages
echo.
echo.

echo === DONE ===
