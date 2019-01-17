import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import classNames from 'classnames';

import { formatMoney } from '../../utils/format';

export default ({ bill }) => {

  const billType = bill.type.toLowerCase();

  const cardStyle = classNames('mt-10 md:mx-64 sm:mx-16 mx-6 px-8 py-6 rounded border-solid border-t-4 shadow', {
    'border-teal-lighter': billType === "water",
    'border-green-lighter': billType === "electricity",
    'border-orange-lighter': billType === "waste",
    'border-blue-lighter': billType === "internet"
  });

  const typeStyle = classNames('h-full font-bold no-underline text-white rounded uppercase text-sm p-3', {
    'bg-teal-light': billType === "water",
    'bg-green-light': billType === "electricity",
    'bg-orange-light': billType === "waste",
    'bg-blue-light': billType === "internet"
  });

  return (
    <div className={cardStyle}>
      <div>
        <p>
          <Moment unix format="MMM YYYY">{bill.date}</Moment>
        </p>
        <div className="flex justify-center items-center">
          <Link to={`/bills/${bill.id}`} className="no-underline mx-5 py-10">
            <span className={typeStyle}>{`${bill.type} bill`}</span>
          </Link>
        </div>
        <p>{formatMoney(bill.amount)}</p>
      </div>
    </div>
  )
}