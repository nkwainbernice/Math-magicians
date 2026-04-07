import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../component/Calculator';

describe('Calculator Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders default display value 0', () => {
    render(<Calculator />);
    expect(screen.getByText('0', { selector: '.display' })).toBeInTheDocument();
  });

  test('updates display when number button is clicked', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole('button', { name: '7' }));

    expect(screen.getByText('7', { selector: '.display' })).toBeInTheDocument();
  });

  test('performs addition correctly', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole('button', { name: '2' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '3' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));

    expect(screen.getByText('5', { selector: '.display' })).toBeInTheDocument();
  });

  test('clears last digit using AC button', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole('button', { name: '9' }));
    fireEvent.click(screen.getByRole('button', { name: 'AC' }));

    expect(screen.getByText('0', { selector: '.display' })).toBeInTheDocument();
  });

  test('toggles sign correctly', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole('button', { name: '8' }));
    fireEvent.click(screen.getByRole('button', { name: '+/-' }));

    expect(screen.getByText('-8', { selector: '.display' })).toBeInTheDocument();
  });

  test('calculates percentage correctly', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole('button', { name: '5' }));
    fireEvent.click(screen.getByRole('button', { name: '0' }));
    fireEvent.click(screen.getByRole('button', { name: '%' }));

    expect(screen.getByText('0.5', { selector: '.display' })).toBeInTheDocument();
  });

  test('renders calculator display on the screen', () => {
  render(<Calculator />);

  const displayElement = screen.getByText('0', {
    selector: '.display'
  });

  expect(displayElement).toBeInTheDocument();
});

test('handles decimal numbers correctly', () => {
  render(<Calculator />);

  fireEvent.click(screen.getByRole('button', { name: '1' }));
  fireEvent.click(screen.getByRole('button', { name: '.' }));
  fireEvent.click(screen.getByRole('button', { name: '5' }));

  expect(screen.getByText('1.5', { selector: '.display' })).toBeInTheDocument();
});


test('performs multiplication correctly', () => {
  render(<Calculator />);

  fireEvent.click(screen.getByRole('button', { name: '4' }));
  fireEvent.click(screen.getByRole('button', { name: '×' }));
  fireEvent.click(screen.getByRole('button', { name: '5' }));
  fireEvent.click(screen.getByRole('button', { name: '=' }));

  expect(screen.getByText('20', { selector: '.display' })).toBeInTheDocument();
});


test('performs subtraction correctly', () => {
  render(<Calculator />);

  fireEvent.click(screen.getByRole('button', { name: '9' }));
  fireEvent.click(screen.getByRole('button', { name: '-' }));
  fireEvent.click(screen.getByRole('button', { name: '3' }));
  fireEvent.click(screen.getByRole('button', { name: '=' }));

  expect(screen.getByText('6', { selector: '.display' })).toBeInTheDocument();
});


test('performs division correctly', () => {
  render(<Calculator />);

  fireEvent.click(screen.getByRole('button', { name: '8' }));
  fireEvent.click(screen.getByRole('button', { name: '/' }));
  fireEvent.click(screen.getByRole('button', { name: '2' }));
  fireEvent.click(screen.getByRole('button', { name: '=' }));

  expect(screen.getByText('4', { selector: '.display' })).toBeInTheDocument();
});


test('stores value in localStorage', () => {
  render(<Calculator />);

  fireEvent.click(screen.getByRole('button', { name: '6' }));

  expect(localStorage.getItem('display')).toBe('6');
});


test('returns Error for invalid expression', () => {
  render(<Calculator />);

  fireEvent.click(screen.getByRole('button', { name: '+' }));
  fireEvent.click(screen.getByRole('button', { name: '=' }));

  expect(screen.getByText('Error')).toBeInTheDocument();
});

});
