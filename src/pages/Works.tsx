import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/ui/Section';
import Title from '../components/ui/Title';
import Grid from '../components/ui/Grid';
import Card from '../components/ui/Card';
import { works, categories } from '../data/works';

const WorksSection = styled(Section)``;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  background: ${({ $active }) => 
    $active ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.1)'};
  color: var(--color-text);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ $active }) => 
      $active ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.2)'};
  }
`;

const EmptyMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  padding: 3rem 0;
  opacity: 0.7;
`;

const Works = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredWorks = activeCategory === 'All'
    ? works
    : works.filter((work) => work.category === activeCategory);
  
  return (
    <WorksSection>
      <Title align="left" size="large">My Works</Title>
      
      <FilterContainer>
        {categories.map((category) => (
          <FilterButton
            key={category}
            $active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </FilterButton>
        ))}
      </FilterContainer>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {filteredWorks.length > 0 ? (
            <Grid columns={3} gap="2rem">
              {filteredWorks.map((work) => (
                <Card
                  key={work.id}
                  title={work.title}
                  category={work.category}
                  image={work.image}
                  year={work.year.toString()}
                  link={`/works/${work.id}`}
                />
              ))}
            </Grid>
          ) : (
            <EmptyMessage>No works found in this category.</EmptyMessage>
          )}
        </motion.div>
      </AnimatePresence>
    </WorksSection>
  );
};

export default Works;
