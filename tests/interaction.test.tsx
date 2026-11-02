import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import PortfolioExperience from '../src/components/PortfolioExperience';
import { cleanup } from '@testing-library/react';
beforeEach(() => { Object.defineProperty(window, 'CSS', { value: { supports: () => true }, configurable: true }); history.replaceState(null, '', '/'); });
afterEach(() => { cleanup(); vi.restoreAllMocks(); });
describe('prototype selection', () => {
  it('opens the selected sheet and closes it with Escape', async () => {
    render(<PortfolioExperience />);
    fireEvent.click(screen.getAllByRole('button', { name: /About/ })[0]);
    expect(screen.getByRole('heading', { name: /About/ })).toBeInTheDocument();
    expect(location.hash).toBe('#about');
    fireEvent(screen.getByRole('dialog'), new Event('cancel', { bubbles: true, cancelable: true }));
    await new Promise(resolve => setTimeout(resolve, 250));
    expect(screen.queryByRole('heading', { name: /About/ })).not.toBeInTheDocument();
  });
  it('switches sections without stacking sheets', () => {
    render(<PortfolioExperience />);
    fireEvent.click(screen.getAllByRole('button', { name: /About/ })[0]);
    fireEvent.click(screen.getAllByRole('button', { name: /Projects/ })[0]);
    expect(screen.queryByRole('heading', { name: /About/ })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument();
  });
});
