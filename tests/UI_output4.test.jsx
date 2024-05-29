import { render, screen , fireEvent } from "@testing-library/react";
import App from "../src/App";
//import { it, expect, describe } from "vitest";
//import '@testing-library/jest-dom/jest-globals'

describe('App', () => {
  test('As a user I want to receive "Peu importe !" when I type anything else', () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText('message');
    const submitButton = screen.getByRole('button', { name: 'parler' });
    const messageOutput = screen.getByRole('heading', { level: 3 });

     // Vérifier que messageOutput est bien vide
     expect(messageOutput).toHaveTextContent('');

    fireEvent.change(inputElement, { target: { value: "bbfbGGGG !" } });

    fireEvent.click(submitButton);
    expect(messageOutput).toHaveTextContent("Peu importe !");
  });
});
