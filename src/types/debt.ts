export type DebtType = 'Loan' | 'Bond' | 'Line of Credit' | 'Other';

export interface DebtRecord {
  id: string;
  debtType: DebtType;
  currentDebtAmount: number;
  paymentSchedule: string;
  notes?: string;
  supportingDocuments?: File[];
}

export const debtTypes: DebtType[] = ['Loan', 'Bond', 'Line of Credit', 'Other'];