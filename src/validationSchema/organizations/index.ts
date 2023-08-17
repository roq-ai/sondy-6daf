import * as yup from 'yup';

export const organizationValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  address: yup.string().nullable(),
  city: yup.string().nullable(),
  state: yup.string().nullable(),
  zip: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
