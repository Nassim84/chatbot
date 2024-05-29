import { render, screen , fireEvent } from "@testing-library/react";
import App from "../src/App";
//import { it, expect, describe } from "vitest";
//import '@testing-library/jest-dom/jest-globals'

describe('App', () => {
  test('7-as-a-user-i-want-to-receive-calmez-vous-je-sais-ce-que-je-fais-when-i-type-an-uppercase-question', () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText('message');
    const submitButton = screen.getByRole('button', { name: 'parler' });
    const messageOutput = screen.getByRole('heading', { level: 3 });

     // Vérifier que messageOutput est bien vide
     expect(messageOutput).toHaveTextContent('');

    fireEvent.change(inputElement, { target: { value: "EEEEE ?" } });

    fireEvent.click(submitButton);
    expect(messageOutput).toHaveTextContent("Calmez-vous, je sais ce que je fais !");
  });
});
