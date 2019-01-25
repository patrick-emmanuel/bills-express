import React, { useState } from 'react';
import BillItem from './BillItem';
import { Mutation } from "react-apollo";

import { PAY_BILL } from '../queries';
import emptyImage from '../../icons/box.png';

export default ({ bills }) => {
  if (bills.length > 0) {
    return (
      <div className="flex justify-center flex-col mt-6">
        {bills.map(bill => (
          <BillItemView key={bill.id} bill={bill} />
        ))}
      </div>
    )
  } else {
    return (
      <div className="flex items-center justify-center flex-col">
        <h3 className="mt-10">Empty. Create bills to see them here.</h3>
        <img className="mt-4" src={emptyImage} alt="not found" />
      </div>
    )
  }
}

const BillItemView = ({ bill }) => {

  const [isBillPaid, setIsBillPaid] = useState(bill.paid);

  const billPaidCompleted = (data) => {
    setIsBillPaid(data.payBill.paid)
  }

  return (
    <Mutation key={bill.id}
      mutation={PAY_BILL}
      variables={{ id: bill.id }}
      onCompleted={billPaidCompleted}>
      {(payBill, { loading }) => {
        return (
          <BillItem
            key={bill.id}
            bill={bill}
            isBillPaid={isBillPaid}
            billPaidLoading={loading}
            handlePayClick={(id) => {
              payBill({
                variables: {
                  id
                }
              })
            }}
          />
        )
      }}
    </Mutation>
  )
}