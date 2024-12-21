import React from 'react';
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => {
  return (
    <Link to="/" className="text-[#A3E635] text-2xl font-bold no-underline hover:opacity-90">
      FundSpoke
    </Link>
  );
};