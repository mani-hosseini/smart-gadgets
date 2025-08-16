import React from 'react';
import TabButton from '../../ui/TabButton';

const TabNavigation = React.memo(({ tabs, activeTab, onTabChange }) => (
  <div className="w-full bg-[#f6f5ff] rounded-tr-2xl rounded-tl-2xl p-3 sm:p-4 mb-0">
    <div className="flex justify-start gap-2 sm:gap-4 lg:gap-6">
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          tab={tab}
          isActive={activeTab === tab.id}
          onClick={() => onTabChange(tab.id)}
        />
      ))}
    </div>
  </div>
));

TabNavigation.displayName = 'TabNavigation';

export default TabNavigation;
