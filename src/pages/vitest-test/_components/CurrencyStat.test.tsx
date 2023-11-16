import { render } from "@testing-library/react";
import CurrencyStat from "./CurrencyStat.tsx";

it("displays the gives value formatted as currency", () => {
  const { getByText } = render(<CurrencyStat value={123} />);

  expect(getByText("$123")).toBeInTheDocument();
});
