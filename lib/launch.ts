import { LAUNCH_DATE_ISO } from '@/constants/launch';

export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
  isActive: boolean;
}

export function getLaunchDate(): Date {
  return new Date(LAUNCH_DATE_ISO);
}

export function isFounderOfferActive(): boolean {
  const now = new Date();
  const launchDate = getLaunchDate();
  return now < launchDate;
}

export function getTimeRemaining(): TimeRemaining {
  const now = new Date();
  const launchDate = getLaunchDate();

  if (now >= launchDate) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      total: 0,
      isActive: false,
    };
  }

  const diff = launchDate.getTime() - now.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
    total: diff,
    isActive: true,
  };
}
