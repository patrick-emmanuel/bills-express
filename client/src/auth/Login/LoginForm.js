import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormInput } from '../../utils/customHooks';
import dataIllustration from '../../assets/financial_data.svg';

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
    <section className="flex justify-center items-center">
      <div className="hidden bg-grey-lighter h-screen md:block w-2/3">
        <img src={dataIllustration} alt="financial illustration" />
      </div>
      <div className="w-full sm:w-5/2 md:w-1/3 bg-white px-5 md:mx-12 md:px-4 pt-6 mt-10">
        <div className="flex justify-center items-center">
          <svg className="text-teal fill-current h-8 w-8 mr-2 mt-5" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
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
            <button disabled={loading} className="w-full bg-gradient-teal hover:bg-teal-darker text-white font-bold py-5 px-4 rounded focus:outline-none focus:shadow-outline">{loading ? 'Loggin in...' : 'Login'}</button>
          </div>
          <div className="flex items-center justify-center pt-6 pb-12">
            <p className="pr-3">or</p>
            <Link to="/register" className="no-underline">Register</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;