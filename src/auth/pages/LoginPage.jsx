import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from 'react-hook-form';
import { LoginPassIcon, LoginGoogleIcon } from '../icons';
import { Link } from 'react-router-dom';
import { LoginEmailIcon } from '../icons/index';
import { Button, Spinner } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleLogin } from '@/store/auth/thunks';

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: '', password: '' },
  });

  const { status, errorMessage } = useSelector(state => state.auth);

  const onSubmit = data => {};

  const dispatch = useDispatch();

  const onGoogleLogin = e => {
    e.preventDefault();
    dispatch(startGoogleLogin());
  };

  const onPasswordEmailLogin = () => {
    console.log('email password login');
  };

  return (
    <AuthLayout>
      <div className="w-10/12 animate-fade-in-down rounded-3xl bg-white shadow-3xl lg:w-6/12 lg:min-w-[812px]">
        <form
          className="p-12 md:p-24"
          onSubmit={handleSubmit(onSubmit)}>
          {/* Email input */}
          <div className="mb-6 flex items-center text-lg md:mb-8">
            <LoginEmailIcon />
            <input
              className="w-full rounded-2xl bg-gray-200 py-2 pl-12 focus:outline-none focus:ring focus:ring-darkPaleOrange focus:placeholder:text-transparent md:py-4"
              placeholder="Email"
              type="email"
              autoComplete="email"
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
          {errors.email && <small className=" relative bottom-7 left-2 text-red-600">{errors.email.message}</small>}

          {/* Password Input */}
          <div className="mb-6 flex items-center text-lg md:mb-8">
            <LoginPassIcon />
            <input
              className="w-full rounded-2xl bg-gray-200 py-2 pl-12 focus:border focus:outline-none focus:ring focus:ring-darkPaleOrange focus:placeholder:text-transparent md:py-4 "
              type="password"
              placeholder="Password"
              autoComplete="current-password"
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
          {errors.password && (
            <small className="relative bottom-7 left-2 text-red-600">{errors.password.message}</small>
          )}

          {/* Buttons dissapear when status 2 = checkingAuth */}

          {status !== 2 ? (
            <>
              <Button
                text="Login"
                type="submit"
                onClick={onPasswordEmailLogin}></Button>

              <Button
                text="Login with Google"
                onClick={onGoogleLogin}>
                <LoginGoogleIcon className="mr-4" />
              </Button>

              <Link
                className="mt-5 block text-center text-gray-400 underline hover:text-gray-300"
                to="/auth/register">
                Create an account
              </Link>
            </>
          ) : (
            <Spinner />
          )}
        </form>
      </div>
    </AuthLayout>
  );
};
