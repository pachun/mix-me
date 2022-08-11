import { render } from "@testing-library/react-native"
import App from "App"

it("renders the App component", () => {
  const app = render(<App />)

  expect(app).toBeTruthy()
})
