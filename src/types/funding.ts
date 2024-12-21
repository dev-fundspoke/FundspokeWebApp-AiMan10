export type ApplicationStatus = 'submitted' | 'under_review' | 'approved' | 'rejected' | 'pending';

export interface Application {
  id: string;
  companyName: string;
  companyId: string;
  status: ApplicationStatus;
  submissionDate: string;
  fundingAmount: number;
}