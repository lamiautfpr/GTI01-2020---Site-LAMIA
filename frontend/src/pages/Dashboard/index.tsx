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
import { useToast } from '../../hooks/Toast';
import getValidationErrors from '../../utils/getValidationErrors';
import NavBarDashboard from '../../components/NavBarDashboard';
import Input from '../../components/Input';
import Textarea from '../../components/Input/Textarea';
import Button from '../../components/Button';

import imgMemberDefault from '../../assets/imgDefault/member.jpg';

import { Container, Content, HeaderSection } from './styles';
import AppError from '../../utils/AppError';

interface IMemberFormProps extends IMembersProps {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { member } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(async (data: IMemberFormProps) => {
    try {
      console.log(data);
      formRef.current?.setErrors({});

      const shema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatorio'),
        quoteName: Yup.string().required('Nome de citação obrigatorio'),
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

      if (
        data.oldPassword.length === 0 &&
        (data.newPassword.length !== 0 || data.confirmPassword.length !== 0)
      ) {
        throw new AppError(
          'Para atualizar a senha é preciso confirmar a senha atual!',
        );
      }

      // signIn({ login, password });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
      if (err instanceof AppError) {
        addToast({
          type: 'error',
          title: 'Erro na atualização',
          description: err.mensagem,
        });
      }
    }
  }, []);

  return (
    <Container>
      <NavBarDashboard />
      <Content>
        <HeaderSection>
          <h2>Meu Perfil </h2>
        </HeaderSection>
        <Form ref={formRef} initialData={member} onSubmit={handleSubmit}>
          <section>
            <div className="img">
              <img
                src={member.avatar ? member.avatar.src : imgMemberDefault}
                alt="Json Doe"
              />
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
                  name="quoteName"
                  type="text"
                  placeholder="Como você deve ser citado nos artigos?"
                  isFormGroup
                />
              </div>

              <Textarea name="description" placeholder="Bioo" />
            </div>
          </section>
          <Input icon={MdMail} name="email" type="text" placeholder="E-mail" />
          <Input
            icon={FaGithub}
            name="git_hub"
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
