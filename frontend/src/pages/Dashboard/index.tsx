import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { MdLock, MdMail } from 'react-icons/md';
import {
  FaCamera,
  FaUserNinja,
  FaGithub,
  FaLinkedinIn,
  FaUserGraduate,
  FaUserTie,
} from 'react-icons/fa';
import { useAuth, IMembersProps } from '../../hooks/Auth';
import getValidationErrors from '../../utils/getValidationErrors';
import NavBarDashboard from '../../components/NavBarDashboard';
import Input from '../../components/Input';
import Button from '../../components/Button';

import imgTeste from '../../assets/logo.jpg';

import { Container, Content, HeaderSection } from './styles';

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { member } = useAuth();

  const handleSubmit = useCallback(async (data: IMembersProps) => {
    try {
      formRef.current?.setErrors({});

      const shema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatorio'),
        nameABNT: Yup.string().required('Nome de citação obrigatorio'),
        description: Yup.string(),
        email: Yup.string()
          .required('E-mail obrigatorio')
          .email('Digite um e-maio valido'),
        gitHub: Yup.string(),
        linkedin: Yup.string(),
        lattes: Yup.string(),
        oldPassword: Yup.string(),
        newPassword: Yup.string().when('oldPassword', {
          is: (val) => !!val.length,
          then: Yup.string().min(
            8,
            'A senha deve conter no minimo 8 caracteres',
          ),
          otherwise: Yup.string(),
        }),
        confirmPassword: Yup.string()
          .when('oldPassword', {
            is: (val) => !!val.length,
            then: Yup.string().min(
              8,
              'A senha deve conter no minimo 8 caracteres',
            ),
            otherwise: Yup.string(),
          })
          .oneOf(
            [Yup.ref('newPassword'), ''],
            'Duas senhas diferentes, qual devo salvar?',
          ),
      });

      await shema.validate(data, {
        abortEarly: false,
      });

      // signIn({ login, password });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <NavBarDashboard />
      <Content>
        <HeaderSection>
          <h2>Meu Perfil </h2>
        </HeaderSection>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={member}>
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
                  name="nameABNT"
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
              name="oldPassword"
              type="password"
              placeholder="Senha Atual"
              isFormGroup
            />
            <Input
              icon={MdLock}
              name="newPassword"
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
