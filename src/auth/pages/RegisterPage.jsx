import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { LoginEmailIcon, LoginUserIcon, LoginWarningIcon, LoginPassIcon } from '../icons';
import { Button, Spinner } from '../components';
import { startCreatingUserWithEmailPassword } from '@/store/auth/thunks';
import Swal from 'sweetalert2';
import { logout } from '@/store/auth/authSlice';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, errorMessage = null } = useSelector(state => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors = '', submitCount },
    setError,
    clearErrors,
    setFocus,
  } = useForm({
    defaultValues: { displayName: '', email: '', password: '' },
  });

  useEffect(() => {
    if (errorMessage) {
      handleError(errorMessage);
      console.log(errors);
      return;
    }

    if (status === 4) {
      dispatch(logout());
      let timerInterval;
      Swal.fire({
        title: 'Account created successfully',
        icon: 'success',
        html: 'You will be redirected to login page in <b></b> seconds.',
        timer: 5000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector('b');
          timerInterval = setInterval(() => {
            b.textContent = Math.round(Swal.getTimerLeft() / 1000);
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
      setTimeout(() => {
        navigate('/auth/');
      }, 5000);
    }
  }, [submitCount]);

  const handleError = error => {
    if (error?.includes('email-already-in-use')) {
      setError('email', { type: 'custom', message: 'Email already in use' });
      setFocus('email');
    }
  };

  const onSubmit = async data => {
    await dispatch(startCreatingUserWithEmailPassword(data));
  };

  return (
    <AuthLayout>
      <div className="w-10/12 animate-fade-in-down rounded-3xl bg-white shadow-3xl lg:w-6/12 lg:min-w-[812px]">
        <form
          className="p-12 md:p-24"
          onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 flex items-center text-lg md:mb-8">
            <LoginUserIcon />
            <input
              className="w-full rounded-2xl bg-gray-200 py-2 pl-12 focus:border focus:outline-none focus:ring focus:ring-darkPaleOrange focus:placeholder:text-transparent md:py-4 "
              type="text"
              placeholder="Full name"
              autoComplete="name"
              name="name"
              aria-invalid={errors.name ? 'true' : 'false'}
              {...register('name', {
                required: 'Full name is required',
                minLength: {
                  value: 3,
                  message: '3 characters minimum',
                },
              })}
            />
          </div>
          {errors.name && (
            <small
              className="relative bottom-7 left-2 text-red-600"
              role="alert">
              {errors.name.message}
            </small>
          )}

          {/* Email input */}
          <div className="mb-6 flex items-center text-lg md:mb-8">
            <LoginEmailIcon />
            <input
              className="w-full rounded-2xl bg-gray-200 py-2 pl-12 focus:outline-none focus:ring focus:ring-darkPaleOrange focus:placeholder:text-transparent md:py-4"
              placeholder="Email"
              type="email"
              autoComplete="email"
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
            <small
              className=" relative bottom-7 left-2 text-red-600"
              role="alert">
              {errors.email?.message}
            </small>
          )}

          {/* Password Input */}
          <div className="mb-6 flex items-center text-lg md:mb-8">
            <LoginPassIcon />
            <input
              className="w-full rounded-2xl bg-gray-200 py-2 pl-12 focus:border focus:outline-none focus:ring focus:ring-darkPaleOrange focus:placeholder:text-transparent md:py-4 "
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              aria-invalid={errors.password ? 'true' : 'false'}
              onKeyDown={e => (e.code === 'Space' ? e.preventDefault() : '')}
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: '6 characters minimum',
                },
              })}
            />
          </div>
          {errors.password && (
            <small
              className="relative bottom-7 left-2 text-red-600"
              role="alert">
              {errors.password.message}
            </small>
          )}

          {status !== 2 ? (
            <Button
              text="Create an account"
              type="submit"></Button>
          ) : (
            <Spinner className="mb-5" />
          )}

          {errors.email?.type === 'custom' && (
            <div className="mx-auto mt-4 flex h-12 w-80 items-center justify-center rounded-xl border-2 border-solid border-red-600 bg-red-200 text-center text-red-600">
              <LoginWarningIcon className="text-lg" />
              <p
                className="font-bold"
                role="alert">
                {errors.email?.message}
              </p>
            </div>
          )}

          <Link
            className="mt-5 block text-center text-gray-400 underline hover:text-gray-300"
            to="/auth/login">
            Already have an account ? Login
          </Link>
        </form>
      </div>
    </AuthLayout>
  );
};
