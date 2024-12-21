import React from 'react';

interface WelcomeMessageProps {
  userName: string;
}

export const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ userName }) => {
  return (
    <h1 className="text-white text-lg font-medium m-0">
      Welcome to FundSpoke Dashboard! Hi, {userName}
    </h1>
  );
};