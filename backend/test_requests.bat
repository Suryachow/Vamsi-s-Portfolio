@echo off
echo ===== Checking backend health =====
curl -s http://localhost:5000/api/health || echo FAILED_TO_CONNECT
echo.
echo ===== Submitting test contact (POST) =====
curl -s -X POST http://localhost:5000/api/contact/submit -H "Content-Type: application/json" -d "{\"name\":\"Tester\",\"email\":\"tester@example.com\",\"message\":\"Hello from test script\"}" || echo FAILED_TO_CONNECT
echo.
echo ===== Fetching messages =====
curl -s http://localhost:5000/api/contact/messages || echo FAILED_TO_CONNECT
echo.
echo ===== Done =====
pause
