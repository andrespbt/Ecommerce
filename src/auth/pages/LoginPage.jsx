import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from 'react-hook-form';
import { LoginPassIcon, LoginGithubIcon, LoginGoogleIcon } from '../icons';
import { Link } from 'react-router-dom';
import { LoginEmailIcon } from '../icons/index';

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { email: '', password: '' },
  });

  console.log(errors);
  const onSubmit = data => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <AuthLayout>
      <div className="shadow-3xl w-10/12 rounded-3xl bg-white  lg:w-6/12 lg:min-w-[812px]">
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

          {/* Buttons */}
          <button
            className="w-full rounded-2xl bg-gradient-to-b from-gray-700 to-gray-900 p-2 font-medium uppercase text-white hover:cursor-pointer hover:text-orange md:p-4"
            type="submit">
            Login
          </button>
          <button
            className="mt-3 flex w-full items-center justify-center rounded-2xl bg-gradient-to-b from-gray-700 to-gray-900 p-2 font-medium uppercase text-white hover:cursor-pointer hover:text-orange  md:p-4 "
            type="submit">
            <LoginGoogleIcon className="mr-4 w-fit" />
            Login with Google
          </button>

          <button
            className="mt-3 flex w-full items-center justify-center rounded-2xl bg-gradient-to-b from-gray-700 to-gray-900 p-2 font-medium uppercase text-white hover:cursor-pointer hover:text-orange md:p-4"
            type="submit">
            <LoginGithubIcon className=" mr-4" />
            Login with Github
          </button>

          <Link
            className="mt-5 block text-center text-gray-400 underline hover:text-gray-300"
            to="/auth/register">
            Create an account
          </Link>
        </form>
      </div>
    </AuthLayout>
  );
};
