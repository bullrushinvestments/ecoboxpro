import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'loading' });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/loading.../i));
  });

  test('displays error message when fetching data fails', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      status: 'error',
      errorMessage: 'Failed to fetch data',
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/failed to fetch data/i));
  });

  test('handles user interaction with button click', () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      status: 'success',
      data: { id: 1, name: 'Product' },
    });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/add to cart/i));
    expect(screen.getByText(/added to cart/i)).toBeInTheDocument();
  });

  test('validates input fields for empty values', () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      status: 'success',
      data: { id: 1, name: 'Product' },
    });
    render(<CoreFunctionalityComponent />);
    fireEvent.change(screen.getByLabelText(/quantity/i), { target: { value: '' } });
    fireEvent.click(screen.getByText(/submit/i));
    expect(screen.getByText(/please enter a valid quantity/i)).toBeInTheDocument();
  });

  test('ensures accessibility features are implemented', () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      status: 'success',
      data: { id: 1, name: 'Product' },
    });
    render(<CoreFunctionalityComponent />);
    const input = screen.getByLabelText(/quantity/i);
    expect(input).toHaveAttribute('aria-label', /quantity/i);
    expect(input).toBeValid();
  });

  test('handles edge cases for data manipulation', () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      status: 'success',
      data: { id: 1, name: 'Product' },
    });
    render(<CoreFunctionalityComponent />);
    fireEvent.change(screen.getByLabelText(/quantity/i), { target: { value: '-1' } });
    expect(screen.getByText(/invalid quantity/i)).toBeInTheDocument();
  });

  test('renders fallback content when data is not available', () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      status: 'success',
      data: null,
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'loading' });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/loading.../i));
  });

  test('displays error message when fetching data fails', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      status: 'error',
      errorMessage: 'Failed to fetch data',
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/failed to fetch data/i));
  });

  test('handles user interaction with button click', () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      status: 'success',
      data: { id: 1, name: 'Product' },
    });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/add to cart/i));
    expect(screen.getByText(/added to cart/i)).toBeInTheDocument();
  });

  test('validates input fields for empty values', () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      status: 'success',
      data: { id: 1, name: 'Product' },
    });
    render(<CoreFunctionalityComponent />);
    fireEvent.change(screen.getByLabelText(/quantity/i), { target: { value: '' } });
    fireEvent.click(screen.getByText(/submit/i));
    expect(screen.getByText(/please enter a valid quantity/i)).toBeInTheDocument();
  });

  test('ensures accessibility features are implemented', () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      status: 'success',
      data: { id: 1, name: 'Product' },
    });
    render(<CoreFunctionalityComponent />);
    const input = screen.getByLabelText(/quantity/i);
    expect(input).toHaveAttribute('aria-label', /quantity/i);
    expect(input).toBeValid();
  });

  test('handles edge cases for data manipulation', () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      status: 'success',
      data: { id: 1, name: 'Product' },
    });
    render(<CoreFunctionalityComponent />);
    fireEvent.change(screen.getByLabelText(/quantity/i), { target: { value: '-1' } });
    expect(screen.getByText(/invalid quantity/i)).toBeInTheDocument();
  });

  test('renders fallback content when data is not available', () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      status: 'success',
      data: null,
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });
});