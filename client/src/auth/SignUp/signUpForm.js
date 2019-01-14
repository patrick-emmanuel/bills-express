import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useFormInput } from '../../utils/customHooks';

const SignUpForm = ({ signUp }) => {

  const email = useFormInput('');
  const password = useFormInput('');

  const handleSignUp = (e) => {
    e.preventDefault();
    signUp({
      variables: {
        email: email.value,
        password: password.value
      }
    });
  }

  return (
    <section className="login-wrapper">
      <Form onSubmit={handleSignUp}>
        <FormGroup>
          <Label>Email</Label>
          <Input name="email" {...email} />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" name="password" {...password} />
        </FormGroup>
        <Button>Sign Up</Button>
      </Form>
    </section>
  );
}

export default SignUpForm;