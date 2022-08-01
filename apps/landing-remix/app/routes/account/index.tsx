import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import FormInput from '_@shared/components/input/FormInput';
import FormSelect from '_@shared/components/select/FormSelect';
import FormTextArea from '_@shared/components/textarea/FormTextArea';
import BaseDatePicker from '_@shared/components/date-picker/BaseDatePicker';
// import BaseTimePicker from '_@shared/components/time-picker/BaseTimePicker';
import BaseTimePicker from '_@shared/components/time-picker/TimePickerAntd';
import BaseFormItem from '_@shared/components/form-item/BaseFormItem';
import type { FormItemProps } from '_@shared/components/form-item/BaseFormItem';

import { styled } from '_@landing-ui/design-system/stitches.config';

type FormFields = {
  firstName: string;
  lastName: string;
  gender: string;
  birthday: string;
  twitter: string;
  linkedin: string;
  companyName: string;
  jobTitle: string;
  jobDescription: string;
};

const schema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  birthday: z.string(),
  gender: z.string(),
  twitter: z.string(),
  linkedin: z.string(),
  companyName: z.string(),
  jobTitle: z.string(),
  jobDescription: z.string().max(120),
});

export const loader: LoaderFunction = async () => {
  const profile = {
    firstName: 'Test First Name',
    lastName: 'Test last name',
    birthday: '2022 Jul 06',
    gender: 'female',
    twitter: 'twitter.com',
    linkedin: 'linkedin.com',
    companyName: 'Spiritlabs',
    jobTitle: 'Developer',
    jobDescription: 'Ngồi chơi review code',
  };

  return json(profile);
};

export default function () {
  const data = useLoaderData();
  console.log(data);
  const formMethods = useForm<FormFields>({
    // defaultValues: { gender: 'male' },
    defaultValues: data,
    resolver: zodResolver(schema),
  });
  const { handleSubmit } = formMethods;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Section>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {formElements.map((elementProps, index) => (
            <BaseFormItem {...elementProps} key={index} />
          ))}
          <button type="submit">Save</button>
        </form>
      </FormProvider>
    </Section>
  );
}

const formElements: FormItemProps[] = [
  {
    Component: FormInput,
    labelProps: { label: 'Full name', htmlFor: 'firstName' },
    inputProps: [
      { placeholder: 'Your first name', name: 'firstName', id: 'firstName' },
      { placeholder: 'Your last name', name: 'lastName', id: 'lastName' },
    ],
  },
  {
    Component: BaseDatePicker,
    labelProps: { label: 'Birthday', htmlFor: 'birthday' },
    inputProps: { name: 'birthday', id: 'birthday' },
  },
  {
    Component: BaseTimePicker,
    labelProps: { label: 'Time' },
    inputProps: { name: 'time', id: 'time' },
  },
  {
    Component: FormSelect,
    labelProps: { label: 'Gender', htmlFor: 'gender' },
    inputProps: {
      'aria-label': 'gender',
      name: 'gender',
      id: 'gender',
      options: [
        { value: 'male', text: 'Male' },
        { value: 'female', text: 'Female' },
      ],
    },
  },
  {
    Component: FormInput,
    labelProps: { label: 'Social media account', htmlFor: 'twitter' },
    inputProps: [
      {
        placeholder: 'Link to your Twitter profile',
        name: 'twitter',
        id: 'twitter',
      },
      {
        placeholder: 'Link to your Linkedin profile',
        name: 'linkedin',
        id: 'linkedin',
      },
    ],
  },
  {
    Component: FormInput,
    labelProps: { label: 'Company', htmlFor: 'companyName' },
    inputProps: {
      placeholder: 'Your company name',
      name: 'companyName',
      id: 'companyName',
    },
  },
  {
    Component: FormInput,
    labelProps: { label: 'Job title', htmlFor: 'jobTitle' },
    inputProps: {
      placeholder: 'Your job title',
      name: 'jobTitle',
      id: 'jobTitle',
    },
  },
  {
    Component: FormTextArea,
    labelProps: { label: 'Job description', htmlFor: 'jobDescription' },
    inputProps: {
      placeholder: 'Describe your job',
      name: 'jobDescription',
      id: 'jobDescription',
    },
  },
];

const Section = styled('section', {
  width: '100%',
});
