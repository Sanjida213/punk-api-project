import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Card from "./Card";

it("should render the information from the card", () => {

  render(<Card
  image = ""
  name = ""
  description = ""
  info = {[]} />)
})

it("should not render the findMoreInfo button on load", () => {
  render(<Card
    image = ""
    name = ""
    description = ""
    info = {[]} />)

    const button = screen.queryByText(/Find out more/i)
    expect(button).not.toBeInTheDocument()
})