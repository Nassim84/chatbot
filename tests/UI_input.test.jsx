import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import App from "../src/App";

describe('App', () => {
  it('updates text input value when user types', () => {
    const { getByPlaceholderText } = render(
      <>
        <h1 className="text-center">Teenage Boy Speaking</h1>
        <App />
      </>
    );
    const textInput = getByPlaceholderText('message');

    fireEvent.change(textInput, { target: { value: 'Hello world!' } });
    expect(textInput.value).toBe('Hello world!');
  });

});
