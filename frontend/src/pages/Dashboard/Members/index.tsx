import React, { useRef, useCallback, useState, useEffect } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { MdMail } from 'react-icons/md';
import { FaUserNinja, FaMedal } from 'react-icons/fa';
import { OptionTypeBase } from 'react-select';
import { useAuth, IMembersProps } from '../../../hooks/Auth';
import { useToast } from '../../../hooks/Toast';
import getValidationErrors from '../../../utils/getValidationErrors';
import NavBarDashboard from '../../../components/NavBarDashboard';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import api from '../../../services/api';

import Select from '../../../components/Select';

import imgMemberDefault from '../../../assets/imgDefault/member.jpg';

import { Container, Content, HeaderSection } from './styles';
import AppError from '../../../utils/AppError';

interface IMemberFormProps extends IMembersProps {
  oldPassword?: string;
  password?: string;
  confirmPassword?: string;
}

const DashboardMembers: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { member, token, updateMember } = useAuth();
  const { addToast } = useToast();
  const [members, setMembers] = useState<IMembersProps[]>([]);
  const [offices, setOffices] = useState<OptionTypeBase[]>([]);

  const handleSubmit = useCallback(
    async (data: IMemberFormProps) => {
      try {
        formRef.current?.setErrors({});

        const shema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          login: Yup.string().required('Login obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-maio valido'),
        });

        await shema.validate(data, {
          abortEarly: false,
        });

        if (
          data.oldPassword?.length === 0 &&
          (data.password?.length !== 0 || data.confirmPassword?.length !== 0)
        ) {
          throw new AppError(
            'Para atualizar a senha é preciso confirmar a senha atual!',
          );
        }

        if (data.oldPassword?.length === 0 && data.password?.length === 0) {
          // eslint-disable-next-line no-param-reassign
          delete data.oldPassword;
          // eslint-disable-next-line no-param-reassign
          delete data.password;
        }

        const response = await api.put('/members', data, {
          headers: { authorization: `Bearer ${token}` },
        });
        updateMember(response.data);
        addToast({
          type: 'success',
          title: 'Perfil Atualizando!',
        });

        formRef.current?.clearField('oldPassword');
        formRef.current?.clearField('password');
        formRef.current?.clearField('confirmPassword');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }
        if (err instanceof AppError) {
          addToast({
            type: 'error',
            title: 'Erro na atualização',
            description: err.mensagem,
          });
          return;
        }
        if (err.response.status === 401) {
          addToast({
            type: 'error',
            title: 'Dados inválidos',
            description: err.response.data.error,
          });
          return;
        }
        addToast({
          type: 'error',
          title: 'Internal Server ERROR',
          description:
            'Tente mais tarde! Caso erro persista entre em contato com o suporte :D',
        });
      }
    },
    [addToast, token, updateMember],
  );

  useEffect(() => {
    api.get(`members/`).then((response) => {
      setOffices(response.data.officesMembers);
      setMembers(response.data.members);
    });

    console.log(offices);
  }, []);

  return (
    <Container>
      <NavBarDashboard page="members" />
      <Content>
        <HeaderSection>
          <h2>Integrantes </h2>
        </HeaderSection>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group">
            <Input
              icon={FaUserNinja}
              name="name"
              type="password"
              placeholder="Nome do novo integrante"
              isFormGroup
            />

            <Input
              icon={FaUserNinja}
              name="login"
              type="text"
              placeholder="Login do novo integrante"
              isFormGroup
            />
          </div>
          <Input
            icon={MdMail}
            name="email"
            type="mail"
            placeholder="Email do novo integrante"
          />
          <Select
            name="office"
            icon={FaMedal}
            placeholder="Selecione a Patente!"
            options={offices}
          />
          <Button width="250px" type="submit">
            Novo Integrante
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default DashboardMembers;
