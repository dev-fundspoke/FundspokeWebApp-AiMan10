import React from 'react';
import { Card } from 'antd';
import { FilterDropdowns } from './FilterDropdowns';
import { QuickSearch } from './QuickSearch';
import type { FiltersProps } from '../../../types/filters';

export const FiltersSection: React.FC<FiltersProps> = (props) => {
  return (
    <section className="px-6 py-8">
      <Card className="shadow-sm">
        <div className="space-y-6">
          <QuickSearch {...props} />
          <FilterDropdowns {...props} />
        </div>
      </Card>
    </section>
  );
};