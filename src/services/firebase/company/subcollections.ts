import { collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '../init';
import type { CompanyDocument } from '../../../types/company';

export const createSubcollections = async (
  companyId: string, 
  data: CompanyDocument
) => {
  const companyRef = doc(db, 'companies', companyId);

  // Handle addresses
  if (data.addresses?.length) {
    const addressesRef = collection(companyRef, 'companies_addresses');
    await Promise.all(data.addresses.map(address =>
      setDoc(doc(addressesRef), {
        ...address,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      })
    ));
  }

  // Handle personnel
  if (data.personnel) {
    await setDoc(
      doc(companyRef, 'companies_personnel', 'demographics'),
      {
        ...data.personnel,
        updatedAt: Timestamp.now(),
      }
    );
  }

  // Handle employee counts
  if (data.employeeCounts?.length) {
    const countsRef = collection(companyRef, 'companies_employeeCount');
    await Promise.all(data.employeeCounts.map(count =>
      setDoc(doc(countsRef), {
        ...count,
        updatedAt: Timestamp.now(),
      })
    ));
  }

  // Add similar handling for other subcollections...
};