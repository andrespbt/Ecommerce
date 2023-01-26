import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginWithEmailPassword } from '@/store/auth/thunks';
import { AuthLayout } from '../layout/AuthLayout';
import { Button, Spinner, ErrorMessage } from '../components';
import { useHandlerError } from '../hooks/useHandlerError';
import { LoginPassIcon, LoginGoogleIcon } from '../icons';
import { LoginEmailIcon } from '../icons';

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    watch,
    setFocus,
    formState: { errors, isValid, submitCount },
  } = useForm({
    defaultValues: { email: '', password: '' },
  });

  useHandlerError(setError, submitCount, setFocus);

  const { status } = useSelector(state => state.auth);

  useEffect(() => {
    if (errors.email?.type === 'custom' || errors.password?.type === 'custom') {
      clearErrors();
    }
  }, [watch('email'), watch('password')]);

  const dispatch = useDispatch();

  const onSubmit = (data, e) => {
    e.preventDefault();

    if (!isValid) return;

    dispatch(startLoginWithEmailPassword(data));
  };

  const onGoogleLogin = e => {
    e.preventDefault();
    dispatch(startGoogleLogin());
  };

  return (
    <AuthLayout>
      <div className="mt-10 w-10/12 animate-fade-in-down rounded-3xl bg-white shadow-3xl md:mt-16 lg:w-6/12 lg:min-w-[812px]">
        <form
          className="p-12 md:p-24"
          onSubmit={handleSubmit(onSubmit)}>
          {/* Email input */}
          <div className="mb-6 flex items-center text-lg md:mb-8">
            <LoginEmailIcon />
            <input
              className="w-full rounded-2xl bg-gray-200 py-2 pl-10 text-sm focus:outline-none focus:ring focus:ring-darkPaleOrange focus:placeholder:text-transparent md:py-4 md:pl-12 md:text-xl"
              placeholder="Email"
              type="email"
              autoComplete="email"
              name="email"
              aria-invalid={errors.email ? 'true' : 'false'}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter a valid email address',
                },
              })}
            />
          </div>
          {errors.email?.type !== 'custom' && (
            <small className=" relative bottom-7 left-2 text-red-600">{errors.email?.message}</small>
          )}

          {/* Password Input */}
          <div className="mb-6 flex items-center text-lg md:mb-8">
            <LoginPassIcon />
            <input
              className="w-full rounded-2xl bg-gray-200 py-2 pl-10 text-sm  focus:border focus:outline-none focus:ring focus:ring-darkPaleOrange focus:placeholder:text-transparent md:py-4 md:pl-12 md:text-xl "
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              name="password"
              aria-invalid={errors.password ? 'true' : 'false'}
              onKeyDown={e => (e.code === 'Space' ? e.preventDefault() : '')}
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Invalid password',
                },
              })}
            />
          </div>
          {errors.password?.type !== 'custom' && (
            <small className="relative bottom-7 left-2 text-red-600">{errors.password?.message}</small>
          )}

          {/* Buttons dissapear when status 2 = checkingAuth */}

          {status !== 2 ? (
            <>
              <Button
                text="Login"
                type="submit"></Button>

              <Button
                text="Login with Google"
                onClick={onGoogleLogin}>
                <LoginGoogleIcon />
              </Button>
            </>
          ) : (
            <Spinner />
          )}

          {errors.email?.type === 'custom' && <ErrorMessage message={errors.email?.message} />}

          {errors.password?.type === 'custom' && <ErrorMessage message={errors.password?.message} />}

          <Link
            className="mt-5 block text-center text-sm text-gray-400 underline hover:text-gray-300 md:text-lg"
            to="/auth/register">
            Create an account
          </Link>
        </form>
      </div>
    </AuthLayout>
  );
};
