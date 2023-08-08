import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

describe('App test', () => {
  it('Should render `Hello World in App component', () => {
    render(<App />)
    screen.getByText('Hello World!')
  })
})
