import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import { NotFound } from "../NotFound";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("notFound component", () => {
  test("if component renders correctly", () => {
    render(<NotFound />);

    expect(screen.getByText(/Hoppsan!/i)).toBeInTheDocument();
  });

  test("if button click redirects to correct url", async () => {
    const { getByRole } = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    fireEvent.click(getByRole("button"));
    expect(mockHistoryPush).toHaveBeenCalledWith("/");
  });
});
