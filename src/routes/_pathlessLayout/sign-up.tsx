import { useState } from 'react';
import { Link, createFileRoute } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import type * as yup from 'yup';

import InputField from '@/components/global/form/InputField';
import SelectField from '@/components/global/form/SelectField';
import { Button } from '@/components/ui/button';
import { signUpSchema } from '@/validation/auth.validation';
import CloseToast from '@/components/global/CloseToast';
import { slugifyCompanyName } from '@/services/TextServices';
import useWindowProperties from '@/hooks/useWindowProperties';


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
    getValues,
    watch,
  } = useForm<FormValues>({
    resolver: yupResolver(signUpSchema),
    mode: 'onTouched',
    defaultValues: {
      intendedUser: ""
    }
  });

  const [intendedUserValue, workspaceName] = watch(['intendedUser', 'workspaceName']);

  const intentionOptions = [
    { label: 'Business Owner', value: 'Business Owner' },
    { label: 'Team Member', value: 'Team Member' },
    { label: 'Developer', value: 'Developer' },
    { label: 'Admin', value: 'Admin' },
  ];

  const onNext = async () => {
    const valid = await trigger(['email', 'password', 'password_confirmation', 'companyName']);
    if (valid) {
      setValue("workspaceName",
        slugifyCompanyName(getValues("companyName"))
      )
      setStep(2)
    };
  };

  const onBack = () => setStep(1);

  const onSubmit = (_data: FormValues) => {
    if (step === 1) {
      onNext()
      return
    }
    toast.success("Sign Up success", { action: <CloseToast /> })
    // TODO: submit registration
  };

  const { baseUrl } = useWindowProperties({})

  return (
    <div className="mt-6 max-w-[700px]">
      {/* Progress Bar */}
      <span className="text-gray-700 font-medium text-[20px] inline-block mb-2">
        Step {step}/2
      </span>
      <div className="w-full h-2 bg-gray-200 rounded mb-6 relative">
        <div className={`h-2 rounded relative bg-main transition-width duration-300 ${step === 1 ? 'w-1/2' : 'w-full'}`} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='pb-5 flex flex-col gap-4'>
        <h1 className="text-2xl sm:text-4xl mb-4 text-gray-700">Let's Get Started</h1>
        {
          step === 2 && (
            <div className="w-full justify-start">
              <Button type='button' onClick={onBack} variant={"ghost"} className='bg-transparent text-gray-700 px-2 cursor-pointer group'>
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
              className='w-full mt-6 h-14 flex items-center'
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
            <p className='inline-block relative -top-5'>
              <span> Workspace will be at : </span>
              <span className="block w-fit shadow-sm border px-2 mt-1 rounded-lg py-[20x] bg-gray-100 border-gray-200">
                {
                  baseUrl + "/" +
                  slugifyCompanyName(workspaceName)
                }
              </span>
            </p>

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
              className='w-full mt-6 flex items-center h-14'
              type="submit">
              Submit
            </Button>
          </>
        )}
      </form>
      <p className="text-center mt-2">
        Already have an account?
        {' '}
        <Link to="/log-in" className="text-main">Log in Here</Link>
      </p>
    </div>
  );
}
