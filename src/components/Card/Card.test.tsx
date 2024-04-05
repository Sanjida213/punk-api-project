import {render, screen} from "@testing-library/react"
import Card from "./Card";

it("should render the information from the card", () => {

  render(<Card
  image = ""
  name = ""
  description = ""
  foodParing = {[]} 
  brewersTips=""
  />)

  const cardName = screen.getByText("card")
  expect(cardName).toBeInTheDocument();
})

it("should not render the findMoreInfo button on load", () => {
  render(<Card
    image = ""
    name = ""
    description = ""
    foodParing = {[]} 
    brewersTips= ""
    />)

    const button = screen.queryByText(/Find out more/i)
    expect(button).not.toBeInTheDocument()
})