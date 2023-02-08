import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { Button, Spinner, ErrorMessage, SmallErrorMessage } from '../components';
import { useHandlerError } from '../hooks/useHandlerError';
import { LoginPassIcon, LoginGoogleIcon, LoginEmailIcon } from '../icons';
import { startAnonymusLogin, startGoogleLogin, startLoginWithEmailPassword } from '../../store/auth';

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
  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useHandlerError(setError, submitCount, setFocus);

  useEffect(() => {
    if (errors.email?.type === 'custom' || errors.password?.type === 'custom') {
      clearErrors();
    }
  }, [watch('email'), watch('password')]);

  const onSubmit = (data, e) => {
    e.preventDefault();

    if (!isValid) return;

    dispatch(startLoginWithEmailPassword(data));
  };

  const onGoogleLogin = e => {
    e.preventDefault();
    dispatch(startGoogleLogin());
  };

  const onAnonymousLogin = async e => {
    e.preventDefault();
    if (status === 5) {
      navigate('/');
      window.location.reload();
    } else {
      await dispatch(startAnonymusLogin());
      navigate('/');
      window.location.reload();
    }
  };

  return (
    <AuthLayout>
      <div className="w-10/12 min-w-[400px] animate-fade-in-down rounded-3xl bg-white shadow-3xl sm:h-full">
        <form
          className="p-12"
          onSubmit={handleSubmit(onSubmit)}>
          {/* Email input */}
          <div className="mb-6 flex items-center text-lg sm:mb-8">
            <LoginEmailIcon />
            <input
              className="w-full max-w-[620px] rounded-2xl bg-gray-200 py-2 pl-10 text-sm focus:outline-none focus:ring focus:ring-gray-300 focus:placeholder:text-transparent sm:py-4 sm:pl-12 sm:text-xl"
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
          {errors.email?.type !== 'custom' && <SmallErrorMessage message={errors.email?.message} />}

          {/* Password Input */}
          <div className="mb-6 flex items-center text-lg sm:mb-8">
            <LoginPassIcon />
            <input
              className="w-full max-w-[620px] rounded-2xl bg-gray-200 py-2 pl-10 text-sm  focus:border focus:outline-none focus:ring focus:ring-gray-300 focus:placeholder:text-transparent sm:py-4 sm:pl-12 sm:text-xl "
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
          {errors.password?.type !== 'custom' && <SmallErrorMessage message={errors.password?.message} />}

          {/* Buttons dissapear when status 2 = checkingAuth */}

          {status !== 2 ? (
            <>
              <Button
                text="Login"
                type="submit"></Button>

              <Button
                text="Google Login"
                onClick={onGoogleLogin}
                icon={<LoginGoogleIcon className="absolute left-10 sm:scale-150" />}></Button>

              <Button
                text="Anonymous Login "
                onClick={onAnonymousLogin}></Button>
            </>
          ) : (
            <Spinner />
          )}

          {errors.email?.type === 'custom' && <ErrorMessage message={errors.email?.message} />}

          {errors.password?.type === 'custom' && <ErrorMessage message={errors.password?.message} />}

          <Link
            className="mt-5 block text-center text-sm text-gray-400 underline hover:text-gray-300 sm:text-lg"
            to="/auth/register">
            Create an account
          </Link>
        </form>
      </div>
    </AuthLayout>
  );
};
