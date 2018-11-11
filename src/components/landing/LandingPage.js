import LandingContent from './LandingContent';
import LandingHeader from './LandingHeader';
import PageLayout from 'components/ui/PageLayout';
import React from 'react';

function LandingPage() {
  return <PageLayout header={<LandingHeader />} content={<LandingContent />} />;
}

export default LandingPage;
