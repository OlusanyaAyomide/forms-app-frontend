import * as yup from 'yup';

import {
  validateRequiredEmail,
  validateRequiredPassword,
  validateRequiredPasswordConfirmation,
  validateRequiredString,
} from '@/services/validation.services';


export const signUpSchema = yup.object({
  email: validateRequiredEmail('Email'),
  password: validateRequiredPassword('Password'),
  password_confirmation: validateRequiredPasswordConfirmation('Confirm Password', 'password'),
  companyName: validateRequiredString('Company Name'),
  workspaceName: validateRequiredString('Workspace Name').min(4),
  businessName: validateRequiredString('Business Name'),
  intendedUser: yup
    .string()
    .required('Intended User is required'),
  foundUs: validateRequiredString('How You Found Us'),
});

export const signInSchema = yup.object({
  email: validateRequiredEmail('Email'),
  password: validateRequiredPassword('Password'),

});