import { render, screen } from "@testing-library/react";
import App from "../src/App";
//import { it, expect, describe } from "vitest";
//import '@testing-library/jest-dom/jest-globals'

describe("UI test", () => {
  it("As a user I should see the page title Teenage Boy Speaking", () => {
    // 1. Render App
    render(<App />);

    // 2. Expect that the title is there
    expect(screen.getByRole("heading" , {level:1})).toBeInTheDocument();

    // 3. Expect that the title is : "Teenage Boy Speaking"
    expect(screen.getByRole("heading", {level:1})).toHaveTextContent(
      "Teenage Boy Speaking"
    );
  });
});
