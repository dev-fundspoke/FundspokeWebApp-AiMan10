export type FinancialYear = {
  id: string;
  year: number;
  revenue: number;
  profit: number;
  rdExpense: number;
  documents?: File[];
};

export interface FinancialsData {
  years: FinancialYear[];
}