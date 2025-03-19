import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  background: rgba(10, 10, 10, 0.8);
`;

interface MenuButtonProps {
  $isOpen: boolean;
}

const MenuButton = styled.button<MenuButtonProps>`
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  
  span {
    display: block;
    width: 30px;
    height: 2px;
    background: var(--color-text);
    transition: all 0.3s ease;
    
    &:nth-child(1) {
      transform: ${({ $isOpen }) => 
        $isOpen ? 'translateY(8px) rotate(45deg)' : 'none'};
    }
    
    &:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
    }
    
    &:nth-child(3) {
      transform: ${({ $isOpen }) => 
        $isOpen ? 'translateY(-8px) rotate(-45deg)' : 'none'};
    }
  }
`;

const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--color-background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const NavList = styled(motion.ul)`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
`;

const NavItem = styled(motion.li)`
  font-size: 3rem;
  font-weight: 600;
  position: relative;
  
  a {
    display: inline-block;
    position: relative;
    transition: all 0.3s ease;
    
    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: 8px;
      bottom: 0;
      left: 0;
      background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
      z-index: -1;
      transition: width 0.3s ease;
    }
    
    &:hover {
      transform: translateY(-5px);
      
      &::before {
        width: 100%;
      }
    }
  }
`;

const menuVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };
  
  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <StyledHeader style={{ 
      padding: scrolled ? '1rem 1.5rem' : '1.5rem',
      boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'
    }}>
      <Logo />
      
      <MenuButton $isOpen={isOpen} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
      
      <AnimatePresence>
        {isOpen && (
          <MenuOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <NavList
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <NavItem variants={itemVariants}>
                <Link to="/" onClick={closeMenu}>Home</Link>
              </NavItem>
              <NavItem variants={itemVariants}>
                <Link to="/works" onClick={closeMenu}>Works</Link>
              </NavItem>
              <NavItem variants={itemVariants}>
                <Link to="/about" onClick={closeMenu}>About</Link>
              </NavItem>
              <NavItem variants={itemVariants}>
                <Link to="/contact" onClick={closeMenu}>Contact</Link>
              </NavItem>
            </NavList>
          </MenuOverlay>
        )}
      </AnimatePresence>
    </StyledHeader>
  );
};

export default Header;
