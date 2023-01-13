import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";
import { CATEGORIES } from "../data";

test("calls the onSubmit callback prop when the form is submitted", () => {
  const onSubmit = jest.fn();
  render(
    <NewTaskForm categories={CATEGORIES} onSubmit={onSubmit} />
  );

  fireEvent.change(screen.queryByLabelText(/Details/), {
    target: { value: "Pass the tests" },
  });

  fireEvent.change(screen.queryByLabelText(/Category/), {
    target: { value: "Code" },
  });

  fireEvent.submit(screen.queryByText(/Add task/));

  expect(onSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      text: "Pass the tests",
      category: "Code",
    })
  );
});
