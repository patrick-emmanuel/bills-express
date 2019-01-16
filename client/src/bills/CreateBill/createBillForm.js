import React from 'react';
import { useFormInput } from '../../utils/customHooks';

export default ({ createBill }) => {

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
    <div className="container">
      <form onSubmit={handleCreateBill}>
        <div>
          <lable for="type">Type</lable>
          <select type="select" name="type" {...type}>
            <option value="WATER">Water</option>
            <option value="ELECTRICITY">Electricity</option>
            <option value="WASTE">Waste</option>
            <option value="INTERNET">Internet</option>
          </select>
        </div>
        <div>
          <label for="amount">Amount</label>
          <input type="number" min="100" name="amount" {...amount} />
        </div>
        <div>
          <label for="date">Date</label>
          <input type="date" name="date" {...date} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
