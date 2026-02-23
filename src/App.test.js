import { render, screen } from '@testing-library/react';
import App from './App';

test('renders student information system', () => {
  render(<App />);
  const heading = screen.getByText(/Student Information System/i);
  expect(heading).toBeInTheDocument();
});
```

Save (`Ctrl+X` → `Y` → `Enter`), then:
```
git add src/App.test.js
git commit -m "fix failing test to match app content"
git push
