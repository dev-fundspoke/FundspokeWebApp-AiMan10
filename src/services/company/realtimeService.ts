import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { CompanyError, CompanyErrorCodes } from './errors';
import type { CompanyInformation } from '../../types/company';

export const realtimeService = {
  subscribeToCompany(companyId: string, callback: (data: CompanyInformation) => void) {
    return onSnapshot(
      doc(db, 'companies', companyId),
      (snapshot) => {
        if (snapshot.exists()) {
          callback(snapshot.data() as CompanyInformation);
        }
      },
      (error) => {
        throw new CompanyError(
          'Failed to subscribe to company updates',
          CompanyErrorCodes.SUBSCRIPTION_FAILED,
          { companyId, error }
        );
      }
    );
  },

  async updateCompanyField(
    companyId: string,
    field: keyof CompanyInformation,
    value: any
  ): Promise<void> {
    try {
      const companyRef = doc(db, 'companies', companyId);
      await updateDoc(companyRef, {
        [field]: value,
        updatedAt: new Date().toISOString()
      });
    } catch (error) {
      throw new CompanyError(
        'Failed to update company field',
        CompanyErrorCodes.UPDATE_FAILED,
        { companyId, field, error }
      );
    }
  }
};