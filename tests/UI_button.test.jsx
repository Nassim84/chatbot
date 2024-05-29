import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import App from "../src/App";

describe('App', () => {
  it('As a user I should see a button to submit typed text to the teenager', () => {
    const { getByText } = render(<App />);
    const submitButton = getByText('parler');
    expect(submitButton).toBeInTheDocument();
  });

});
