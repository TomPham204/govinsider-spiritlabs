import { useForm, FormProvider } from 'react-hook-form';

import CheckboxCustom from './CheckboxCustom';
import type { CheckboxList } from '_@landing-ui/components/filtersession/FilterSession';

const storiesOptions = {
  title: 'CheckboxCustom',
};

export default storiesOptions;

const checkboxProps: CheckboxList = {
  name: 'checkbox',
  id: 'checkbox',
  label: 'checkbox',
};

const onChangeCheckbox = (isChecked: boolean): void => {
  console.log(isChecked);
};

export const CheckboxCustom1 = () => {
  const formControl = useForm();

  return (
    <FormProvider {...formControl}>
      <CheckboxCustom onChangeCheckbox={onChangeCheckbox} {...checkboxProps} />
    </FormProvider>
  );
};
