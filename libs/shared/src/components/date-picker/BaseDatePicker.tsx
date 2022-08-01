import { useState } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { useFormContext } from 'react-hook-form';

import BaseInput from '_@shared/components/input/BaseInput';
import Calendar from './Calendar';

import { styled } from '_@landing-ui/design-system/stitches.config';

export type DatePickerProps = {
  name: string;
};
export type DatePicker = typeof DatePicker;

const DatePicker = (inputProps: DatePickerProps) => {
  const [, reRender] = useState<any>();
  const { register, setValue, getValues } = useFormContext();

  const onClickDate = (date: Dayjs) => () => {
    //uncontrolled component didnt trigger re-render on change for optimizing performance
    setValue(inputProps.name, date.format('YYYY MMM DD'));
    reRender({});
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <BaseInput {...register(inputProps.name)} />
      </PopoverTrigger>

      <PopoverPortal>
        <PopoverContent align="start">
          <Calendar
            //Because getValue dont trigger re-render on this component
            //then pass selected = dayjs(...) may get stale data after fetching apis
            getSelectedDate={() => dayjs(getValues(inputProps.name))}
            onSelectDate={onClickDate}
          />
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  );
};

export default DatePicker;

const Popover = styled(PopoverPrimitive.Root, {});

const PopoverTrigger = styled(PopoverPrimitive.Trigger, {
  cursor: 'pointer',
});

const PopoverContent = styled(PopoverPrimitive.Content, {
  filter: 'drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1))',
  background: '$white',
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

const PopoverPortal = styled(PopoverPrimitive.Portal, {});
