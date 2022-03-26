import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';

import { server, rest } from '../../../__testsServerConf__/testServer';

import { LoginForm } from './LoginForm';

describe('login form test', () => {
  describe('UI validation', () => {
    afterEach(function () {
      cleanup();
    });

    it('should render correct components', async () => {
      render(<LoginForm />);

      const button = screen.getByText(/login/i);
      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/password/i);

      expect(button).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });

    it('should render error message when submit is clicked and there is no email or password', async () => {
      render(<LoginForm />);

      const button = screen.getByText(/login/i);
      fireEvent.click(button);

      await waitFor(() => {
        expect(screen.getByText(/email is required/i));
        expect(screen.getByText(/password is required/i));
      });
    });
    it('should render error message when submit is clicked and  email is correct but there is not password', async () => {
      render(<LoginForm />);

      const emailInput = screen.getByLabelText(/email/i);
      fireEvent.change(emailInput, { target: { value: 'user@email.com' } });

      const passwordInput = screen.getByLabelText(/password/i);
      fireEvent.change(passwordInput, { target: { value: '123' } });
      const button = screen.getByText(/login/i);

      fireEvent.click(button);

      await waitFor(() => {
        expect(
          screen.getByText(/password must be at least 5 characters long/i)
        );
      });
    });
    it('should no render error message when submit is clicked and  email and password are correct', async () => {
      render(<LoginForm />);

      const emailInput = screen.getByLabelText(/email/i);
      fireEvent.change(emailInput, { target: { value: 'user@email.com' } });
      const passwordInput = screen.getByLabelText(/password/i);
      const button = screen.getByText(/login/i);
      fireEvent.change(passwordInput, { target: { value: '12345' } });

      fireEvent.click(button);

      await waitFor(() => {
        expect(
          screen.queryByText(/password must be at least 5 characters long/i)
        ).not.toBeInTheDocument();
      });
    });
  });

  describe('http request', () => {
    it('should show an error message when the credentials are incorrect', async () => {
      server.use(
        rest.post('http://localhost:4000/login', (_req, res, ctx) => {
          return res(
            ctx.status(401),
            ctx.json({
              error: { message: 'user or password are incorrect' },
            })
          );
        })
      );
      render(<LoginForm />);
      const emailInput = screen.getByLabelText(/email/i);
      fireEvent.change(emailInput, { target: { value: 'user@email.com' } });
      const passwordInput = screen.getByLabelText(/password/i);
      fireEvent.change(passwordInput, { target: { value: '12345' } });
      const button = screen.getByText(/login/i);
      fireEvent.click(button);

      await waitFor(() =>
        expect(screen.getByText('user or password are incorrect'))
      );
    });
  });
});
