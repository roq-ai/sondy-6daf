import * as yup from 'yup';

export const responseValidationSchema = yup.object().shape({
  answer: yup.string().required(),
  comment: yup.string().nullable(),
  rating: yup.number().integer().nullable(),
  user_id: yup.string().nullable(),
  question_id: yup.string().nullable(),
  survey_id: yup.string().nullable(),
});
