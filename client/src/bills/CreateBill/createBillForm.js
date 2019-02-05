import React from 'react';
import { useFormInput } from '../../utils/customHooks';

export default ({ createBill, loading }) => {

  const type = useFormInput('WATER');
  const amount = useFormInput('');
  const date = useFormInput('');

  const handleCreateBill = (e) => {
    e.preventDefault();
    createBill({
      variables: {
        type: type.value,
        amount: parseInt(amount.value),
        date: new Date(date.value)
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleCreateBill}>
        <div>
          <label className="block mb-4 text-grey-darker inline-block font-bold">Type</label>
          <select
            type="select"
            name="type" {...type}
            className="appearance-none bg-transparent border rounded w-full py-4 px-4 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="WATER">Water</option>
            <option value="ELECTRICITY">Electricity</option>
            <option value="WASTE">Waste</option>
            <option value="INTERNET">Internet</option>
          </select>
        </div>
        <div className="my-8">
          <label className="block mb-4 text-grey-darker inline-block font-bold">Amount</label>
          <input
            type="number"
            min="100"
            name="amount" {...amount}
            className="appearance-none border rounded w-full py-4 px-4 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="my-8">
          <label className="block mb-4 text-grey-darker inline-block font-bold">Date</label>
          <input
            type="date"
            name="date" {...date}
            className="appearance-none border rounded w-full py-4 px-4 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          disabled={loading}
          className="bg-gradient-teal rounded py-4 font-bold px-10 text-white">
          Submit
        </button>
      </form>
    </div >
  );
}
