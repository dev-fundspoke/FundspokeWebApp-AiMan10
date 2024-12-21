import React from 'react';
import { Form, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { ProjectionEntry } from './components/ProjectionEntry';
import { GlowingText } from '../../../../common/GlowingText';
import { useProjections } from './hooks/useProjections';
import { darkTheme } from '../../../../../styles/themes/dark';

export const ProjectionsForm: React.FC = () => {
  const form = Form.useFormInstance();
  const { projectionIds, addProjection, removeProjection } = useProjections(form);

  return (
    <div className="space-y-8">
      <GlowingText 
        className="text-lg font-medium"
        color={darkTheme.colors.accent.primary}
      >
        Future Revenue Projections
      </GlowingText>

      {projectionIds.map((id, index) => (
        <ProjectionEntry
          key={id}
          index={index}
          onDelete={() => removeProjection(index)}
          isLastEntry={projectionIds.length === 1}
        />
      ))}

      <div className="flex justify-center">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={addProjection}
          size="large"
          style={{
            background: darkTheme.colors.accent.primary,
            borderColor: darkTheme.colors.accent.primary,
            minWidth: '200px',
            height: '44px',
          }}
          className="hover:scale-105 transition-transform duration-300"
        >
          Add Another Projection
        </Button>
      </div>
    </div>
  );
};