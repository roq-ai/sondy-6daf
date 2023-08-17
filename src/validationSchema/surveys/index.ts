import * as yup from 'yup';

export const surveyValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  status: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
