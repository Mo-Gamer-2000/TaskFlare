import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../app/(components)/UserForm";

describe("LoginForm Component", () => {
  it("should render login form", () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByRole("button", { name: "Login" });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    expect(screen.getByText("Logging in...")).toBeInTheDocument();
  });
});
