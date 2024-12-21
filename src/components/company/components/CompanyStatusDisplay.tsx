import React from 'react';

interface CompanyStatusDisplayProps {
  companyName: string;
  status: string;
}

export const CompanyStatusDisplay: React.FC<CompanyStatusDisplayProps> = ({
  companyName,
  status,
}) => (
  <span className="text-sm opacity-70">
    {companyName} - {status}
  </span>
);