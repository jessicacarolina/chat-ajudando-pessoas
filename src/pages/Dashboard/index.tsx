import React from 'react';
import { FiPower } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
} from './styles';

const Dashboard: React.FC = () => {
  const { singOut } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Ajudando Pessoas" />

          <Profile>
            <div>
              <span>Bem-vindo(a),</span>
              <strong>Nome</strong>
            </div>
          </Profile>

          <button type="button" onClick={singOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Button>
          Chat
        </Button>
      </Content>
    </Container>
  );
};

export default Dashboard;
