import type { CheckboxCustomProps } from 'libs/shared/src/components/checkbox/CheckboxCustom';
import CheckboxCustom from 'libs/shared/src/components/checkbox/CheckboxCustom';
import { styled } from '_@landing-ui/design-system/stitches.config';
import type { CheckboxList } from './FilterSession';

type FilterCategoriesProps = {
  checkboxList: CheckboxList[];
  titleCategory: string;
  onClear: () => void;
  isHaveSlideBreak: boolean;
  onChangeCheckbox: (isChecked: boolean) => void;
  inputProps?: CheckboxCustomProps;
};

export default function FilterCategories({
  checkboxList,
  titleCategory,
  onClear,
  isHaveSlideBreak,
  onChangeCheckbox,
  ...inputProps
}: FilterCategoriesProps) {
  return (
    <FilterCategoriesWrapper
      isHaveSlideBreak={isHaveSlideBreak === true ? 'show' : 'hide'}
    >
      <HeaderWrapper>
        <h3>{titleCategory}</h3>
        <ClearAllButton onClick={onClear}>Clear</ClearAllButton>
      </HeaderWrapper>
      <CheckboxWrapper>
        {checkboxList.map((checkbox: CheckboxList, index: number) => (
          <CheckboxCustom
            {...checkbox}
            key={index}
            onChangeCheckbox={onChangeCheckbox}
            {...inputProps}
          />
        ))}
      </CheckboxWrapper>
    </FilterCategoriesWrapper>
  );
}

const FilterCategoriesWrapper = styled('div', {
  variants: {
    isHaveSlideBreak: {
      show: {
        marginTop: '$x4',
        borderTop: '1px solid grey',
      },
      hide: {},
    },
  },
});

const HeaderWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const ClearAllButton = styled('span', {
  cursor: 'pointer',
  textDecoration: 'underline',
});

const CheckboxWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$x3',
});
