import type { Address } from './address';
import type { EmployeeCount } from './employee';
import type { Contact } from './contact';
import type { IPEntry } from './ip';
import type { TechnologyDescription } from './technology';
import type { FinancialsData } from './financials';
import type { InvestmentRecord } from './investment';
import type { DebtRecord } from './debt';
import type { ProjectionsData } from './projections';

export type CompanyInformation = {
  companyName: {
    en: string;
    fr: string;
  };
  companyOverview: string;
  legalName: string;
  status: CompanyStatus;
  fundspokeRepresentative: string;
  naicsCode?: string;
  federalBusinessRegistryNumber?: string;
  organizationType: OrganizationType;
  corporationNumber: string;
  incorporationDate: string;
  sector: string[];
  logo?: File;
  addresses: Address[];
  employeeCounts: EmployeeCount[];
  keyContacts: Contact[];
  ipPortfolio: IPEntry[];
  technology: TechnologyDescription;
  financials: FinancialsData;
  investmentHistory: InvestmentRecord[];
  debtInformation: DebtRecord[];
  projections: ProjectionsData;
};

export type CompanyStatus = 'Active' | 'Inactive';

export type OrganizationType = 'Non Profit' | 'For Profit' | 'Indigenous' | 'Academic' | 'Municipality' | 'Other';