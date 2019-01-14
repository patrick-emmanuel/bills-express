import React from 'react';

export default ({ bills }) => {
  return (
    bills.map(bill => <BillItem key={bill.id} bill={bill} />)
  )
}

const BillItem = ({ bill }) => (
  <div>
    <p>{bill.type}</p>
    <p>{bill.amount}</p>
  </div>
)