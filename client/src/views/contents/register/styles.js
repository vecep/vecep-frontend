import styled from 'styled-components';
import Button from 'components/utils/button';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 40vw;
`;

const FormContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 1.5rem;
  margin-bottom: 40px;
`;

const PasswordContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
`;

const RegisterButton = styled(Button)`
  width: 100%;
`;

const LoginLink = styled(Link)`
  display: flex;
  align-self: center;
  color: #48A7FF;
  text-decoration: none;
  margin-top: 30px;

  &:hover {
    text-decoration: underline;
  }
`;

export { Container, FormContainer, PasswordContainer, RegisterButton, LoginLink };
