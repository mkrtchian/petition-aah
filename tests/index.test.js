import { render } from "@testing-library/react";
import Home from "../pages/index";

it("displays main elements", () => {
  const { getByText, getByLabelText } = render(<Home />);
  const corner = getByLabelText(/Voir la source/);
  expect(corner).toBeInTheDocument();
  const signaturesCounter = getByText(/Nombre total de signatures/);
  expect(signaturesCounter).toBeInTheDocument();
  const dateCounter = getByText("jours");
  expect(dateCounter).toBeInTheDocument();
});