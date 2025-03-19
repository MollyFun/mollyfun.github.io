import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CursorOuter = styled(motion.div)`
  position: fixed;
  width: 40px;
  height: 40px;
  border: 2px solid var(--color-primary);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: transform 0.1s ease;
`;

const CursorInner = styled(motion.div)`
  position: fixed;
  width: 8px;
  height: 8px;
  background-color: var(--color-primary);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
`;

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || 
          (e.target as HTMLElement).tagName === 'BUTTON' ||
          (e.target as HTMLElement).closest('a') ||
          (e.target as HTMLElement).closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.5,
    },
  };

  const innerVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 0,
    },
  };

  // Only render custom cursor on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      <CursorOuter
        variants={variants}
        animate={isHovering ? 'hover' : 'default'}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <CursorInner
        variants={innerVariants}
        animate={isHovering ? 'hover' : 'default'}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
    </>
  );
};

export default CustomCursor;
