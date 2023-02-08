import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthLayout } from '../layout/AuthLayout';
import { LoginEmailIcon, LoginUserIcon, LoginPassIcon } from '../icons';
import { Button, Spinner, ErrorMessage, SmallErrorMessage } from '../components';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, errorMessage } = useSelector(state => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors = '', submitCount },
    watch,
    setError,
    clearErrors,
    setFocus,
  } = useForm({
    defaultValues: { displayName: '', email: '', password: '' },
  });

  useEffect(() => {
    if (
      errors.email?.type === 'custom' ||
      errors.password?.type === 'custom' ||
      errors.displayName?.type === 'custom'
    ) {
      clearErrors();
    }
  }, [watch('email'), watch('password'), watch('displayName'), submitCount]);

  useEffect(() => {
    if (errorMessage) {
      handleError(errorMessage);
      return;
    }

    if (status === 4) {
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
        navigate('/auth/login');
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
      <div className="mb-32 w-10/12 min-w-[400px] max-w-[400px] animate-fade-in-down rounded-3xl bg-white shadow-3xl sm:mb-0 sm:min-w-[620px]">
        <form
          className="p-12 sm:p-24"
          onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 flex items-center text-lg sm:mb-8">
            <LoginUserIcon />
            <input
              className="w-full max-w-[620px] rounded-2xl bg-gray-200 py-2 pl-10 text-sm  focus:outline-none focus:ring  focus:ring-gray-300  focus:placeholder:text-transparent sm:py-4 sm:pl-12 sm:text-xl "
              type="text"
              placeholder="Full name"
              autoComplete="name"
              name="displayName"
              aria-invalid={errors.displayName ? 'true' : 'false'}
              {...register('displayName', {
                required: 'Full name is required',
                minLength: {
                  value: 3,
                  message: '3 characters minimum',
                },
              })}
            />
          </div>
          {errors.displayName?.type !== 'custom' && <SmallErrorMessage message={errors.displayName?.message} />}

          {/* Email input */}
          <div className="mb-6 flex items-center text-lg sm:mb-8">
            <LoginEmailIcon />
            <input
              className="w-full max-w-[620px] rounded-2xl bg-gray-200 py-2 pl-12 text-sm focus:outline-none focus:ring focus:ring-gray-300  focus:placeholder:text-transparent sm:py-4 sm:text-xl"
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
          {errors.email?.type !== 'custom' && <SmallErrorMessage message={errors.email?.message} />}

          {/* Password Input */}
          <div className="mb-6 flex items-center text-lg sm:mb-8">
            <LoginPassIcon />
            <input
              className="w-full max-w-[620px] rounded-2xl bg-gray-200 py-2 pl-12 text-sm focus:outline-none focus:ring focus:ring-gray-300 focus:placeholder:text-transparent sm:py-4 sm:text-xl "
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
          {errors.password?.type !== 'custom' && <SmallErrorMessage message={errors.password?.message} />}

          {status !== 2 ? (
            <Button
              text="Create an account"
              type="submit"></Button>
          ) : (
            <Spinner className="mb-5" />
          )}

          {errors.email?.type === 'custom' && <ErrorMessage message={errors.email.message} />}

          <Link
            className="mt-5 block text-center text-sm text-gray-400 underline hover:text-gray-300 sm:text-lg"
            to="/auth/login">
            Already have an account ? Login
          </Link>
        </form>
      </div>
    </AuthLayout>
  );
};
