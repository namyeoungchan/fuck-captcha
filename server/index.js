const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const SECRET = process.env.GC_SECRET || 'change-this-secret-in-prod';

// 게임 성공 시 발급되는 토큰을 서버에서 서명해서 전달하는 흐름 예시
app.post('/captcha/issue', (req, res) => {
  const { clientToken } = req.body; // clientToken: 클라이언트가 제출한 무작위 토큰
  if (!clientToken) return res.status(400).json({ error: 'missing token' });

  // 검증 로직: 예시에서는 단순히 존재 여부만 확인.
  // 실전: 게임 세션 ID + 서버측 시드와 대조하거나 HMAC 검증 필요
  const payload = { sub: clientToken };
  const signed = jwt.sign(payload, SECRET, { expiresIn: '5m' });
  res.json({ success: true, token: signed });
});

app.post('/captcha/verify', (req, res) => {
  const { token } = req.body; // 서버 서명 토큰
  try {
    const decoded = jwt.verify(token, SECRET);
    res.json({ success: true, data: decoded });
  } catch (e) {
    res.status(401).json({ success: false, error: 'invalid or expired token' });
  }
});

if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => console.log(`Server listening ${port}`));
}

module.exports = app;
