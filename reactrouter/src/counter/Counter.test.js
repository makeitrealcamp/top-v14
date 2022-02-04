/**
 * primer render value 0
 * 
 * 
 */
import { Counter } from './Counter';
import { fireEvent, render, screen } from '@testing-library/react'


describe('Counter component', () => {

  describe('initial render', () => {

    it('should have an initial value as 0 if initial value prop does not exist', () => {
      const view = render(<Counter />)
      // console.log(view.debug());
      screen.getByText(0)
    });

    it('should have an initial value with the prop value', () => {
      render(<Counter initialValue={5} />)
      screen.getByText(5)
    });

    it('should render an increase button', () => {
      render(<Counter />)
      screen.getByText('increase')
    })

    it('should render a decrease button', () => {
      render(<Counter />)
      screen.getByText('decrease')
    })


  });

  describe('Counter iteraccion', () => {
    it('should increase the value', () => {
      render(<Counter />)
      const button = screen.getByText('increase')
      fireEvent.click(button)
      screen.getByText(1)
    })

    it('should decrease the value', async () => {
      render(<Counter initialValue={5} />)
      const button = screen.getByText('decrease')
      fireEvent.click(button)
      screen.getByText(4)

    })
  })


})

