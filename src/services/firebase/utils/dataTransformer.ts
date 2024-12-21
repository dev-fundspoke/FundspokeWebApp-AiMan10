import { Timestamp } from 'firebase/firestore';

/**
 * Transforms data to be Firestore-compatible by:
 * - Converting undefined values to null
 * - Converting Date objects to Timestamps
 * - Ensuring arrays are defined
 * - Removing functions and symbols
 */
export const transformForFirestore = (data: Record<string, any>): Record<string, any> => {
  const transformed: Record<string, any> = {};

  for (const [key, value] of Object.entries(data)) {
    // Skip undefined values
    if (value === undefined) continue;

    // Transform based on value type
    if (value === null) {
      transformed[key] = null;
    } else if (value instanceof Date) {
      transformed[key] = Timestamp.fromDate(value);
    } else if (Array.isArray(value)) {
      transformed[key] = value.map(item => 
        typeof item === 'object' ? transformForFirestore(item) : item
      );
    } else if (typeof value === 'object') {
      transformed[key] = transformForFirestore(value);
    } else if (['string', 'number', 'boolean'].includes(typeof value)) {
      transformed[key] = value;
    } else {
      // Skip functions, symbols, etc.
      continue;
    }
  }

  return transformed;
};