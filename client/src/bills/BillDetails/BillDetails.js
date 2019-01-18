import React from 'react';
import Moment from 'react-moment';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { formatMoney } from '../../utils/format';


export default ({ bill }) => {
  const billType = bill.type.toLowerCase();

  const cardStyle = classNames('mt-10 px-8 py-6 border-solid border-t-4 shadow', {
    'border-teal-lighter': billType === "water",
    'border-green-lighter': billType === "electricity",
    'border-orange-lighter': billType === "waste",
    'border-blue-lighter': billType === "internet"
  });

  const typeStyle = classNames('font-bold text-white rounded uppercase text-xl px-3', {
    'text-teal': billType === "water",
    'text-green': billType === "electricity",
    'text-orange': billType === "waste",
    'text-blue': billType === "internet"
  });

  return (
    <div className={cardStyle}>
      <div className="flex justify-between">
        <p>
          <FontAwesomeIcon icon="calendar-alt" />
          <span class="pl-2">
            <Moment unix format="DD MMM YYYY">{bill.date}</Moment>
          </span>
        </p>
        <div className={typeStyle}>
          <span>{`${bill.type} bill`}</span>
        </div>
      </div>
      <div className="mt-16">
        <p>{formatMoney(bill.amount)}</p>
      </div>
    </div>
  )
}
