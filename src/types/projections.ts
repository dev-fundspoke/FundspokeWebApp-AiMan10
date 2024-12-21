export type ConfidenceLevel = 'low' | 'medium' | 'high';

export interface ProjectionEntry {
  id: string;
  startDate: string;
  endDate: string;
  amount: number;
  confidenceLevel: ConfidenceLevel;
  projectionSources: string;
}

export interface ProjectionsData {
  futureRevenueProjections: ProjectionEntry[];
  growthPlans: string;
  supportingDocuments?: File[];
}

export const confidenceLevels: ConfidenceLevel[] = ['low', 'medium', 'high'];