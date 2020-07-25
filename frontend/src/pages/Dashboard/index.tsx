import React from 'react';

import NavBarDashboard from '../../components/NavBarDashboard';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <NavBarDashboard />
      <Content>OIEE</Content>
    </Container>
  );
};

export default Dashboard;
