import {
  format,
  parseISO,
  setHours,
  setMinutes,
  isToday,
  isTomorrow,
} from 'date-fns';
import { Booking } from '../types';

export const combineDateAndTime = (baseDate: Date, hours: number): Date => {
  return setMinutes(setHours(baseDate, hours), 0);
};

export const addDurationToDate = (inputDate: Date, slotDuration: number) => {
  const date = new Date(inputDate);
  const newDate = new Date(date.getTime() + slotDuration * 60000); // Convert minutes to milliseconds and add to the date
  newDate.setSeconds(0);
  newDate.setMilliseconds(0);

  return newDate;
};

export function formatTime(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, 'HH:mm');
}

export function describeDate(dateString: string): string {
  const date = parseISO(dateString);
  if (isToday(date)) {
    return 'Today';
  } else if (isTomorrow(date)) {
    return 'Tomorrow';
  } else {
    return '';
  }
}

export function formatDate(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, 'dd MMM');
}

export function getDayOfWeek(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, 'EEEE');
}

export function isSlotBooked(slot: Date, bookings: Booking[]) {
  return bookings.some(
    (booking) =>
      new Date(slot).getTime() === new Date(booking.startTime).getTime(),
  );
}

export function delay(time: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}