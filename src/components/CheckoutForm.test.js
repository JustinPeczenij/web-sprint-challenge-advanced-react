import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const formHeader = screen.getByText(/checkout form/i);
    expect(formHeader).toBeVisible();
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);
    const firstName = screen.getByLabelText(/first name:/i)
    const lastName = screen.getByLabelText(/last name:/i)
    const address = screen.getByLabelText(/address:/i)
    const city = screen.getByLabelText(/city:/i)
    const state = screen.getByLabelText(/state:/i)
    const zip = screen.getByLabelText(/zip:/i)
    userEvent.type(firstName, 'Justin');
    userEvent.type(lastName, 'Peczenij');
    userEvent.type(address, 'Lenape Trail');
    userEvent.type(city, 'Allentown');
    userEvent.type(state, 'PA');
    userEvent.type(zip, '18104');
    const button = screen.getByRole('button');
    userEvent.click(button);
    const successMessage = await screen.getByTestId('successMessage');
    expect(successMessage).toBeVisible();
    expect(successMessage).toHaveTextContent(/you have ordered some plants/i);
    console.log(expect.toHaveTextContent)
});
