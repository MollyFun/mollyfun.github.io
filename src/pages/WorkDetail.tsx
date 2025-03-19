import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { works, Work } from '../data/works';
import Section from '../components/ui/Section';
import Title from '../components/ui/Title';
import Button from '../components/ui/Button';

const DetailSection = styled(Section)`
  padding-top: 120px;
`;

const BackButton = styled(Button)`
  margin-bottom: 2rem;
  display: inline-flex;
  align-items: center;
  
  &::before {
    content: '←';
    margin-right: 0.5rem;
  }
`;

const WorkImage = styled(motion.div)`
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const WorkMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
`;

const MetaItem = styled.div`
  h4 {
    font-size: 0.9rem;
    color: var(--color-secondary);
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1.1rem;
  }
`;

const WorkDescription = styled.div`
  margin: 2rem 0;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const RelatedWorks = styled.div`
  margin-top: 4rem;
  
  h3 {
    margin-bottom: 1.5rem;
  }
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const RelatedItem = styled(Link)`
  position: relative;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
  display: block;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    
    h4 {
      margin-bottom: 0.25rem;
    }
    
    p {
      font-size: 0.9rem;
      opacity: 0.8;
    }
  }
`;

const WorkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [work, setWork] = useState<Work | null>(null);
  const [relatedWorks, setRelatedWorks] = useState<Work[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Find the work by ID
    const foundWork = works.find(w => w.id.toString() === id);
    
    if (foundWork) {
      setWork(foundWork);
      
      // Find related works with the same category, excluding the current work
      const related = works
        .filter(w => w.category === foundWork.category && w.id !== foundWork.id)
        .slice(0, 3);
      
      setRelatedWorks(related);
    } else {
      // If work not found, redirect to 404
      navigate('/not-found');
    }
  }, [id, navigate]);
  
  if (!work) {
    return null; // Loading state
  }
  
  return (
    <DetailSection>
      <BackButton as={Link} to="/works" variant="text">
        Back to Works
      </BackButton>
      
      <Title size="large" align="left">{work.title}</Title>
      
      <WorkImage
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src={work.image} alt={work.title} />
      </WorkImage>
      
      <WorkMeta>
        <MetaItem>
          <h4>Category</h4>
          <p>{work.category}</p>
        </MetaItem>
        
        <MetaItem>
          <h4>Year</h4>
          <p>{work.year}</p>
        </MetaItem>
        
        {work.client && (
          <MetaItem>
            <h4>Client</h4>
            <p>{work.client}</p>
          </MetaItem>
        )}
      </WorkMeta>
      
      <WorkDescription>
        <p>{work.description}</p>
      </WorkDescription>
      
      {relatedWorks.length > 0 && (
        <RelatedWorks>
          <Title size="medium" align="left">Related Works</Title>
          
          <RelatedGrid>
            {relatedWorks.map(relatedWork => (
              <RelatedItem key={relatedWork.id} to={`/works/${relatedWork.id}`}>
                <img src={relatedWork.image} alt={relatedWork.title} />
                <div className="overlay">
                  <h4>{relatedWork.title}</h4>
                  <p>{relatedWork.category}</p>
                </div>
              </RelatedItem>
            ))}
          </RelatedGrid>
        </RelatedWorks>
      )}
    </DetailSection>
  );
};

export default WorkDetail;
