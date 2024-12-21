import { Timestamp } from 'firebase/firestore';
import type { CompanyFormData } from '../../../types/company';

export const transformForFirestore = (data: CompanyFormData) => {
  const transformed: Record<string, any> = {
    ...data,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  };

  // Convert dates to Timestamps
  if (data.incorporationDate) {
    transformed.incorporationDate = Timestamp.fromDate(new Date(data.incorporationDate));
  }

  // Remove undefined values and empty arrays
  Object.entries(transformed).forEach(([key, value]) => {
    if (value === undefined) {
      delete transformed[key];
    }
    if (Array.isArray(value) && value.length === 0) {
      delete transformed[key];
    }
  });

  return transformed;
};

export const transformFromFirestore = <T extends Record<string, any>>(data: T): T => {
  const transformed = { ...data };

  // Convert Timestamps back to dates
  Object.entries(transformed).forEach(([key, value]) => {
    if (value instanceof Timestamp) {
      transformed[key] = value.toDate();
    }
  });

  return transformed;
};