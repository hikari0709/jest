import { render, screen } from '@testing-library/react'
import user from "@testing-library/user-event"
import InputTextForm from '../conponents/InputTextForm'

describe('test', () => {
  test('input form', () => {
    render(<InputTextForm />);

    const headerTitle = screen.getByText("デフォルト");
    const titleInput = screen.getByRole("textbox", { name: "" });
    const executeButton = screen.getByTestId("executeButton");

    user.type(titleInput, "変更後");
    user.click(executeButton);
    expect(headerTitle).toHaveTextContent("変更後");
  })
})
