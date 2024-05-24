'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { Field, PasswordField } from './InputField';

import { useDispatch } from '@/store/hooks';
import { useRouter } from 'next/navigation';
import { useForm } from '@conform-to/react';
import { parseWithZod, getZodConstraint } from '@conform-to/zod';

import { registerSchema, UserLoginReq } from '@/store/types';
import { setUser } from '@/store/userSlice';
import { useRegisterMutation } from '@/api/auth.api';

export const RegisterForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [form, fields] = useForm({
    constraint: getZodConstraint(registerSchema),
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
    onValidate: ({ formData }) => parseWithZod(formData, { schema: registerSchema }),
    onSubmit(event, context) {
      event.preventDefault();
      const { formData } = context;
      const parsed = registerSchema.parse(formData);

      handleSubmit(parsed);
    },
  });

  const handleSubmit = (data: UserLoginReq) => {
    dispatch(setUser(data));

    console.log(data);
    // router.push('/dashboard');
  };

  return (
    <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm '>
      <form onSubmit={form.onSubmit} className='grid gap-3'>
        <Field
          labelProps={{ children: 'First name' }}
          inputProps={fields.name}
          errors={fields.name.errors}
        />
        <Field
          labelProps={{ children: 'Email' }}
          inputProps={fields.email}
          errors={fields.email.errors}
        />
        <PasswordField
          labelProps={{ children: 'Password' }}
          inputProps={fields.password}
          errors={fields.password.errors}
          className='relative '
        />

        <Button
          type='submit'
          className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
          Sign up
        </Button>
      </form>

      <p className='mt-10 text-center text-sm text-neutral-500'>
        Already have an account?{' '}
        <Link
          href='login'
          className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
          Log in
        </Link>
      </p>
    </div>
  );
};
