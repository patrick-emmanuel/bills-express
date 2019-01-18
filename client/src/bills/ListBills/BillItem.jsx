import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import classNames from 'classnames';

import { formatMoney } from '../../utils/format';

export default ({ bill }) => {

  const billType = bill.type.toLowerCase();

  const cardStyle = classNames('px-8 py-6 border-solid mb-4 border-t-4 shadow', {
    'border-teal-lighter': billType === "water",
    'border-green-lighter': billType === "electricity",
    'border-orange-lighter': billType === "waste",
    'border-blue-lighter': billType === "internet"
  });

  const typeStyle = classNames('h-full font-bold no-underline w-full text-white rounded uppercase text-sm py-4', {
    'bg-teal-light': billType === "water",
    'bg-green-light': billType === "electricity",
    'bg-orange-light': billType === "waste",
    'bg-blue-light': billType === "internet"
  });

  const payButton = classNames('px-10 mr-4 py-3 text-white rounded', {
    'bg-green': bill.paid,
    'bg-red': !bill.paid
  });

  return (
    <div className={cardStyle}>
      <div>
        <p>
          <Moment unix format="MMM YYYY">{bill.date}</Moment>
        </p>
        <div className="flex justify-center">
          <div className="my-16">
            <Link to={`/bills/${bill.id}`} className="no-underline flex text-center w-64">
              <span className={typeStyle}>{`${bill.type} bill`}</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <button className={payButton}>
              {bill.paid ? "Paid" : "Pay"}
            </button>
          </div>
          <p>{formatMoney(bill.amount)}</p>
        </div>
      </div>
    </div>
  );
}