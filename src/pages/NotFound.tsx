import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

const NotFoundTitle = styled(motion.h1)`
  font-size: 10rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  color: transparent;
  -webkit-text-stroke: 2px var(--color-primary);
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const NotFoundSubtitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NotFoundText = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 2.5rem;
  opacity: 0.8;
`;

const NotFoundBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 40%, rgba(102, 51, 255, 0.1) 0%, transparent 30%),
                radial-gradient(circle at 70% 60%, rgba(255, 51, 102, 0.1) 0%, transparent 30%);
    z-index: 0;
  }
`;

const GlitchEffect = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-primary);
  mix-blend-mode: overlay;
  opacity: 0.05;
  clip-path: polygon(0 0, 100% 0, 100% 5%, 0 10%, 0 15%, 100% 20%, 100% 25%, 0 30%, 0 35%, 100% 40%, 100% 45%, 0 50%, 0 55%, 100% 60%, 100% 65%, 0 70%, 0 75%, 100% 80%, 100% 85%, 0 90%, 0 95%, 100% 100%, 0 100%);
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundBackground>
        <GlitchEffect 
          animate={{ 
            clipPath: [
              'polygon(0 0, 100% 0, 100% 5%, 0 10%, 0 15%, 100% 20%, 100% 25%, 0 30%, 0 35%, 100% 40%, 100% 45%, 0 50%, 0 55%, 100% 60%, 100% 65%, 0 70%, 0 75%, 100% 80%, 100% 85%, 0 90%, 0 95%, 100% 100%, 0 100%)',
              'polygon(0 5%, 100% 0, 100% 10%, 0 15%, 0 20%, 100% 25%, 100% 30%, 0 35%, 0 40%, 100% 45%, 100% 50%, 0 55%, 0 60%, 100% 65%, 100% 70%, 0 75%, 0 80%, 100% 85%, 100% 90%, 0 95%, 0 100%, 100% 100%)',
              'polygon(0 0, 100% 0, 100% 5%, 0 10%, 0 15%, 100% 20%, 100% 25%, 0 30%, 0 35%, 100% 40%, 100% 45%, 0 50%, 0 55%, 100% 60%, 100% 65%, 0 70%, 0 75%, 100% 80%, 100% 85%, 0 90%, 0 95%, 100% 100%, 0 100%)',
            ],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 5,
            ease: 'easeInOut',
          }}
        />
      </NotFoundBackground>
      
      <NotFoundTitle
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        404
      </NotFoundTitle>
      
      <NotFoundSubtitle
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Page Not Found
      </NotFoundSubtitle>
      
      <NotFoundText
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </NotFoundText>
      
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Button as={Link} to="/" variant="primary" size="large">
          Back to Home
        </Button>
      </motion.div>
    </NotFoundContainer>
  );
};

export default NotFound;
