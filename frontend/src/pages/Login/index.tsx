import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';

import { FormHandles } from '@unform/core';
import { RiArrowDownSLine, RiArrowLeftLine } from 'react-icons/ri';
import { MdLock, MdMail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import imgLogo from '../../assets/logo.jpg';
import Input from '../../components/Input';
import { Container, Content, Header } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/Toast';
import { useAuth } from '../../hooks/Auth';
import Button from '../../components/Button';
import { tertiaryColor } from '../../styles/paletsColorers';

interface ISingInFormData {
  login: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { signIn } = useAuth();

  const handleSubmit = useCallback(async (data: ISingInFormData) => {
    console.log(data);
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        login: Yup.string().required('Como deseja logar sem email ou Login? '),
        password: Yup.string().required('Como deseja logar sem senha? '),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { login, password } = data;
      signIn({ login, password });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
      });
    }
  }, []);

  return (
    <Container>
      <Header>
        <Link to="/">
          <RiArrowLeftLine size={40} />
          Voltar
        </Link>
      </Header>

      <Content>
        <img src={imgLogo} alt="LAMIA" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            icon={MdMail}
            name="login"
            type="text"
            placeholder="E-mail ou Login"
            activeColor={tertiaryColor}
          />
          <Input
            icon={MdLock}
            name="password"
            type="password"
            placeholder="Senha"
            activeColor={tertiaryColor}
          />

          <Button width="50%" type="submit">
            Entrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
