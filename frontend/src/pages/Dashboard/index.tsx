import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { MdLock, MdMail } from 'react-icons/md';
import {
  FaCamera,
  FaUserNinja,
  FaGithub,
  FaLinkedinIn,
  FaUserGraduate,
  FaUserTie,
} from 'react-icons/fa';
import NavBarDashboard from '../../components/NavBarDashboard';
import Input from '../../components/Input';
import Button from '../../components/Button';

import imgTeste from '../../assets/logo.jpg';

import { Container, Content, HeaderSection } from './styles';

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {}, []);

  return (
    <Container>
      <NavBarDashboard />
      <Content>
        <HeaderSection>
          <h2>Meu Perfil </h2>
        </HeaderSection>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <section>
            <div className="img">
              <img src={imgTeste} alt="Json Doe" />
              <label htmlFor="avatar">
                <FaCamera />
                <input type="file" id="avatar" />
              </label>
            </div>
            <div className="form">
              <div className="form-group">
                <Input
                  icon={FaUserNinja}
                  name="name"
                  type="text"
                  placeholder="Como você prefere ser chamado?"
                  isFormGroup
                />
                <Input
                  icon={FaUserTie}
                  name="citationName"
                  type="text"
                  placeholder="Como você deve ser citado nos artigos?"
                  isFormGroup
                />
              </div>

              <textarea name="description" id="">
                Bio...
              </textarea>
            </div>
          </section>
          <Input icon={MdMail} name="email" type="text" placeholder="E-mail" />
          <Input
            icon={FaGithub}
            name="gitHub"
            type="text"
            placeholder="DoeJonh"
          >
            https://github.com/
          </Input>
          <Input
            icon={FaLinkedinIn}
            name="linkedin"
            type="text"
            placeholder="john-doe"
          >
            https://br.linkedin.com/public-profile/in/
          </Input>
          <Input
            icon={FaUserGraduate}
            name="lattes"
            type="text"
            placeholder="1289293936077853"
          >
            http://lattes.cnpq.br/
          </Input>

          <div className="form-group password">
            <Input
              icon={MdLock}
              name="password"
              type="password"
              placeholder="Senha Atual"
              isFormGroup
            />
            <Input
              icon={MdLock}
              name="password"
              type="password"
              placeholder="Nova Senha"
              isFormGroup
            />
            <Input
              icon={MdLock}
              name="confirmPassword"
              type="password"
              placeholder="Confirmar Nova Senha"
              isFormGroup
            />
          </div>
          <Button width="250px" type="submit">
            Atualizar Perfil
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Dashboard;
