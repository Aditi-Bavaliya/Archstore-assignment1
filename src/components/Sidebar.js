import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 80px;
  background-color: #f8f9fa;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const SidebarItem = styled.div`
  margin: 20px 0;
  cursor: pointer;
  svg {
    fill: #6c757d;
    width: 24px;
    height: 24px;
  }
`;

const Sidebar = () => (
  <SidebarContainer>
    <SidebarItem><i class="fa-brands fa-adn"></i></SidebarItem>
    <SidebarItem><i class="fa-solid fa-house-user"></i></SidebarItem>
    <SidebarItem><i class="fa-solid fa-signal"></i></SidebarItem>
    <SidebarItem><i class="fa-solid fa-chart-pie"></i></SidebarItem>
    <SidebarItem><i class="fa-solid fa-user"></i></SidebarItem>
    <SidebarItem><i class="fa-solid fa-gear"></i></SidebarItem>
  </SidebarContainer>
);

export default Sidebar;
