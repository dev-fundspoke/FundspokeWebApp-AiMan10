import React from 'react';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { ContactForm } from './ContactForm';
import { SciFiCard } from '../../../../common/SciFiCard';

interface TeamMemberEntryProps {
  index: number;
  onDelete: () => void;
}

export const TeamMemberEntry: React.FC<TeamMemberEntryProps> = ({
  index,
  onDelete,
}) => (
  <SciFiCard className="p-6">
    <div className="flex justify-end mb-4">
      <Button
        danger
        type="primary"
        icon={<DeleteOutlined />}
        onClick={onDelete}
        className="hover:scale-105 transition-transform duration-300"
      >
        Remove Team Member
      </Button>
    </div>
    
    <ContactForm
      namePrefix={['keyTeamMembers', String(index)]}
      title={`Team Member ${index + 1}`}
    />
  </SciFiCard>
);