import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Title from '../components/ui/Title';
import Button from '../components/ui/Button';
import Grid from '../components/ui/Grid';
import Card from '../components/ui/Card';
import { works } from '../data/works';

// Get featured works (first 3 works)
const featuredWorks = works.slice(0, 3);

// Hero Section
const HeroSection = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(to top, var(--color-background), transparent);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  z-index: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
  
  span {
    display: block;
    color: var(--color-primary);
  }
`;

const HeroText = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

// About Section
const AboutSection = styled(Section)``;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  height: 400px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255, 51, 102, 0.3), rgba(102, 51, 255, 0.3));
    z-index: 1;
    opacity: 0.6;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid var(--color-primary);
    top: 20px;
    left: 20px;
    z-index: -1;
    border-radius: 12px;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AboutText = styled(motion.p)`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
`;

// Works Section
const WorksSection = styled(Section)``;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

// Contact Section
const ContactSection = styled(Section)`
  text-align: center;
`;

const ContactText = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 2.5rem;
  opacity: 0.9;
`;

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection fullHeight padding="none">
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Creative & Abstract
            <span>Artistic Portfolio</span>
          </HeroTitle>
          
          <HeroText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Exploring the boundaries between digital and traditional art forms
            with a unique perspective and abstract approach.
          </HeroText>
          
          <HeroButtons
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button as={Link} to="/works" variant="primary" size="large">
              View Works
            </Button>
            <Button as={Link} to="/contact" variant="outline" size="large">
              Get in Touch
            </Button>
          </HeroButtons>
        </HeroContent>
      </HeroSection>
      
      {/* About Section */}
      <AboutSection>
        <Title align="left" size="large">About Me</Title>
        
        <AboutGrid>
          <AboutImage
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" 
              alt="Artist in studio" 
            />
          </AboutImage>
          
          <AboutContent>
            <AboutText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              I'm a multidisciplinary artist focused on creating abstract and modern 
              artwork that challenges conventional perspectives. My work explores the 
              intersection of digital and traditional mediums, often incorporating 
              elements of geometry, color theory, and emotional expression.
            </AboutText>
            
            <AboutText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              With over 10 years of experience in the creative field, I've developed 
              a unique style that combines technical precision with artistic freedom. 
              My goal is to create visually striking pieces that evoke emotion and 
              inspire conversation.
            </AboutText>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button as={Link} to="/about" variant="text">
                Learn more about my journey →
              </Button>
            </motion.div>
          </AboutContent>
        </AboutGrid>
      </AboutSection>
      
      {/* Works Section */}
      <WorksSection>
        <SectionHeader>
          <Title align="left" size="large" accent>Featured Works</Title>
          <Button as={Link} to="/works" variant="outline">
            View All Works
          </Button>
        </SectionHeader>
        
        <Grid columns={3} gap="2rem">
          {featuredWorks.map((work) => (
            <Card
              key={work.id}
              title={work.title}
              category={work.category}
              image={work.image}
              year={work.year.toString()}
              link={work.link || `#work-${work.id}`}
            />
          ))}
        </Grid>
      </WorksSection>
      
      {/* Contact Section */}
      <ContactSection>
        <Title align="center" size="large">Let's Create Together</Title>
        
        <ContactText
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Interested in collaborating or commissioning a piece? 
          I'm always open to new projects and creative partnerships.
        </ContactText>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Button as={Link} to="/contact" variant="primary" size="large">
            Get in Touch
          </Button>
        </motion.div>
      </ContactSection>
    </>
  );
};

export default Home;
