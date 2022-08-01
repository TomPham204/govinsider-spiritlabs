import { useState } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { useFormContext } from 'react-hook-form';

import BaseInput from '_@shared/components/input/BaseInput';
import Clock from './Clock';

import { styled } from '_@landing-ui/design-system/stitches.config';

export type TimePickerProps = {
  name: string;
};
export type TimePicker = typeof TimePicker;

const TimePicker = (inputProps: TimePickerProps) => {
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
          <Clock
            //Because getValue dont trigger re-render on this component
            //then pass selected = dayjs(...) may get stale data after fetching apis
            getSelectedTime={() => dayjs(getValues(inputProps.name))}
            onSelectTime={onClickDate}
          />
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  );
};

export default TimePicker;

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
