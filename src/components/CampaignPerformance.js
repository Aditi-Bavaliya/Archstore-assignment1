import React from 'react';
import styled from 'styled-components';

const CampaignPerformanceContainer = styled.div`
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

const CampaignPerformance = () => {
  return (
    <CampaignPerformanceContainer>
      <GraphImage src={require('../assets/campaign-performance-graph.png')} alt="Campaign Performance Graph" />
    </CampaignPerformanceContainer>
  );
};

export default CampaignPerformance;
