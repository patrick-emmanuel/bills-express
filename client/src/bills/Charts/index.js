import React from 'react';
import { Query } from 'react-apollo';

import { GET_BILLS_GROUP_BY_TYPE, GET_BILLS_GROUP_BY_PAID } from '../queries';
import TypeAmountChart from './TypeAmountChart';
import PaidAmountChart from './PaidAmountChart';

export default (params) => (

  //Look into onError
  <Query query={GET_BILLS_GROUP_BY_TYPE}>
    {({
      data: billsTypeData,
      loading: billsTypeLoading,
    }) => (
        <Query query={GET_BILLS_GROUP_BY_PAID}>
          {({
            data: billsPaidData,
            loading: billsPaidLoading,
          }) => {
            if (billsTypeData && !billsTypeLoading
              && billsPaidData && !billsPaidLoading
            ) {
              const { edges: billsTypeEdges } = billsTypeData.billsGroupByType;
              const { edges: billsPaidEdges } = billsPaidData.billsGroupByPaid;
              return (
                <>
                  <TypeAmountChart edges={billsTypeEdges} />
                  <PaidAmountChart edges={billsPaidEdges} />
                </>
              )
            }
            return null;
          }}
        </Query>
      )}
  </Query>
);
