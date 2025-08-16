import React, { useState, useMemo } from 'react';

// Import separated components
import TabNavigation from './tabs/TabNavigation';
import ProductIntroduction from './tabs/ProductIntroduction';
import SpecificationsSection from './tabs/SpecificationsSection';
import ReviewsSection from './tabs/ReviewsSection';

// Tab content mapping component
const TabContent = React.memo(({ activeTab }) => {
  const tabComponents = useMemo(() => ({
    introduction: <ProductIntroduction />,
    specifications: <SpecificationsSection />,
    reviews: <ReviewsSection />
  }), []);

  return tabComponents[activeTab] || null;
});

TabContent.displayName = 'TabContent';

// Main component
export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState('introduction');

  const tabs = useMemo(() => [
    { id: 'introduction', title: 'معرفی محصول' },
    { id: 'specifications', title: 'مشخصات فنی' },
    { id: 'reviews', title: 'نظرات کاربران' }
  ], []);

  const handleTabChange = useMemo(() => (tabId) => {
    setActiveTab(tabId);
  }, []);

  return (
    <div className="mt-20">
      {/* Tab Navigation */}
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {/* Tab Content */}
      <div className="bg-white rounded-br-2xl rounded-bl-2xl p-4 sm:p-6 border-t-0">
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
}
