import React from 'react'
import { Link } from 'react-router-dom';

export default ({ me, logout }) => (
  <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
    <div>
      <Link to="/" className="no-underline text-white flex items-center flex-no-shrink text-white mr-6">
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
        <span className="font-semibold text-xl tracking-tight uppercase">Spikes Express</span>
      </Link>
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      </button>
      <Link to="/bills/create" className="bg-white rounded border-2 teal-dark px-7 py-4">
        New Bill
       </Link>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
        <p>{me.email}</p>
      </div>
      <div className="mr-10">
        <Link to="/bills/create" className="bg-white text-teal font-semibold text-sm no-underline rounded px-10 py-3">
          New Bill
                  </Link>
        <button onClick={() => logout()}>Logout</button>
      </div>
    </div>
  </nav>
);
