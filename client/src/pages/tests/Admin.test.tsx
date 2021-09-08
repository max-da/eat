import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";

import { Admin } from "../Admin";
import { IReservation } from "../Admin";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

const mockedReservations: IReservation[] = [
  {
    _id: "1",
    date: new Date(),
    time: 18,
    name: "Berit",
    email: "berit@mail.se",
    seats: 6,
  },
  {
    _id: "2",
    date: new Date(),
    time: 21,
    name: "Bernard",
    email: "bernard@mail.se",
    seats: 3,
  },
  {
    _id: "3",
    date: new Date(),
    time: 21,
    name: "Bert",
    email: "bert@mail.se",
    seats: 2,
  },
];

describe("Admin component", () => {
  test("if component renders correctly", () => {
    mockAxios.get.mockResolvedValue({ data: mockedReservations });

    render(<Admin />);

    expect(screen.getByText(/Bokningar/i)).toBeInTheDocument();
  });

  test("if component gets data with axios", async () => {
    mockAxios.get.mockResolvedValue({ data: mockedReservations });

    render(<Admin />);

    await waitFor(() => {
      const reservations = screen.getAllByTestId("reservation-div");

      expect(reservations.length).toBe(mockedReservations.length);
    });
  });
});
