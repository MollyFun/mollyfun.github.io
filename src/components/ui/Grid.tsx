import styled from 'styled-components';

interface GridProps {
  children: React.ReactNode;
  columns?: number;
  gap?: string;
  className?: string;
}

const StyledGrid = styled.div<{
  $columns: number;
  $gap: string;
}>`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ $gap }) => $gap};
  
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(${({ $columns }) => Math.min($columns, 3)}, 1fr);
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  }
`;

const Grid = ({
  children,
  columns = 3,
  gap = '2rem',
  className,
}: GridProps) => {
  return (
    <StyledGrid $columns={columns} $gap={gap} className={className}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
