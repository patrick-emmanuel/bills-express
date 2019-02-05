import React from 'react';
import { Mutation } from "react-apollo";
import CreateBillForm from './createBillForm';
import { CREATE_BILL } from '../mutations';
import { GET_PAGINATED_BILLS } from '../queries';

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

  const updateBillsCache = (cache, { data: { createBill } }) => {
    const { bills: { edges } } = cache.readQuery({ query: GET_PAGINATED_BILLS });
    cache.writeQuery({
      query: GET_PAGINATED_BILLS,
      data: {
        bills: {
          edges: [createBill].concat(edges)
        }
      },
    });
  }

  return (
    <Mutation
      mutation={CREATE_BILL}
      update={updateBillsCache}
      onCompleted={onCompleted}
      onError={onError}>
      {(createBill, { loading }) => {
        return (
          <CreateBillForm
            createBill={createBill}
            loading={loading}
          />
        );
      }}
    </Mutation>
  );
};

export default CreateBill;