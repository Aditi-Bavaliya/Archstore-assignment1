import React from 'react';
import styled from 'styled-components';

const OpportunitiesContainer = styled.div`
background-color: #ffffff;
border-radius: 8px;
padding: 20px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: auto;
`;


const GraphImage = styled.img`
  width: 100%;
  height: auto;
`;

const Opportunities = () => {
  return (
    <OpportunitiesContainer>
      <GraphImage src={require('../assets/opportunities-graph.png')} alt="Opportunities Graph" />
    </OpportunitiesContainer>
  );
};

export default Opportunities;
