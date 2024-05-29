import { render, screen , fireEvent } from "@testing-library/react";
import App from "../src/App";
//import { it, expect, describe } from "vitest";
//import '@testing-library/jest-dom/jest-globals'


describe('App', () => {
  test('should display the input value in the message output when the form is submitted', () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText('message');
    const submitButton = screen.getByRole('button', { name: 'parler' });
    const messageOutput = screen.getByRole('heading', { level: 3 });

     // Vérifier que messageOutput est bien vide
     expect(messageOutput).toHaveTextContent('');

    fireEvent.change(inputElement, { target: { value: "Comment allez-vous ?" } });

    fireEvent.click(submitButton);
    expect(messageOutput).toHaveTextContent("Bien sûr");
  });
});
