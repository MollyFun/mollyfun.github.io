import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #ff3366;
    --color-secondary: #6633ff;
    --color-tertiary: #33ff99;
    --color-background: #0a0a0a;
    --color-text: #f5f5f5;
    --color-accent: #ffcc00;
    
    --font-primary: 'Space Grotesk', sans-serif;
    --font-secondary: 'Montserrat', sans-serif;
    
    --transition-slow: 0.5s ease;
    --transition-medium: 0.3s ease;
    --transition-fast: 0.15s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: var(--font-primary);
    background-color: var(--color-background);
    color: var(--color-text);
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-secondary);
  }

  /* Abstract background gradient */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 10% 20%, rgba(255, 51, 102, 0.1) 0%, transparent 20%),
                radial-gradient(circle at 90% 30%, rgba(102, 51, 255, 0.1) 0%, transparent 25%),
                radial-gradient(circle at 50% 80%, rgba(51, 255, 153, 0.1) 0%, transparent 30%);
    z-index: -1;
    pointer-events: none;
  }
`;

export default GlobalStyles;
