import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import classNames from 'classnames';

import { formatMoney } from '../../utils/format';

export default ({
  bill,
  handlePayClick,
  isBillPaid,
  billPaidLoading
}) => {

  const payButton = classNames('px-10 mr-4 py-3 text-white rounded', {
    'bg-green': isBillPaid,
    'bg-red': !isBillPaid
  });

  return (
    <div className="bg-grey-lighter border-grey-light px-8 py-6 border-solid mb-10 rounded shadow">
      <div>
        <p>
          <Moment unix format="MMM YYYY">{bill.date}</Moment>
        </p>
        <div className="flex justify-center">
          <div className="my-16">
            <Link to={`/bills/${bill.id}`} className="no-underline flex text-center w-64">
              <span className="bg-teal-light h-full font-bold no-underline w-full text-white rounded uppercase text-sm py-4">
                {`${bill.type} bill`}
              </span>
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <button
              disabled={isBillPaid || billPaidLoading}
              className={payButton}
              onClick={() => handlePayClick(bill.id)}>
              {isBillPaid ? "Paid" : "Pay"}
            </button>
          </div>
          <p>{formatMoney(bill.amount)}</p>
        </div>
      </div>
    </div>
  );
}