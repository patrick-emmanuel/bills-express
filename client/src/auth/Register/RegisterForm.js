import React from 'react';
import { useFormInput } from '../../utils/customHooks';

const RegisterForm = ({ register }) => {

  const email = useFormInput('');
  const password = useFormInput('');

  const handleRegister = (e) => {
    e.preventDefault();
    register({
      variables: {
        email: email.value,
        password: password.value
      }
    });
  }

  return (
    <section className="login-wrapper">
      <form onSubmit={handleRegister}>
        <div>
          <label>Email</label>
          <input name="email" {...email} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" {...password} />
        </div>
        <button>Register</button>
      </form>
    </section>
  );
}

export default RegisterForm;