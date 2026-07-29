'use client';

import React, { useState } from 'react';
import {
  Breadcrumb,
  SettingsHeader,
  SearchSettings,
  QuickSettings,
  SettingsSidebar,
  SettingsMobileMenu,
  DynamicContent,
  MobileBar,
} from './Components';

export default function SettingsHubPage() {
  const [activeSection, setActiveSection] = useState<string>('profile');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-6 lg:p-8 relative overflow-hidden pb-24 lg:pb-8">
      {/* 🌟 Glows Ambientais ePay */}
      <div className="absolute -top-24 -right-20 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-10 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto space-y-4 relative z-10">
        
        {/* Breadcrumb */}
        <Breadcrumb activeSection={activeSection} />

        {/* Settings Header */}
        <SettingsHeader />

        {/* Search Bar */}
        <SearchSettings searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {/* Quick Settings Bar */}
        <QuickSettings onSelectSection={(section) => setActiveSection(section)} />

        {/* Mobile Navigation Dropdown */}
        <SettingsMobileMenu
          activeSection={activeSection}
          onSelectSection={(section) => setActiveSection(section)}
        />

        {/* Desktop Layout (Sidebar + Content) */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Sidebar (Desktop Only) */}
          <SettingsSidebar
            activeSection={activeSection}
            onSelectSection={(section) => setActiveSection(section)}
          />

          {/* Dynamic Content Area */}
          <main className="flex-1 w-full min-w-0">
            <DynamicContent activeSection={activeSection} />
          </main>
        </div>
      </div>

      {/* Navigation MobileBar */}
      <MobileBar />
    </div>
  );
}