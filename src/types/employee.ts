export interface QuarterEntry {
  id: string;
  quarterYear: string;
  fullTime: number;
  partTime: number;
  contract: number;
}

export interface EmployeeCountSummary {
  totalQuarters: number;
  totalEmployees: number;
}