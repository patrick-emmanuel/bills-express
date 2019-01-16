import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormInput } from '../../utils/customHooks';

const LoginForm = ({ login, loading }) => {

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
    <section className="flex mt-4 justify-center items-center">
      <div className="w-full md:w-1/3 bg-white md:mt-12 px-5 md:px-8 pt-8 mb-4 shadow-md rounded">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-teal mt-6 uppercase focus:text-blue">spikes express</h1>
        </div>
        <form onSubmit={handleLogin} className="md:px-8">
          <div className="my-8">
            <FontAwesomeIcon icon="envelope" color="grey" />
            <label className="pl-2 block mb-4 text-grey-darker inline-block font-bold">Email</label>
            <input name="email" {...email} className="appearance-none border rounded w-full py-4 px-4 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="my-6">
            <FontAwesomeIcon icon="key" color="grey" />
            <label className="pl-2 block mb-4 text-grey-darker inline-block font-bold">Password</label>
            <input type="password" name="password" {...password} className="appearance-none border rounded w-full py-4 px-4 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mt-12">
            <button disabled={loading} className="w-full bg-teal-dark hover:bg-teal-darker text-white font-bold py-5 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
          </div>
          <div className="flex flex-col items-center justify-center pt-6 pb-12">
            <p className="pb-2">or</p>
            <Link to="/register" className="no-underline">Register</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;