import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Navbar } from "../Navbar";

test("if Navbar component renders correctly", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  expect(screen.getByText(/Kontakt/i)).toBeInTheDocument();
});
