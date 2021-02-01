import React from 'react';
import { shleemy, TimeIntervalLabel } from 'shleemy';

export const Shleemy = ({
  date,
  rounding,
  toDate,
  humanReadable,
}: {
  date: Date | string;
  rounding?: 'ceil' | 'floor';
  toDate?: string | Date;
  humanReadable?: {
    future?: (value: number, interval: TimeIntervalLabel) => string;
    past?: (value: number, interval: TimeIntervalLabel) => string;
  },
}) => {
  const interval = shleemy(date, {
    toDate,
    rounding,
    humanReadable: {
      future: humanReadable?.future,
      past: humanReadable?.past,
    },
  });

  return (<>{interval}</>);
};
