import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dee2e6;
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const HeaderLinks = styled.div`
  a {
    margin-left: 20px;
    color: #007bff;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Dashboard</HeaderTitle>
      <HeaderLinks>
        <a href="#search">Search</a>
        <a href="#customize">Customize</a>
        <a href="#export">Export</a>
      </HeaderLinks>
    </HeaderContainer>
  );
};

export default Header;
