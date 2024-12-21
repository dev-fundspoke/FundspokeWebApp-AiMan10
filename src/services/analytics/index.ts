import { logEvent } from 'firebase/analytics';
import { analytics } from '../../config/firebase';

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (analytics) {
    logEvent(analytics, eventName, eventParams);
  }
};