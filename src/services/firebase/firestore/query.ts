import { 
  collection, 
  query, 
  where,
  orderBy,
  limit,
  getDocs,
  type QueryConstraint 
} from 'firebase/firestore';
import { db } from '../init';
import { handleFirebaseError } from '../errors';

// Type-safe query builder
interface QueryCondition {
  field: string;
  operator: '==' | '>' | '<' | '>=' | '<=';
  value: unknown;
}

export const queryDocuments = async <T>(
  collectionName: string,
  conditions: QueryCondition[],
  orderByField?: string,
  limitTo?: number
): Promise<T[]> => {
  try {
    const constraints: QueryConstraint[] = [];

    // Add where clauses
    conditions.forEach(({ field, operator, value }) => {
      constraints.push(where(field, operator, value));
    });

    // Add ordering if specified
    if (orderByField) {
      constraints.push(orderBy(orderByField));
    }

    // Add limit if specified
    if (limitTo) {
      constraints.push(limit(limitTo));
    }

    // Build and execute query
    const q = query(collection(db, collectionName), ...constraints);
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as T[];
  } catch (error) {
    return handleFirebaseError(error);
  }
};