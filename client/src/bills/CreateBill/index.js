import React from 'react';
import { Mutation } from "react-apollo";
import CreateBillForm from './createBillForm';
import { CREATE_BILL } from '../mutations';

const CreateBill = ({ history }) => {

  //Work on error messages.
  const onError = error => {
    return (
      <div>Error! {error.message}</div>
    )
  }

  const onCompleted = data => {
    let id = encodeURIComponent(data.createBill.id)
    history.push(`/bills/${id}`);
  }

  return (
    <Mutation
      mutation={CREATE_BILL}
      onCompleted={onCompleted}
      onError={onError}>
      {(createBill, { data, loading }) => {
        return (
          <CreateBillForm
            createBill={createBill}
            loading={loading} />
        );
      }}
    </Mutation>
  );
};

export default CreateBill;