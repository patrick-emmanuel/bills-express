import React from 'react';
import BillItem from './BillItem';
import { Mutation } from "react-apollo";

import { PAY_BILL } from '../mutations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ bills }) => {
  if (bills.length > 0) {
    return (
      <div className="flex justify-center flex-col mt-4">
        {bills.map(bill => (
          <BillItemView key={bill.id} bill={bill} />
        ))}
      </div>
    )
  } else {
    return (
      <div className="flex items-center justify-center flex-col">
        <h3 className="mt-10 text-grey mb-5">Empty. Create bills to see them here.</h3>
        <FontAwesomeIcon icon="box-open" color="grey" size="6x" className="text-grey" />
      </div>
    )
  }
}

const BillItemView = ({ bill }) => {

  const { id } = bill;
  return (
    <Mutation
      key={id}
      mutation={PAY_BILL}
      variables={{ id }}>
      {(payBill, { loading }) => {
        return (
          <BillItem
            key={bill.id}
            bill={bill}
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