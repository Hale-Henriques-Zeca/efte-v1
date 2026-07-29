'use client';

import React from 'react';

// Subpáginas de Settings
import ProfilePage from '../profile/page';
import BlockchainIdentityPage from '../blockchain-identity/page';
import DatabaseKYCPage from '../database-kyc/page';
import WalletsPage from '../wallets/page';
import SecurityPage from '../security/page';
import NotificationsPage from '../notifications/page';
import PreferencesPage from '../preferences/page';
import APIPage from '../api/page';
import SupportPage from '../support/page';
import AboutPage from '../about/page';
import DangerZonePage from '../danger-zone/page';

interface DynamicContentProps {
  activeSection: string;
}

export const DynamicContent: React.FC<DynamicContentProps> = ({ activeSection }) => {
  switch (activeSection) {
    case 'profile':
      return <ProfilePage />;
    case 'blockchain-identity':
      return <BlockchainIdentityPage />;
    case 'database-kyc':
      return <DatabaseKYCPage />;
    case 'wallets':
      return <WalletsPage />;
    case 'security':
      return <SecurityPage />;
    case 'notifications':
      return <NotificationsPage />;
    case 'preferences':
      return <PreferencesPage />;
    case 'api':
      return <APIPage />;
    case 'support':
      return <SupportPage />;
    case 'about':
      return <AboutPage />;
    case 'danger-zone':
      return <DangerZonePage />;
    default:
      return <ProfilePage />;
  }
};

export default DynamicContent;