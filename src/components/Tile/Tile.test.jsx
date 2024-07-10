import { render, screen } from "@testing-library/react"
import Tile from './Tile';

describe('Tile component tests', ()=> {

  it('should render tile component', async ()=> {
    render(<Tile/>)

    const tileTestId = await screen.findByTestId("TILE_COMPONENT_DEFAULT_TESTID");
    expect(tileTestId).toBeDefined();
  })
})