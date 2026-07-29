'use client';

import React from 'react';

interface DynamicContentProps {
  children?: React.ReactNode;
}

export const DynamicContent: React.FC<DynamicContentProps> = ({ children }) => {
  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-6 overflow-y-auto">
      {children}
    </main>
  );
};

export default DynamicContent;