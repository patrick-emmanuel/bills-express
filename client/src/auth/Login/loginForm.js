import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useFormInput } from '../../utils/customHooks';

const LoginForm = ({ login }) => {

  const email = useFormInput('');
  const password = useFormInput('');

  const handleLogin = (e) => {
    e.preventDefault();
    login({
      variables: {
        login: email.value,
        password: password.value
      }
    });
  }

  return (
    <section className="login-wrapper">
      <Form onSubmit={handleLogin}>
        <FormGroup>
          <Label>Email</Label>
          <Input name="email" {...email} />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" name="password" {...password} />
        </FormGroup>
        <Button>Login</Button>
      </Form>
    </section>
  );
}

export default LoginForm;