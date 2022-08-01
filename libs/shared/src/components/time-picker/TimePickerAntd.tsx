import { TimePicker, Button } from 'antd';
import React, { useState } from 'react';
import { styled } from '_@landing-ui/design-system/stitches.config';
import 'antd/dist/antd.css';
import './TimePicker.css';

export default function BaseTimePicker() {
  const [time, setTime] = useState('00:00 AM');
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenChange = () => {
    setIsOpen(!isOpen);
    setTime(time);
  };
  const handleClose = () => setIsOpen(false);

  // interface TimePicker {
  //   use12Hours: boolean;
  //   open: boolean;
  //   onOpenChange: () => void;
  //   format: string;
  //   addon: () => JSX.Element;
  // }

  return (
    <StyledTimePicker
      use12Hours={false}
      open={isOpen}
      onOpenChange={() => handleOpenChange(time)}
      format={'hh:mm a'}
      className={'time-picker'}
      popupClassName={'time-popup'}
      value={time}
      addon={() => (
        <>
          <Button size="small" type="default" onClick={handleClose}>
            Now
          </Button>
          <Button size="small" type="primary" onClick={() => setTime(time)}>
            Ok
          </Button>
        </>
      )}
      style={{ display: 'flex' }}
    />
  );
}

const StyledTimePicker = styled(TimePicker, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  li: {
    listStyle: 'none',
  },
  '.time-picker': {
    border: '2px solid blue',
    width: '$x15',
    height: '$x15',
  },
  '.time-popup': {
    border: '2px solid red',
    display: 'flex',
    width: '$x15',
    height: '$x15',
    ul: {
      listStyle: 'none',
      li: {
        listStyle: 'none',
      },
    },
  },
});
