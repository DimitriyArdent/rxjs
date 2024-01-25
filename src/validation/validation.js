
import * as yup from 'yup';

export const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    password: yup.string().
    min(4, 'Password must be at least 4 characters long').required('Password is required').
    max(6,'Maximum length is 6'),
    phone:  yup
    .string()
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, 'Invalid phone number')
    .required('Phone number is required'),
  });