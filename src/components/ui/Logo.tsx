import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface LogoProps {
  color?: 'light' | 'dark';
  size?: 'small' | 'medium' | 'large';
}

const LogoContainer = styled(Link)<{ $size: string; $color: string }>`
  display: flex;
  align-items: center;
  font-family: var(--font-secondary);
  font-weight: 700;
  text-decoration: none;
  color: ${({ $color }) => ($color === 'light' ? 'var(--color-text)' : 'var(--color-background)')};
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '1.2rem';
      case 'large':
        return '2rem';
      default:
        return '1.5rem';
    }
  }};
`;

const LogoSymbol = styled.div<{ $size: string; $color: string }>`
  width: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '24px';
      case 'large':
        return '40px';
      default:
        return '32px';
    }
  }};
  height: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '24px';
      case 'large':
        return '40px';
      default:
        return '32px';
    }
  }};
  margin-right: 10px;
  position: relative;
  
  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
  }
  
  &::before {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    top: 0;
    left: 0;
  }
  
  &::after {
    width: 60%;
    height: 60%;
    background: ${({ $color }) => ($color === 'light' ? 'var(--color-background)' : 'var(--color-text)')};
    top: 20%;
    left: 20%;
    mix-blend-mode: ${({ $color }) => ($color === 'light' ? 'screen' : 'multiply')};
  }
`;

const Logo = ({ color = 'light', size = 'medium' }: LogoProps) => {
  return (
    <LogoContainer to="/" $color={color} $size={size}>
      <LogoSymbol $color={color} $size={size} />
      Artfolio
    </LogoContainer>
  );
};

export default Logo;
