import React from 'react';
import { render, screen } from '@testing-library/react';
import { GameCaptcha } from '../GameCaptcha';

// Mock Element.attachShadow
Object.defineProperty(Element.prototype, 'attachShadow', {
  value: function(options: ShadowRootInit) {
    return this;
  },
  writable: true
});

describe('GameCaptcha', () => {
  const mockOnSuccess = jest.fn();

  beforeEach(() => {
    mockOnSuccess.mockClear();
  });

  it('renders with default props', () => {
    render(<GameCaptcha onSuccess={mockOnSuccess} />);
    
    const captcha = screen.getByLabelText('game captcha');
    expect(captcha).toBeInTheDocument();
    expect(captcha).toHaveClass('game-captcha', 'game-captcha--light');
  });

  it('applies dark theme class', () => {
    render(<GameCaptcha onSuccess={mockOnSuccess} theme="dark" />);
    
    const captcha = screen.getByLabelText('game captcha');
    expect(captcha).toHaveClass('game-captcha--dark');
  });

  it('calls onSuccess when receiving valid message', () => {
    render(<GameCaptcha onSuccess={mockOnSuccess} />);
    
    // Simulate postMessage event
    const mockEvent = new MessageEvent('message', {
      data: { __GAME_CAPTCHA_SUCCESS: 'test-token-123' }
    });
    
    window.dispatchEvent(mockEvent);
    
    expect(mockOnSuccess).toHaveBeenCalledWith('test-token-123');
  });

  it('ignores invalid messages', () => {
    render(<GameCaptcha onSuccess={mockOnSuccess} />);
    
    // Simulate invalid postMessage event
    const mockEvent = new MessageEvent('message', {
      data: { some_other_data: 'test' }
    });
    
    window.dispatchEvent(mockEvent);
    
    expect(mockOnSuccess).not.toHaveBeenCalled();
  });
});
