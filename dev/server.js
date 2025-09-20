import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;

// 정적 파일 서빙
app.use(express.static(__dirname));
app.use('/dist', express.static(join(__dirname, '../dist')));
app.use('/src', express.static(join(__dirname, '../src')));

// CORS 설정
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// 개발용 API 엔드포인트
app.get('/api/test', (req, res) => {
    res.json({
        message: 'Game Captcha 개발 서버가 실행 중입니다!',
        timestamp: new Date().toISOString(),
        environment: 'development'
    });
});

// CAPTCHA 검증 시뮬레이션
app.post('/api/verify', express.json(), (req, res) => {
    const { token } = req.body;
    
    console.log('토큰 검증 요청:', token);
    
    // 간단한 토큰 검증 시뮬레이션
    if (token && token.startsWith('gc_')) {
        res.json({
            success: true,
            message: '검증 성공',
            token: token,
            timestamp: new Date().toISOString()
        });
    } else {
        res.status(400).json({
            success: false,
            message: '유효하지 않은 토큰',
            timestamp: new Date().toISOString()
        });
    }
});

// 메인 페이지
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Game Captcha 개발 서버가 실행되었습니다!`);
    console.log(`📱 테스트 페이지: http://localhost:${PORT}`);
    console.log(`🔧 API 테스트: http://localhost:${PORT}/api/test`);
    console.log(`⚡ 실시간 새로고침을 위해 파일을 수정해보세요!`);
});
