import React from 'react';

const date = new Date();
let [month, day] = [date.getMonth(), date.getDate()];


if (day > 23) {
  month = month + 1;

  if (month > 12) {
    month = 1;
  }
}

const Button = () => {
  return (
    <div>
      <div><span data-testid='currentMonth'>{ month + 1}</span>月が誕生日の人をお祝いする</div>
      <div><span data-testid='nextMonth'>{ month + 2}</span>月が誕生日の人をお祝いする</div>
    </div>
  );
}

export default Button;
