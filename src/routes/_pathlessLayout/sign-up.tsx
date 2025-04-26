import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import InputField from '@/components/global/form/InputField';
import SelectField from '@/components/global/form/SelectField';
import { Button } from '@/components/ui/button';
import { signUpSchema } from '@/validation/auth.validation';
import { ArrowLeft } from 'lucide-react';


type FormValues = yup.InferType<typeof signUpSchema>;

export const Route = createFileRoute('/_pathlessLayout/sign-up')({
  component: RouteComponent,
});

export default function RouteComponent() {
  const [step, setStep] = useState<1 | 2>(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue,
    watch,
  } = useForm<FormValues>({
    resolver: yupResolver(signUpSchema),
    mode: 'onTouched',
    defaultValues: {
      intendedUser: ""
    }
  });

  const intendedUserValue = watch('intendedUser');

  const intentionOptions = [
    { label: 'Business Owner', value: 'Business Owner' },
    { label: 'Team Member', value: 'Team Member' },
    { label: 'Developer', value: 'Developer' },
    { label: 'Admin', value: 'Admin' },
  ];

  const onNext = async () => {
    const valid = await trigger(['email', 'password', 'password_confirmation', 'companyName']);
    if (valid) setStep(2);
  };

  const onBack = () => setStep(1);

  const onSubmit = (data: FormValues) => {
    if (step === 1) {
      onNext()
      return
    }
    // TODO: submit registration
    console.log('Submitting', data);
  };

  return (
    <div className="mt-6 max-w-[700px]">
      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded mb-6">
        <div
          className={`h-2 rounded bg-main transition-width duration-300 ${step === 1 ? 'w-1/2' : 'w-full'
            }`}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='pb-5 flex flex-col gap-4'>
        <h1 className="text-2xl sm:text-4xl mb-4 text-gray-700">Sign Up</h1>
        {
          step === 2 && (
            <div className="w-full justify-start group">
              <Button type='button' onClick={onBack} variant={"ghost"} className='bg-transparent text-gray-700 px-2 cursor-pointer'>
                <ArrowLeft className='text-lg group-hover:-translate-x-1 shrink-0 transition-all duration-300' />
                Back
              </Button>
            </div>
          )
        }
        {step === 1 && (
          <>
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

            <InputField
              fieldName="password_confirmation"
              labelText="Confirm Password"
              register={register}
              error={errors.password_confirmation?.message}
              type={showConfirm ? 'text' : 'password'}
              showPasswordToggle
              onPasswordToggle={() => setShowConfirm((p) => !p)}
            />

            <InputField
              fieldName="companyName"
              labelText="Company Name"
              register={register}
              error={errors.companyName?.message}
            />
            <Button
              size={"lg"}
              className='w-full mt-8 flex items-center'
              onClick={onNext}
            >
              Next
            </Button>
          </>
        )}

        {step === 2 && (
          <>
            <InputField
              fieldName="workspaceName"
              labelText="Workspace Name"
              register={register}
              error={errors.workspaceName?.message}
            />

            <InputField
              fieldName="businessName"
              labelText="Business Name"
              register={register}
              error={errors.businessName?.message}
            />

            <SelectField
              selectName="intendedUser"
              labelText="Intended User"
              options={intentionOptions}
              value={intendedUserValue}
              setValue={setValue}
              error={errors.intendedUser?.message}
            />

            <InputField
              fieldName="foundUs"
              labelText="How You Found Us"
              register={register}
              error={errors.foundUs?.message}
            />

            <Button
              size={"lg"}
              className='w-full mt-8 flex items-center'
              type="submit">
              Submit
            </Button>
          </>
        )}
      </form>
    </div>
  );
}
