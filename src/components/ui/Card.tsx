import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  category: string;
  image: string;
  link: string;
  year?: string;
}

const CardContainer = styled(motion.article)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  height: 400px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.7) 80%
    );
    z-index: 1;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 0.9;
  }
`;

const CardImage = styled.div<{ $image: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  transition: transform 0.6s ease;
  
  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  z-index: 2;
  transform: translateY(20px);
  transition: transform 0.3s ease;
  
  ${CardContainer}:hover & {
    transform: translateY(0);
  }
`;

const CardCategory = styled.span`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
  opacity: 0.9;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-text);
`;

const CardYear = styled.span`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
`;

const CardLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  
  &::after {
    content: 'View Project';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--color-primary);
    color: var(--color-text);
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${CardContainer}:hover &::after {
    opacity: 1;
  }
`;

const Card = ({ title, category, image, link, year }: CardProps) => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <CardImage $image={image} />
      <CardContent>
        <CardCategory>{category}</CardCategory>
        <CardTitle>{title}</CardTitle>
        {year && <CardYear>{year}</CardYear>}
      </CardContent>
      <CardLink to={link} />
    </CardContainer>
  );
};

export default Card;
