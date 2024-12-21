import React from 'react';
import { ContactForm } from './ContactForm';

export const KeyContacts: React.FC = () => {
  return (
    <div className="space-y-8">
      <ContactForm namePrefix={['primaryContact']} title="Primary Contact" required={true} />
      <ContactForm namePrefix={['secondaryContact']} title="Secondary Contact" required={false} />
    </div>
  );
};