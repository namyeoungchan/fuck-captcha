# Contributing to Fuck Captcha

Thank you for your interest in contributing to fuck-captcha! This document provides guidelines and information for contributors.

## Development Setup

1. Clone the repository:
```bash
git clone https://github.com/your-org/fuck-captcha.git
cd fuck-captcha
```

2. Install dependencies:
```bash
npm install
```

3. Start development build:
```bash
npm run build:dev
```

4. Run the server example:
```bash
cd server
npm install
npm start
```

## Project Structure

```
fuck-captcha/
├── src/
│   ├── index.tsx              # Main entry point
│   ├── react/
│   │   └── GameCaptcha.tsx    # React component
│   └── vanilla/
│       └── loader.js          # Vanilla JS loader
├── server/
│   └── index.js               # Express server example
├── examples/
│   ├── react-demo/            # React usage example
│   └── vanilla/               # Vanilla JS usage example
└── dist/                      # Built files
```

## Development Guidelines

### Code Style

- Use TypeScript for new React components
- Follow existing naming conventions
- Add JSDoc comments for public APIs
- Use meaningful variable and function names

### Testing

- Write unit tests for new features
- Test both React and vanilla implementations
- Include integration tests for server verification

### Security Considerations

- Never expose server secrets to client-side code
- Implement proper CSRF protection
- Use secure random token generation
- Validate all inputs on server-side

## Commit Messages

Follow conventional commits format:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `chore:` for maintenance tasks
- `refactor:` for code refactoring

Example:
```
feat: add dark theme support for GameCaptcha component
```

## Submitting Changes

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass: `npm test`
6. Commit your changes: `git commit -m 'feat: add amazing feature'`
7. Push to the branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

## Pull Request Guidelines

- Provide a clear description of the changes
- Reference any related issues
- Include screenshots for UI changes
- Ensure CI passes
- Update documentation if needed

## Security Issues

If you discover a security vulnerability, please email security@yourorg.com instead of opening a public issue.

## Questions?

Feel free to open an issue for questions or join our Discord server for real-time discussion.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
