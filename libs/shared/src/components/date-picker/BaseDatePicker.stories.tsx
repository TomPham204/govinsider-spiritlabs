import { useForm, FormProvider } from 'react-hook-form';
import DatePicker from './BaseDatePicker';

const storiesOptions = {
  title: 'FormElements',
};

export default storiesOptions;

export const BaseDatePicker = () => {
  const formControl = useForm();
  return (
    <FormProvider {...formControl}>
      <DatePicker name="datepicker" />
    </FormProvider>
  );
};
