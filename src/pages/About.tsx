import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Title from '../components/ui/Title';

const AboutSection = styled(Section)``;

const AboutHeader = styled.div`
  margin-bottom: 4rem;
`;

const AboutIntro = styled(motion.p)`
  font-size: 1.5rem;
  line-height: 1.6;
  max-width: 800px;
  margin-bottom: 2rem;
  
  span {
    color: var(--color-primary);
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    object-fit: cover;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 60%;
    height: 60%;
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    z-index: -1;
    border-radius: 12px;
    opacity: 0.5;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: -20px;
    width: 40%;
    height: 40%;
    background: var(--color-tertiary);
    z-index: -1;
    border-radius: 12px;
    opacity: 0.5;
  }
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Paragraph = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
`;

const SkillsSection = styled(Section)``;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled.div``;

const SkillCategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--color-primary);
  }
`;

const SkillList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkillItem = styled(motion.li)`
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background: var(--color-primary);
    border-radius: 50%;
  }
`;

const ExperienceSection = styled(Section)``;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    width: 2px;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    
    @media (min-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const TimelineItem = styled(motion.div)<{ $align: 'left' | 'right' }>`
  position: relative;
  margin-bottom: 3rem;
  padding-left: 50px;
  
  @media (min-width: 768px) {
    width: 45%;
    margin-left: ${({ $align }) => ($align === 'right' ? 'auto' : '0')};
    padding-left: ${({ $align }) => ($align === 'right' ? '0' : '50px')};
    padding-right: ${({ $align }) => ($align === 'right' ? '50px' : '0')};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 16px;
    width: 10px;
    height: 10px;
    background: var(--color-primary);
    border-radius: 50%;
    
    @media (min-width: 768px) {
      left: ${({ $align }) => ($align === 'right' ? 'auto' : '16px')};
      right: ${({ $align }) => ($align === 'right' ? '16px' : 'auto')};
    }
  }
`;

const TimelineDate = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(255, 51, 102, 0.2);
  border-radius: 4px;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const TimelineSubtitle = styled.h4`
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 1rem;
`;

const TimelineText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const About = () => {
  return (
    <>
      <AboutSection>
        <AboutHeader>
          <Title align="left" size="large">About Me</Title>
          
          <AboutIntro
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            I'm a <span>multidisciplinary artist</span> with a passion for creating 
            abstract and modern artwork that challenges conventional perspectives.
          </AboutIntro>
        </AboutHeader>
        
        <AboutContent>
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
          
          <AboutText>
            <Paragraph
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Born and raised in a creative household, I developed a love for art at an early age. 
              My journey as an artist began with traditional painting and drawing, but quickly 
              evolved to incorporate digital mediums and experimental techniques.
            </Paragraph>
            
            <Paragraph
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              My work explores the intersection of digital and traditional mediums, often 
              incorporating elements of geometry, color theory, and emotional expression. 
              I'm particularly interested in how abstract forms can convey complex emotions 
              and ideas that transcend language barriers.
            </Paragraph>
            
            <Paragraph
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              With over 10 years of experience in the creative field, I've developed a unique 
              style that combines technical precision with artistic freedom. My goal is to create 
              visually striking pieces that evoke emotion and inspire conversation.
            </Paragraph>
            
            <Paragraph
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              When I'm not creating art, you can find me exploring nature, visiting galleries, 
              or experimenting with new techniques and materials in my studio.
            </Paragraph>
          </AboutText>
        </AboutContent>
      </AboutSection>
      
      <SkillsSection>
        <Title align="left" size="large">Skills & Expertise</Title>
        
        <SkillsContainer>
          <SkillCategory>
            <SkillCategoryTitle>Digital Art</SkillCategoryTitle>
            <SkillList>
              <SkillItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                3D Modeling & Rendering
              </SkillItem>
              <SkillItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Digital Illustration
              </SkillItem>
              <SkillItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Generative Art
              </SkillItem>
              <SkillItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Motion Graphics
              </SkillItem>
            </SkillList>
          </SkillCategory>
          
          <SkillCategory>
            <SkillCategoryTitle>Traditional Art</SkillCategoryTitle>
            <SkillList>
              <SkillItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Acrylic & Oil Painting
              </SkillItem>
              <SkillItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Sculpture & Installation
              </SkillItem>
              <SkillItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Mixed Media
              </SkillItem>
              <SkillItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Drawing & Sketching
              </SkillItem>
            </SkillList>
          </SkillCategory>
          
          <SkillCategory>
            <SkillCategoryTitle>Photography</SkillCategoryTitle>
            <SkillList>
              <SkillItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Abstract Photography
              </SkillItem>
              <SkillItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Experimental Techniques
              </SkillItem>
              <SkillItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Digital Manipulation
              </SkillItem>
              <SkillItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Conceptual Photography
              </SkillItem>
            </SkillList>
          </SkillCategory>
          
          <SkillCategory>
            <SkillCategoryTitle>Software</SkillCategoryTitle>
            <SkillList>
              <SkillItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Adobe Creative Suite
              </SkillItem>
              <SkillItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Blender & Cinema 4D
              </SkillItem>
              <SkillItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Procreate & Digital Painting
              </SkillItem>
              <SkillItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Processing & Creative Coding
              </SkillItem>
            </SkillList>
          </SkillCategory>
        </SkillsContainer>
      </SkillsSection>
      
      <ExperienceSection>
        <Title align="left" size="large">Experience & Education</Title>
        
        <Timeline>
          <TimelineItem 
            $align="left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TimelineDate>2020 - Present</TimelineDate>
            <TimelineTitle>Independent Artist</TimelineTitle>
            <TimelineSubtitle>Freelance & Gallery Exhibitions</TimelineSubtitle>
            <TimelineText>
              Working as an independent artist, creating commissioned pieces and exhibiting 
              work in galleries across the country. Specializing in abstract digital art 
              and mixed media installations.
            </TimelineText>
          </TimelineItem>
          
          <TimelineItem 
            $align="right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TimelineDate>2016 - 2020</TimelineDate>
            <TimelineTitle>Senior Digital Artist</TimelineTitle>
            <TimelineSubtitle>Creative Studio XYZ</TimelineSubtitle>
            <TimelineText>
              Led a team of artists in creating digital artwork for clients in various industries. 
              Developed unique visual styles and innovative approaches to digital art creation.
            </TimelineText>
          </TimelineItem>
          
          <TimelineItem 
            $align="left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TimelineDate>2012 - 2016</TimelineDate>
            <TimelineTitle>MFA in Fine Arts</TimelineTitle>
            <TimelineSubtitle>School of Visual Arts</TimelineSubtitle>
            <TimelineText>
              Specialized in digital and experimental art forms. Thesis focused on the 
              intersection of traditional painting techniques and digital manipulation.
            </TimelineText>
          </TimelineItem>
          
          <TimelineItem 
            $align="right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TimelineDate>2008 - 2012</TimelineDate>
            <TimelineTitle>BFA in Studio Art</TimelineTitle>
            <TimelineSubtitle>University of Creative Arts</TimelineSubtitle>
            <TimelineText>
              Foundational studies in various art forms including painting, sculpture, 
              photography, and digital art. Graduated with honors.
            </TimelineText>
          </TimelineItem>
        </Timeline>
      </ExperienceSection>
    </>
  );
};

export default About;
