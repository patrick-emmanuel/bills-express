import React, { useState } from 'react';
import BillItem from './BillItem';
import { Mutation } from "react-apollo";

import { PAY_BILL } from '../queries';

export default ({ bills }) => (
  <div className="flex justify-center flex-col mt-6">
    {bills.map(bill => (
      <BillItemView key={bill.id} bill={bill} />
    ))}
  </div>
)

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