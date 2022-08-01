import { styled } from '_@landing-ui/design-system/stitches.config';
import FilterCategories from './FilterCategories';

import { FormProvider, useForm } from 'react-hook-form';

export type CheckboxList = {
  name: string;
  id: string;
  label: string;
};

export type DataFilters = {
  titleCategory: string;
  checkboxList: CheckboxList[];
};

export type DefaultValues = {
  [Key: string]: boolean;
};

type FilterSessionProps = {
  dataFilters: DataFilters[];
  defaultValues: DefaultValues[];
};

export default function FilterSession({
  dataFilters = [{ titleCategory: '', checkboxList: [] }],
  defaultValues = [],
}: FilterSessionProps) {
  const formMethods = useForm({ defaultValues: defaultValues });
  const { handleSubmit, getValues, reset, resetField } = formMethods;
  const onChangeCheckbox = (value: boolean): void => {
    console.log(getValues());
  };

  const onClear = (checkboxListClear: CheckboxList[]): void => {
    for (let i = 0; i < checkboxListClear.length; i++) {
      resetField<any>(checkboxListClear[i].name);
    }
    console.log(getValues());
  };

  return (
    <FormProvider {...formMethods}>
      <HeaderWrapper>
        <h2>Filter</h2>
        <ClearAllButton onClick={() => reset(defaultValues)}>
          Clear all
        </ClearAllButton>
      </HeaderWrapper>

      <form onSubmit={handleSubmit((data) => console.log(data))}>
        {dataFilters.map((FilterCategory: DataFilters, index: number) => (
          <FilterCategories
            titleCategory={FilterCategory.titleCategory}
            checkboxList={FilterCategory.checkboxList}
            onChangeCheckbox={onChangeCheckbox}
            onClear={() => onClear(FilterCategory.checkboxList)}
            isHaveSlideBreak={!!index && true}
            key={index}
          />
        ))}
      </form>
    </FormProvider>
  );
}

const HeaderWrapper = styled('div', {
  display: 'flex',
  borderBottom: '2px solid black',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const ClearAllButton = styled('span', {
  cursor: 'pointer',
  textDecoration: 'underline',
});
