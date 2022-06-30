import { render, screen } from '@testing-library/react'
import MonthButton from '../conponents/MonthButton'

describe('month button', () => {
  test('have text', () => {
    render(<MonthButton />);

    const thisMonth = screen.getByTestId('currentMonth');
    const nextMonth = screen.getByTestId('nextMonth');

    const date = new Date();
    let [month, day] = [date.getMonth(), date.getDate()];
    month = month + 1;

    function checkOverYaersMonth(month, day) {
      if (day > 23) {
        month = month + 1;

        if (month > 12) {
          month = 1;
        }
      }

      return month;
    }

    month = checkOverYaersMonth(month, day);

    expect(thisMonth).toHaveTextContent(month);
    expect(nextMonth).toHaveTextContent(month + 1);

    expect(checkOverYaersMonth(1, 23)).toBe(1);
    expect(checkOverYaersMonth(1, 24)).toBe(2);

    // function checkOverYaers(month) {
    //   if (month > 12) {
    //     month = 1;
    //   }
    // }

    // month = setMonth(month, day);
  })
})
