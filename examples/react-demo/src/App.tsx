import React, { useState } from 'react';
import { GameCaptcha } from 'fuck-captcha';

function App() {
  const [token, setToken] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);

  const handleSuccess = async (captchaToken: string) => {
    console.log('Captcha solved! Token:', captchaToken);
    setToken(captchaToken);
    
    // 서버 검증 예시
    try {
      const response = await fetch('/captcha/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: captchaToken })
      });
      
      const result = await response.json();
      if (result.success) {
        setIsVerified(true);
        console.log('Token verified!', result.data);
      }
    } catch (error) {
      console.error('Verification failed:', error);
    }
  };

  return (
    <div className="App">
      <h1>Fuck Captcha Demo</h1>
      
      {!isVerified ? (
        <div>
          <p>Solve the game to proceed:</p>
          <GameCaptcha 
            onSuccess={handleSuccess}
            theme="light"
            locale="en"
          />
        </div>
      ) : (
        <div>
          <h2>✅ Captcha Verified!</h2>
          <p>Token: {token}</p>
        </div>
      )}
    </div>
  );
}

export default App;
