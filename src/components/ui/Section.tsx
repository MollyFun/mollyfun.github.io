import { ReactNode } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  fullHeight?: boolean;
  dark?: boolean;
  padding?: 'small' | 'medium' | 'large' | 'none';
}

const StyledSection = styled(motion.section)<{
  $fullHeight: boolean;
  $dark: boolean;
  $padding: string;
}>`
  position: relative;
  width: 100%;
  min-height: ${({ $fullHeight }) => ($fullHeight ? '100vh' : 'auto')};
  background-color: ${({ $dark }) => 
    $dark ? 'var(--color-background)' : 'rgba(15, 15, 15, 0.5)'};
  overflow: hidden;
  
  ${({ $padding }) => {
    switch ($padding) {
      case 'small':
        return `padding: 2rem 1.5rem;`;
      case 'large':
        return `padding: 8rem 1.5rem;`;
      case 'none':
        return `padding: 0;`;
      default:
        return `padding: 5rem 1.5rem;`;
    }
  }}
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ $dark }) => 
      $dark 
        ? 'radial-gradient(circle at 30% 40%, rgba(102, 51, 255, 0.05) 0%, transparent 30%)' 
        : 'radial-gradient(circle at 70% 60%, rgba(255, 51, 102, 0.05) 0%, transparent 30%)'};
    z-index: 0;
    pointer-events: none;
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Section = ({
  children,
  id,
  className,
  fullHeight = false,
  dark = false,
  padding = 'medium',
}: SectionProps) => {
  return (
    <StyledSection
      id={id}
      className={className}
      $fullHeight={fullHeight}
      $dark={dark}
      $padding={padding}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <SectionContent>{children}</SectionContent>
    </StyledSection>
  );
};

export default Section;
