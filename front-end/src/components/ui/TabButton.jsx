import React from 'react';

const TabButton = React.memo(({ tab, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`relative px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium transition-all ${
      isActive
        ? 'text-[#3b82f6]'
        : 'text-gray-600 hover:text-[#3b82f6]'
    }`}
  >
    {tab.title}
    {isActive && (
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3b82f6]"></div>
    )}
  </button>
));

TabButton.displayName = 'TabButton';

export default TabButton;
