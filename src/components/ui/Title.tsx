import styled from 'styled-components';
import { motion } from 'framer-motion';

interface TitleProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  size?: 'small' | 'medium' | 'large';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  accent?: boolean;
}

const StyledTitle = styled(motion.h2)<{
  $align: string;
  $size: string;
  $accent: boolean;
}>`
  position: relative;
  text-align: ${({ $align }) => $align};
  margin-bottom: 2rem;
  
  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return `
          font-size: 1.5rem;
          
          @media (min-width: 768px) {
            font-size: 1.75rem;
          }
        `;
      case 'large':
        return `
          font-size: 2.5rem;
          
          @media (min-width: 768px) {
            font-size: 3.5rem;
          }
        `;
      default:
        return `
          font-size: 2rem;
          
          @media (min-width: 768px) {
            font-size: 2.5rem;
          }
        `;
    }
  }}
  
  ${({ $accent }) =>
    $accent &&
    `
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
      border-radius: 2px;
    }
  `}
  
  ${({ $align, $accent }) =>
    $accent &&
    $align === 'center' &&
    `
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  `}
  
  ${({ $align, $accent }) =>
    $accent &&
    $align === 'right' &&
    `
    &::after {
      left: auto;
      right: 0;
    }
  `}
`;

const Title = ({
  children,
  align = 'left',
  size = 'medium',
  as = 'h2',
  className,
  accent = true,
}: TitleProps) => {
  return (
    <StyledTitle
      as={as}
      $align={align}
      $size={size}
      $accent={accent}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </StyledTitle>
  );
};

export default Title;
