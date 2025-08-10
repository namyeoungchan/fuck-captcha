# fuck-captcha

A tiny, fun CAPTCHA built with Odyc.js. Provides a React component and a vanilla loader.

Usage (React):

```jsx
import { GameCaptcha } from 'fuck-captcha';
<GameCaptcha onSuccess={token => fetch('/captcha/verify',{method:'POST',body:JSON.stringify({token})})} />
```

## Installation

```bash
npm install fuck-captcha
```

## Features

- React component for easy integration
- Vanilla JavaScript loader for non-React projects
- Server-side verification examples
- Shadow DOM isolation to prevent style conflicts
- Theme support (light/dark)
- TypeScript support

## License

MIT
