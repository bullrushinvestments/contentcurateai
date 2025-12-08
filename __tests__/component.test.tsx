import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    content: 'Sample Content',
    error: null,
    loading: false,
  }),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays content when data is fetched successfully', async () => {
    const { rerender } = render(<CoreFunctionalityComponent />);

    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
    expect(screen.getByText(/sample content/i)).toBeInTheDocument();
  });

  test('handles error state when fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    render(<CoreFunctionalityComponent />);

    await waitFor(() => screen.getByText(/failed to fetch/i));
  });

  test('displays loading state while fetching data', async () => {
    const { rerender } = render(<CoreFunctionalityComponent />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    (fetchData as jest.Mock).mockResolvedValueOnce({
      content: 'Sample Content',
      error: null,
      loading: false,
    });

    await waitFor(() => screen.queryByText(/loading/i));
  });

  test('allows user to interact with the component', () => {
    render(<CoreFunctionalityComponent />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(button).toHaveBeenClicked();
  });

  test('ensures accessibility features are implemented correctly', async () => {
    render(<CoreFunctionalityComponent />);

    const contentElement = await waitFor(() => screen.getByText(/sample content/i));
    expect(contentElement).toBeVisible();
    expect(contentElement).toHaveAttribute('aria-live', 'polite');
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    content: 'Sample Content',
    error: null,
    loading: false,
  }),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays content when data is fetched successfully', async () => {
    const { rerender } = render(<CoreFunctionalityComponent />);

    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
    expect(screen.getByText(/sample content/i)).toBeInTheDocument();
  });

  test('handles error state when fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    render(<CoreFunctionalityComponent />);

    await waitFor(() => screen.getByText(/failed to fetch/i));
  });

  test('displays loading state while fetching data', async () => {
    const { rerender } = render(<CoreFunctionalityComponent />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    (fetchData as jest.Mock).mockResolvedValueOnce({
      content: 'Sample Content',
      error: null,
      loading: false,
    });

    await waitFor(() => screen.queryByText(/loading/i));
  });

  test('allows user to interact with the component', () => {
    render(<CoreFunctionalityComponent />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(button).toHaveBeenClicked();
  });

  test('ensures accessibility features are implemented correctly', async () => {
    render(<CoreFunctionalityComponent />);

    const contentElement = await waitFor(() => screen.getByText(/sample content/i));
    expect(contentElement).toBeVisible();
    expect(contentElement).toHaveAttribute('aria-live', 'polite');
  });
});