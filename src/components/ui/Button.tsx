import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  onClick?: () => void;
  as?: React.ElementType;
  to?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

const StyledButton = styled(motion.button)<{
  $variant: string;
  $size: string;
  $fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--font-primary);
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  
  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return `
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        `;
      case 'large':
        return `
          padding: 1rem 2rem;
          font-size: 1.125rem;
        `;
      default:
        return `
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
        `;
    }
  }}
  
  ${({ $variant }) => {
    switch ($variant) {
      case 'secondary':
        return `
          background: var(--color-secondary);
          color: var(--color-text);
          border: none;
          
          &:hover {
            background: #5522ee;
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: var(--color-text);
          border: 2px solid var(--color-primary);
          
          &:hover {
            background: rgba(255, 51, 102, 0.1);
          }
        `;
      case 'text':
        return `
          background: transparent;
          color: var(--color-text);
          border: none;
          padding-left: 0;
          padding-right: 0;
          
          &:hover {
            color: var(--color-primary);
          }
        `;
      default:
        return `
          background: var(--color-primary);
          color: var(--color-text);
          border: none;
          
          &:hover {
            background: #e62e5c;
          }
        `;
    }
  }}
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 0;
    background: rgba(255, 255, 255, 0.1);
    transform: translate(-50%, -50%);
    transition: height 0.6s ease;
    z-index: 0;
  }
  
  &:hover::before {
    height: 100%;
  }
  
  & > * {
    position: relative;
    z-index: 1;
  }
`;

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  onClick,
  as,
  to,
  href,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      as={as}
      to={to}
      href={href}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      onClick={onClick}
      type={type}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
