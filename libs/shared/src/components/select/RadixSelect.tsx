import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';

import { styled } from '_@landing-ui/design-system/stitches.config';
// import BaseInput from '_@shared/components/input/BaseInput';

export type SelectProps = {
  options: { value: string; text: string }[];
  name: string;
} & Omit<React.InputHTMLAttributes<HTMLSelectElement>, 'defaultValue'> &
  React.ComponentProps<typeof Select>;
export type RadixSelect = typeof RadixSelect;

const RadixSelect = React.forwardRef<HTMLButtonElement, SelectProps>(
  ({ options, name, ...props }, ref) => {
    return (
      <Select {...props} onValueChange={props.onValueChange}>
        <SelectTrigger ref={ref} aria-label={props['aria-label']}>
          <SelectValue placeholder={props.placeholder} />
          {/* <BaseInput
              value={props.value}
              placeholder={props.placeholder}
              name=""
            /> */}

          {/* <SelectValue asChild placeholder={props.placeholder}> */}

          <SelectIcon>
            <ChevronDownIcon />
          </SelectIcon>
        </SelectTrigger>
        <SelectContent>
          <SelectScrollUpButton>
            <ChevronUpIcon />
          </SelectScrollUpButton>

          <SelectViewport>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                <SelectItemText>{option.text}</SelectItemText>

                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
            ))}

            {/* <SelectGroup>
             <SelectLabel />
 
             <SelectItem>
               <SelectItemText />
 
               <SelectItemIndicator />
             </SelectItem>
           </SelectGroup> */}
          </SelectViewport>

          <SelectScrollDownButton>
            <ChevronDownIcon />
          </SelectScrollDownButton>
        </SelectContent>
      </Select>
    );
  },
);

export default RadixSelect;

const Select = styled(SelectPrimitive.Root, {});
const SelectTrigger = styled(SelectPrimitive.SelectTrigger, {
  display: 'flex',
  // border: 'none',
  flexBasis: '100%',
  padding: '$x4',
  backgroundColor: '$grey50',
  solidBorder: '$grey50',
  fontSize: '$16px',
  flexPosition: 'space-between center',
  // position: 'relative',

  // '& > input': { flexGrow: 1 },
  // flexPosition: 'space-between center',
  // '&[data-placeholder]': {
  //   color: '#7c7c7c',
  // },
});
const SelectContent = styled(SelectPrimitive.Content, {
  overflow: 'hidden',
  background: '$white',
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});
const SelectItem = styled(SelectPrimitive.Item, {
  py: '$x4',
  px: '$x6',
  display: 'flex',
  flexPosition: 'flex-start center',
  background: '$white1',
});
const SelectViewport = styled(SelectPrimitive.Viewport, {});
const SelectItemText = styled(SelectPrimitive.ItemText, {});
// const SelectLabel = styled(SelectPrimitive.Label, {});
const SelectScrollUpButton = styled(SelectPrimitive.ScrollUpButton, {});
const SelectScrollDownButton = styled(SelectPrimitive.ScrollDownButton, {});
const SelectItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  flexPosition: 'center',
});
// const SelectGroup = styled(SelectPrimitive.Group, {});
const SelectIcon = styled(SelectPrimitive.Icon, {
  // position: 'absolute',
  // top: '50%',
  // right: '20px',
  // transform: 'translateY(-50%)',
  // dislay: 'flex',
  // flexPosition: 'center',
});
const SelectValue = styled(SelectPrimitive.Value, {});
