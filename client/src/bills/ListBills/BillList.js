import React from 'react';
import BillItem from './BillItem';

export default ({ bills }) => {
  return (
    <div className="flex justify-center flex-col mt-6 mb-12">
      {bills.map(bill => <BillItem key={bill.id} bill={bill} />)}
    </div>
  )
}