# NPM 퍼블리시 가이드

## 1. NPM 계정 준비
```bash
# npm 로그인
npm login

# 현재 로그인 사용자 확인
npm whoami
```

## 2. 패키지명 확인
```bash
# 패키지명이 이미 사용중인지 확인
npm view fuck-captcha

# 사용중이면 package.json에서 이름 변경
# 예: "@your-username/fuck-captcha"
```

## 3. 퍼블리시
```bash
# 빌드 확인
npm run build

# 퍼블리시
npm publish

# scoped 패키지인 경우 (@ 포함)
npm publish --access public
```

## 4. 퍼블리시 후 사용법
```bash
# 다른 프로젝트에서 설치
npm install fuck-captcha

# 또는 scoped 패키지
npm install @your-username/fuck-captcha
```

## 5. 업데이트 배포
```bash
# 버전 업데이트
npm version patch  # 0.1.0 -> 0.1.1
npm version minor  # 0.1.1 -> 0.2.0
npm version major  # 0.2.0 -> 1.0.0

# 다시 퍼블리시
npm publish
```

## 주의사항
- 패키지명은 전세계적으로 유니크해야 함
- fuck-captcha는 이미 사용중일 가능성이 높음
- @your-username/fuck-captcha 형태로 scoped 패키지 추천
