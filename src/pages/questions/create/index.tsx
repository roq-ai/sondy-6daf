import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createQuestion } from 'apiSdk/questions';
import { questionValidationSchema } from 'validationSchema/questions';
import { SurveyInterface } from 'interfaces/survey';
import { getSurveys } from 'apiSdk/surveys';
import { QuestionInterface } from 'interfaces/question';

function QuestionCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: QuestionInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createQuestion(values);
      resetForm();
      router.push('/questions');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<QuestionInterface>({
    initialValues: {
      text: '',
      type: '',
      option_1: '',
      option_2: '',
      option_3: '',
      option_4: '',
      survey_id: (router.query.survey_id as string) ?? null,
    },
    validationSchema: questionValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Questions',
              link: '/questions',
            },
            {
              label: 'Create Question',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Question
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.text}
            label={'Text'}
            props={{
              name: 'text',
              placeholder: 'Text',
              value: formik.values?.text,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.type}
            label={'Type'}
            props={{
              name: 'type',
              placeholder: 'Type',
              value: formik.values?.type,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.option_1}
            label={'Option 1'}
            props={{
              name: 'option_1',
              placeholder: 'Option 1',
              value: formik.values?.option_1,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.option_2}
            label={'Option 2'}
            props={{
              name: 'option_2',
              placeholder: 'Option 2',
              value: formik.values?.option_2,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.option_3}
            label={'Option 3'}
            props={{
              name: 'option_3',
              placeholder: 'Option 3',
              value: formik.values?.option_3,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.option_4}
            label={'Option 4'}
            props={{
              name: 'option_4',
              placeholder: 'Option 4',
              value: formik.values?.option_4,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<SurveyInterface>
            formik={formik}
            name={'survey_id'}
            label={'Select Survey'}
            placeholder={'Select Survey'}
            fetcher={getSurveys}
            labelField={'title'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/questions')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'question',
    operation: AccessOperationEnum.CREATE,
  }),
)(QuestionCreatePage);
