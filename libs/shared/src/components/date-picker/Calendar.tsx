import { useState } from 'react';
import type { ComponentProps, KeyboardEvent } from 'react';
import dayjs from 'dayjs';

import Chevron from '_@landing-ui/icons/chevron';
import DoubleChevron from '_@landing-ui/icons/double-chevron';

import { styled } from '_@landing-ui/design-system/stitches.config';

type CalendarProps = {
  getSelectedDate: () => dayjs.Dayjs;
  onSelectDate: (date: dayjs.Dayjs) => () => void;
};

export default function Calendar({
  getSelectedDate,
  onSelectDate,
}: CalendarProps) {
  //Get date 15 to avoid changing +-1 month at date 31
  const [calendarPage, setCalendarPage] = useState(() => dayjs().date(15)); //be care of this
  const [year, month] = [calendarPage.year(), calendarPage.month()];
  const changePageBy = (increase: number, type: 'year' | 'month') => () => {
    setCalendarPage(calendarPage.add(increase, type));
  };
  const selectedDate = getSelectedDate();

  const firstDayOfMonth = dayjs().year(year).month(month).date(1);
  const firstDayInCalendar = dayjs()
    .year(year)
    .month(month)
    .date(1)
    .subtract(firstDayOfMonth.day() - 1, 'day');

  const monthDays = Array.from(Array(42), (_, i) =>
    firstDayInCalendar.add(i, 'days'),
  );

  return (
    <CalendarWrapper>
      <CalendarHeader>
        <DoubleChevron dir="left" onClick={changePageBy(-1, 'year')} />
        <Chevron dir="left" onClick={changePageBy(-1, 'month')} />
        <div>
          {months[month]} {year}
        </div>
        <Chevron dir="right" onClick={changePageBy(1, 'month')} />
        <DoubleChevron dir="right" onClick={changePageBy(1, 'year')} />
      </CalendarHeader>

      <CalendarMain onKeyDown={onNavigateByKeyboard}>
        {weekDays.map((day) => (
          <WeekDays key={day.value}>{day.text}</WeekDays>
        ))}

        {monthDays.map((day, index) => {
          let mode: ComponentProps<typeof MonthDays>['mode'] = 'normal';
          if (!day.isSame(calendarPage, 'month')) mode = 'otherMonth';
          if (day.isSame(dayjs(), 'day')) mode = 'today';
          if (selectedDate?.isSame(day, 'day')) mode = 'select';

          return (
            <MonthDays
              mode={mode}
              key={index}
              onClick={onSelectDate(day)}
              tabIndex={-index}
              className="for-tab-index-navigation"
            >
              {day.date()}
            </MonthDays>
          );
        })}
      </CalendarMain>
      <CalendarFooter onClick={onSelectDate(dayjs())}>Today</CalendarFooter>
    </CalendarWrapper>
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

const weekDays = [
  { text: 'M', value: 1 },
  { text: 'T', value: 2 },
  { text: 'W', value: 3 },
  { text: 'Th', value: 4 },
  { text: 'F', value: 5 },
  { text: 'Sa', value: 6 },
  { text: 'S', value: 0 },
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const CalendarWrapper = styled('div', {
  width: 280,
  minHeight: 100,
  lightBody: '$14px',
  ' button': {
    cursor: 'pointer',
  },
});

const CalendarHeader = styled('div', {
  padding: '$x2',
  display: 'flex',
  '> div': {
    flexPosition: 'center',
    flex: 1,
  },
});

const CalendarMain = styled('div', {
  padding: '$x2 $x3',
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '$x1 0',
  alignItems: 'center',
  justifyItems: 'center',
  by: '1px solid $grey200',
});

const WeekDays = styled('div', {
  size: 'calc(36rem/16) calc(30rem/16)',
  flexPosition: 'center',
});

const MonthDays = styled('button', {
  $$shadow: '0px 0px 0px 2px rgba(0, 197, 187, 0.08)',
  size: 'calc(24rem/16)',
  flexPosition: 'center',
  border: '1px solid transparent',
  marginBottom: '$x1',
  background: 'transparent',

  transition: '0.15s',
  borderRadius: '2px',
  '&:focus-visible': { outline: 'none' },

  variants: {
    mode: {
      normal: {
        '&:hover': {
          background: '$primary50',
          borderColor: '$primary50',
        },
        '&:focus-visible': {
          borderColor: '$primary500',
        },
        '&:hover:focus-visible': {
          boxShadow: '$$shadow',
        },
      },
      today: {
        border: '1px solid $primary500',
        '&:hover': {
          background: '$primary50',
        },
        '&:hover:focus-visible': {
          boxShadow: '$$shadow',
        },
      },
      select: {
        background: '$primary500',
        color: '$white',
        borderColor: '$primary500',
        '&:hover': {
          background: '$primary700',
          borderColor: '$primary700',
        },
        '&:focus-visible': {
          boxShadow: '$$shadow',
        },
        '&:hover:focus-visible': {
          borderColor: '$primary500',
        },
      },
      otherMonth: {
        color: '$grey600',
        '&:hover': {
          background: '$primary50',
        },
        '&:focus-visible': {
          borderColor: '$primary500',
        },
        '&:hover:focus-visible': {
          boxShadow: '$$shadow',
        },
      },
    },
  },

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

const CalendarFooter = styled('button', {
  height: '40px',
  flexPosition: 'center',
  textAlign: 'center',
  fontWeight: '$normal',
  color: '$primary500',
  border: 'none',
  background: 'transparent',
  width: '100%',
});
