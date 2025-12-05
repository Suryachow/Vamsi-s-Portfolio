import http from 'http';

const makeRequest = (method, path, body = null) => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 5000,
      path,
      method,
      headers: { 'Content-Type': 'application/json' }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });

    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
};

(async () => {
  console.log('=== BACKEND API TESTS ===\n');

  try {
    console.log('--- GET /api/health ---');
    const health = await makeRequest('GET', '/api/health');
    console.log('Status:', health.status);
    console.log('Response:', health.body);
    console.log();
  } catch (e) {
    console.error('HEALTH ERR:', e.message);
    console.log();
  }

  try {
    console.log('--- POST /api/contact/submit ---');
    const post = await makeRequest('POST', '/api/contact/submit', {
      name: 'Tester',
      email: 'tester@example.com',
      message: 'Hello from automated test'
    });
    console.log('Status:', post.status);
    console.log('Response:', post.body);
    console.log();
  } catch (e) {
    console.error('POST ERR:', e.message);
    console.log();
  }

  try {
    console.log('--- GET /api/contact/messages ---');
    const messages = await makeRequest('GET', '/api/contact/messages');
    console.log('Status:', messages.status);
    console.log('Response:', messages.body);
    console.log();
  } catch (e) {
    console.error('MESSAGES ERR:', e.message);
    console.log();
  }

  console.log('=== DONE ===');
})();
