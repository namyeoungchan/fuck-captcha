(function (root, factory) {
  if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof exports === 'object') module.exports = factory();
  else root.GameCaptchaLoader = factory();
}(typeof self !== 'undefined' ? self : this, function () {
  return function initGameCaptcha(opts) {
    const container = typeof opts.container === 'string' ? document.querySelector(opts.container) : opts.container;
    if (!container) throw new Error('container not found');
    // 간단한 odyc 초기화 (pseudo)
    const frame = document.createElement('iframe');
    frame.style.border = '0';
    frame.width = opts.width || '320';
    frame.height = opts.height || '240';
    container.appendChild(frame);

    // 메시지 수신
    const listener = (ev) => {
      if (ev.data && ev.data.__GAME_CAPTCHA_SUCCESS) {
        opts.onSuccess && opts.onSuccess(ev.data.__GAME_CAPTCHA_SUCCESS);
      }
    };
    window.addEventListener('message', listener);

    return {
      destroy() {
        window.removeEventListener('message', listener);
        frame.remove();
      }
    };
  };
}));
