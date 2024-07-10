import { render, screen } from "@testing-library/react"
import Column from "./Column"

describe('Column component', function () {
  it('should render column component successfully', async function () {
    render(<Column />)
    const columnTestId = await screen.findByTestId("COLUMN_DEFAULT_DATA_TESTID")
    expect(columnTestId).toBeDefined();
  })
})