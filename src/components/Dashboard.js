import React from 'react';
import styled from 'styled-components';
import MarketTrend from './MarketTrend';
import Opportunities from './Opportunities';
import IndustryTrend from './IndustryTrend';
import CampaignPerformance from './CampaignPerformance';

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin: 10px 0;
  grid-column: span 2;

  @media (max-width: 1200px) {
    grid-column: span 1;
  }
`;

const Dashboard = () => (
  <DashboardContainer>
    <SectionTitle>Current Market Trend</SectionTitle>
    <MarketTrend />
    <Opportunities />
    <SectionTitle>Trending in your Industry</SectionTitle>
    <IndustryTrend />
    <CampaignPerformance />
  </DashboardContainer>
);

export default Dashboard;
