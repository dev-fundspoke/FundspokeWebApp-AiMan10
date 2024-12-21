import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

export const Footer: React.FC = () => {
  return (
    <AntFooter className="bg-[#008080] mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="space-x-6 mb-4 md:mb-0">
          <a href="#" className="text-white hover:text-[#A3E635]">Privacy Policy</a>
          <a href="#" className="text-white hover:text-[#A3E635]">Terms of Service</a>
          <a href="#" className="text-white hover:text-[#A3E635]">Support</a>
        </div>
        <div className="text-white">
          © {new Date().getFullYear()} FundSpoke. All Rights Reserved.
        </div>
      </div>
    </AntFooter>
  );
};