import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../app/(components)/UserForm"; 

describe("LoginForm Component", () => {
  it("should render login form", () => {
    render(<LoginForm />); // Render the LoginForm component

    // Find form elements by their accessible labels and roles
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByRole("button", { name: "Login" });

    // Simulate user interaction: filling in form fields and clicking the submit button
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    // Assert that the "Logging in..." message is present in the document
    expect(screen.getByText("Logging in...")).toBeInTheDocument();
  });
});
