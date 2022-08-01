import { styled } from '_@landing-ui/design-system/stitches.config';
import CheckboxCustom from 'libs/shared/src/components/checkbox/CheckboxCustom';
import type { CheckboxList } from '_@landing-ui/components/filtersession/FilterSession';
import type { CheckboxCustomProps } from 'libs/shared/src/components/checkbox/CheckboxCustom';

type CheckboxFormProps = {
  checkboxList: CheckboxList[];
  titleCategory: string;
  onChangeCheckbox: (isChecked: boolean) => void;
  numberOfColumns?: '2' | '3';
  inputProps?: CheckboxCustomProps;
};

export default function CheckboxForm({
  checkboxList,
  titleCategory,
  onChangeCheckbox,
  numberOfColumns,
  ...inputProps
}: CheckboxFormProps) {
  return (
    <CheckboxFormWrapper>
      <h2>{titleCategory}</h2>
      <CheckboxWrapper numberOfColumns={numberOfColumns}>
        {checkboxList.map((checkbox: CheckboxList, index: number) => (
          <CheckboxCustom
            {...checkbox}
            key={index}
            onChangeCheckbox={onChangeCheckbox}
            {...inputProps}
          />
        ))}
      </CheckboxWrapper>
    </CheckboxFormWrapper>
  );
}

const CheckboxFormWrapper = styled('div', {});

const CheckboxWrapper = styled('div', {
  display: 'grid',
  gap: '$x4',
  variants: {
    numberOfColumns: {
      2: {
        gridTemplateColumns: '1fr 1fr',
      },
      3: {
        gridTemplateColumns: '1fr 1fr 1fr',
      },
    },
  },
});
