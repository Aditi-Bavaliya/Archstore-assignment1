import React from 'react';
import styled from 'styled-components';

const MarketTrendContainer = styled.div`
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

const MarketTrend = () => (
  <MarketTrendContainer>
    <GraphImage src={require('../assets/market-trend-graph.jpeg')} alt="Market Trend Graph" />
  </MarketTrendContainer>
);

export default MarketTrend;
