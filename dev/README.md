# 🎮 Game Captcha 개발 환경

웹에서 Game Captcha 컴포넌트를 실시간으로 테스트할 수 있는 개발 환경입니다.

## 🚀 빠른 시작

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행

#### 기본 테스트 페이지
```bash
npm run dev
```
👉 브라우저에서 `http://localhost:3001` 접속

#### 고급 테스트 페이지
```bash
npm run dev
```
👉 브라우저에서 `http://localhost:3001/app.html` 접속

#### 서버와 함께 실행
```bash
npm run dev:all
```
- 개발 서버: `http://localhost:3001`
- 백엔드 서버: `http://localhost:3000`

## 📁 파일 구조

```
dev/
├── index.html      # 기본 테스트 페이지
├── app.html        # 고급 테스트 페이지
├── server.js       # 개발 서버
└── README.md       # 이 파일
```

## 🎯 테스트 기능

### 기본 테스트 페이지 (`index.html`)
- ✅ React 컴포넌트 실시간 테스트
- ✅ 테마 변경 (Light/Dark)
- ✅ 언어 설정 (한국어/English)
- ✅ 개발자 콘솔 연동
- ✅ 실시간 상태 확인

### 고급 테스트 페이지 (`app.html`)
- ✅ 모든 기본 기능
- ✅ 통계 및 성능 모니터링
- ✅ 서버 검증 시뮬레이션
- ✅ 로그 시스템
- ✅ 성공/실패 시뮬레이션
- ✅ 반응형 디자인

## 🔧 개발 도구

### API 엔드포인트
- `GET /api/test` - 서버 상태 확인
- `POST /api/verify` - 토큰 검증

### 사용 가능한 명령어
```bash
# 개발 서버만 실행
npm run dev

# 백엔드 서버만 실행
npm run dev:server

# 모든 서버 실행
npm run dev:all

# 프로덕션 빌드
npm run build

# 테스트 실행
npm test

# 타입 체크
npm run type-check
```

## 🎮 컴포넌트 테스트 방법

### 1. 기본 테스트
1. `npm run dev` 실행
2. 브라우저에서 페이지 열기
3. 테마/언어 변경해보기
4. 게임 완료 버튼 클릭
5. 개발자 도구에서 콘솔 확인

### 2. 고급 테스트
1. `npm run dev:all` 실행
2. `http://localhost:3001/app.html` 접속
3. 다양한 설정으로 테스트
4. 서버 검증 기능 테스트
5. 통계 및 로그 확인

### 3. 실제 컴포넌트 연동
```javascript
// dev/index.html 또는 dev/app.html에서
// GameCaptcha 컴포넌트를 실제 컴포넌트로 교체

import { GameCaptcha } from '../src/react/GameCaptcha.tsx';

// 컴포넌트 사용
<GameCaptcha
  onSuccess={handleSuccess}
  theme="light"
  locale="ko"
  siteKey="your-site-key"
/>
```

## 🔍 디버깅 팁

1. **브라우저 개발자 도구** 사용
   - F12 또는 우클릭 → 검사
   - Console 탭에서 로그 확인
   - Network 탭에서 API 호출 확인

2. **실시간 리로딩**
   - 파일 수정 시 자동 새로고침
   - 서버 재시작 없이 테스트 가능

3. **에러 확인**
   - 콘솔에서 에러 메시지 확인
   - 네트워크 요청 실패 여부 확인

## 🌟 고급 기능

### 커스텀 테스트 시나리오
```javascript
// 성공 시뮬레이션
window.simulateSuccess();

// 에러 시뮬레이션
window.simulateError();

// 설정 업데이트
window.updateCaptcha();

// 통계 확인
console.log(window.getStats());
```

### 성능 모니터링
- 렌더링 시간 측정
- 메모리 사용량 확인
- 네트워크 요청 분석

## 🚨 문제 해결

### 서버가 시작되지 않는 경우
```bash
# 포트 확인
lsof -i :3001

# 의존성 재설치
rm -rf node_modules package-lock.json
npm install
```

### 컴포넌트가 렌더링되지 않는 경우
1. React/ReactDOM CDN 로딩 확인
2. 브라우저 콘솔에서 에러 확인
3. 파일 경로 확인

### API 호출이 실패하는 경우
1. 서버가 실행 중인지 확인
2. CORS 설정 확인
3. 네트워크 탭에서 요청 확인

## 📚 추가 자료

- [React 공식 문서](https://reactjs.org/)
- [Express.js 문서](https://expressjs.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

**Happy Testing! 🎉**
