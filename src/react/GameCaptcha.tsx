import React, { useEffect, useRef } from 'react';

type Props = {
  siteKey?: string; // optional developer key
  onSuccess: (token: string) => void;
  theme?: 'light' | 'dark';
  locale?: string;
};

export function GameCaptcha({ onSuccess, siteKey, theme = 'light', locale = 'en' }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    // 안전하게 ShadowRoot 사용
    const host = document.createElement('div');
    const shadow = host.attachShadow ? host.attachShadow({ mode: 'closed' }) : host;
    root.appendChild(host);

    // Odyc 게임을 동적으로 삽입
    const script = document.createElement('script');
    // 예: 빌드된 Odyc 게임 스니펫 (또는 CDN 경유) 를 여기에 넣을 수 있음
    script.type = 'module';
    script.textContent = `
      // 간단한 odyc 게임 초기화 예시 (pseudo)
      import { createOdyc } from 'odyc';
      const game = createOdyc({ container: document.currentScript.parentNode, seed: Math.random() });
      game.on('win', () => {
        const token = 'gc_' + crypto.randomUUID();
        window.parent.postMessage({ __GAME_CAPTCHA_SUCCESS: token }, '*');
      });
    `;
    shadow.appendChild(script);

    // 이벤트 리스너 (토큰 수신)
    const handler = (ev: MessageEvent) => {
      if (ev.data && ev.data.__GAME_CAPTCHA_SUCCESS) {
        onSuccess(ev.data.__GAME_CAPTCHA_SUCCESS as string);
      }
    };
    window.addEventListener('message', handler);

    return () => {
      window.removeEventListener('message', handler);
      try { host.remove(); } catch(e) {}
    };
  }, [onSuccess, siteKey, theme, locale]);

  return (
    <div className={`game-captcha game-captcha--${theme}`} ref={containerRef} aria-label="game captcha" />
  );
}
