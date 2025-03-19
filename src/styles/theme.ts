export const theme = {
  colors: {
    primary: '#ff3366',
    secondary: '#6633ff',
    tertiary: '#33ff99',
    background: '#0a0a0a',
    text: '#f5f5f5',
    accent: '#ffcc00',
    gray: {
      100: '#f5f5f5',
      200: '#e0e0e0',
      300: '#cccccc',
      400: '#999999',
      500: '#666666',
      600: '#444444',
      700: '#333333',
      800: '#222222',
      900: '#111111',
    }
  },
  fonts: {
    primary: "'Space Grotesk', sans-serif",
    secondary: "'Montserrat', sans-serif",
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  transitions: {
    slow: '0.5s ease',
    medium: '0.3s ease',
    fast: '0.15s ease',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    circle: '50%',
  },
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.15)',
    large: '0 8px 24px rgba(0, 0, 0, 0.2)',
  },
  zIndex: {
    base: 1,
    menu: 10,
    modal: 100,
    tooltip: 1000,
  },
};

export type Theme = typeof theme;
export default theme;
