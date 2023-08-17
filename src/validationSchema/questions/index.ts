import * as yup from 'yup';

export const questionValidationSchema = yup.object().shape({
  text: yup.string().required(),
  type: yup.string().required(),
  option_1: yup.string().nullable(),
  option_2: yup.string().nullable(),
  option_3: yup.string().nullable(),
  option_4: yup.string().nullable(),
  survey_id: yup.string().nullable(),
});
