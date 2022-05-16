import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import AccessibilityPanel from './AccessibilityPanel';

describe('Render', () => {
  test('Is visible', () => {
    render(<AccessibilityPanel themeMode="dark" onChange={() => {}} />);
    expect(screen.getByTestId('switch')).toBeDefined();
  });
  test('Is black when light mode', () => {
    render(<AccessibilityPanel themeMode="light" onChange={() => {}} />);
    expect(screen.getByTestId('switch')).toHaveAttribute('color', 'black');
  });
  test('Is white when dark mode', () => {
    render(<AccessibilityPanel themeMode="dark" onChange={() => {}} />);
    expect(screen.getByTestId('switch')).toHaveAttribute('color', 'white');
  });
});

describe('Behavior', () => {
  test('onChange is called when click it', () => {
    const spyOnChange = vi.fn();
    render(<AccessibilityPanel themeMode="dark" onChange={spyOnChange} />);
    fireEvent.click(screen.getByTestId('switch'));
    expect(spyOnChange).toHaveBeenCalledTimes(1);
  });
});
