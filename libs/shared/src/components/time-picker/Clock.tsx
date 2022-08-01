import { useState } from 'react';
import type { ComponentProps, KeyboardEvent } from 'react';
import dayjs from 'dayjs';

import { styled } from '_@landing-ui/design-system/stitches.config';

type ClockProps = {
  getSelectedTime: () => dayjs.Dayjs;
  onSelectTime: (date: dayjs.Dayjs) => () => void;
};

export default function Clock({ getSelectedTime, onSelectTime }: ClockProps) {
  //Get date 15 to avoid changing +-1 month at date 31
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const selectedTime = getSelectedTime();
  const firstHourOfClock = dayjs().hour(0);
  const AmPm = 'AM';

  return (
    <ClockWrapper>
      <ClockHeader>
        <>
          {hour}
          {minute}
          {AmPm}
        </>
      </ClockHeader>

      {/* <ClockMain onKeyDown={onNavigateByKeyboard}>
        {hour.map((hour, index) => {
          return (
            <Hours
              key={index}
              onClick={onSelectTime(hour)}
              tabIndex={-index}
              className="for-tab-index-navigation"
            >
              {hour.date()}
            </Hours>
          );
        })}
      </ClockMain> */}
      {/* <ClockFooter onClick={onSelectTime(dayjs())}>Today</ClockFooter> */}
    </ClockWrapper>
  );
}

function recursiveQueryObject(
  object: { [key: string]: any },
  key: string,
  times: number,
) {
  let result = object;
  [...Array(times)].forEach(() => {
    if (!result) return;
    result = result[key];
  });
  return result;
}

function onNavigateByKeyboard(e: KeyboardEvent<HTMLDivElement>) {
  const event: any = e.nativeEvent;
  let nextFocusElement;
  if (e.code === 'ArrowRight') {
    nextFocusElement = event.target.nextElementSibling;
  }
  if (e.code === 'ArrowLeft') {
    nextFocusElement = event.target.previousElementSibling;
  }
  if (e.code === 'ArrowDown') {
    nextFocusElement = recursiveQueryObject(
      event.target,
      'nextElementSibling',
      7,
    );
  }
  if (e.code === 'ArrowUp') {
    nextFocusElement = recursiveQueryObject(
      event.target,
      'previousElementSibling',
      7,
    );
  }
  if (
    !nextFocusElement ||
    !nextFocusElement.className.includes('for-tab-index-navigation')
  )
    return;
  event.target.tabIndex = -1;
  nextFocusElement.tabIndex = 0;
  nextFocusElement.focus();
}

const hour = [
  '00',
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
];
const minute = [
  '00',
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '50',
  '51',
  '52',
  '53',
  '54',
  '55',
  '56',
  '57',
  '58',
  '59',
];

const ClockWrapper = styled('div', {
  width: 280,
  minHeight: 100,
  lightBody: '$14px',
  ' button': {
    cursor: 'pointer',
  },
});

const ClockHeader = styled('div', {
  padding: '$x2',
  display: 'flex',
  '> div': {
    flexPosition: 'center',
    flex: 1,
  },
});

const ClockMain = styled('div', {
  padding: '$x2 $x3',
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '$x1 0',
  alignItems: 'center',
  justifyItems: 'center',
  by: '1px solid $grey200',
});

const Hours = styled('button', {
  $$shadow: '0px 0px 0px 2px rgba(0, 197, 187, 0.08)',
  size: 'calc(24rem/16)',
  flexPosition: 'center',
  border: '1px solid transparent',
  marginBottom: '$x1',
  background: 'transparent',

  transition: '0.15s',
  borderRadius: '2px',
  '&:focus-visible': { outline: 'none' },

  '&:disabled': {
    cursor: 'not-allowed',
    color: '$grey600 !important',
    background: '$grey100 !important',
    borderColor: '$grey100 !important',
    '&:focus-visible': {
      boxShadow: '$$shadow',
      borderColor: '$primary500 !important',
    },
  },
});

const ClockFooter = styled('button', {
  height: '40px',
  flexPosition: 'center',
  textAlign: 'center',
  fontWeight: '$normal',
  color: '$primary500',
  border: 'none',
  background: 'transparent',
  width: '100%',
});
