export type InvestmentType = 'Equity' | 'Debt' | 'Grant' | 'Other';

export interface InvestorInfo {
  name: string;
  contact?: string;
  details?: string;
}

export interface InvestmentRecord {
  id: string;
  date: string;
  amountReceived: number;
  investmentType: InvestmentType;
  investorInfo: InvestorInfo;
  supportingDocuments?: File[];
}

export const investmentTypes: InvestmentType[] = ['Equity', 'Debt', 'Grant', 'Other'];