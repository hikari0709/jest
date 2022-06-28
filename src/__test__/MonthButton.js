import { render, screen } from '@testing-library/react'
import user from "@testing-library/user-event"
import MonthButton from '../conponents/MonthButton'

describe('test', () => {
  test('input form', () => {
    render(<MonthButton />);

    const thisMonth = screen.getByTestId('currentMonth');
    const nextMonth = screen.getByTestId('nextMonth');

    user.type(titleInput, "変更後");
    user.click(executeButton);
    expect(headerTitle).toHaveTextContent("変更後");
  })
})
