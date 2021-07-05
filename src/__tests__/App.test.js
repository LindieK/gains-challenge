import React from 'react';
import { render, screen, cleanup, within, fireEvent } from '@testing-library/react';
import App from '../App';
import Button from '../components/Button'
import Popup from '../components/Popup'

afterEach(cleanup)


describe('app page on load', () => {
  test('renders the button', () => {
    render(<App />);
    const buttonElement = screen.getByText('Unfollow', {selector: 'button'});
    expect(buttonElement).toBeInTheDocument();
  });
  
  test('hides modal on initial render', () => {
    const app = render(<App />);
    const modal = app.container.querySelector(".modal-overlay");
    expect(modal).not.toBeInTheDocument();
  });
});

describe('button actions', () => {
  test('modal shows children', async () => {
    render(<Popup />);
    const buttonElement = screen.getByText('Unfollow', {selector: 'button'});
    const { getByTestId } = within(document.getElementById('modal-root'));
    await fireEvent.click(buttonElement);
    expect(getByTestId('modal')).not.toBeInTheDocument();
  })
})



/*test('shows modal on button click', async () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Unfollow/i));

  await waitFor(() => {
    const modal = screen.getAllByTestId("modal");
    expect(modal).toBeInTheDocument();
  });
  
});*/