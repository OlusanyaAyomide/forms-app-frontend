import { useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import InputField from '@/components/global/form/InputField';
import { Button } from '@/components/ui/button';
import { signInSchema } from '@/validation/auth.validation';
import { toast } from 'sonner';
import CloseToast from '@/components/global/CloseToast';


type FormValues = yup.InferType<typeof signInSchema>;

export const Route = createFileRoute('/_pathlessLayout/log-in')({
  component: RouteComponent,
});

export default function RouteComponent() {

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(signInSchema),
    mode: 'onTouched',
  });


  const onSubmit = (_data: FormValues) => {
    toast.success("Sign In success", { action: <CloseToast /> })
    // TODO: submit registration
  };

  return (
    <div className="mt-6 max-w-[700px]">
      <form onSubmit={handleSubmit(onSubmit)} className='pb-5 mt-12 flex flex-col gap-4'>
        <h1 className="text-2xl sm:text-4xl mb-4 text-gray-700">Welcome Back!</h1>
        <InputField
          fieldName="email"
          labelText="Email"
          register={register}
          error={errors.email?.message}
          type="email"
        />
        <InputField
          fieldName="password"
          labelText="Password"
          register={register}
          error={errors.password?.message}
          type={showPassword ? 'text' : 'password'}
          showPasswordToggle
          onPasswordToggle={() => setShowPassword((p) => !p)}
        />
        <Button
          size={"lg"}
          className='w-full mt-6 h-14 flex items-center'
        >
          Log In
        </Button>
      </form>
      <p className="text-center mt-2">
        New to Assessely?
        {' '}
        <Link to="/sign-up" className="text-main">Sign up Here</Link>
      </p>
    </div>
  );
}
