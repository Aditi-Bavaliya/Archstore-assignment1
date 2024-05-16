import React from 'react';
import styled from 'styled-components';

const IndustryTrendContainer = styled.div`
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

const IndustryTrend = () => {
  return (
    <IndustryTrendContainer>
      <GraphImage src={require('../assets/industry-trend-graph.png')} alt="Industry Trend Graph" />
    </IndustryTrendContainer>
  );
};

export default IndustryTrend;
