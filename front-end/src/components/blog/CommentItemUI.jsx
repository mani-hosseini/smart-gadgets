import React from 'react';

const CommentItemUI = () => {
  return (
    <div className="flex gap-4 p-4 bg-white rounded-lg">
      <div className="flex-shrink-0">

      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-medium text-gray-800">designer</span>
          <span className="text-gray-500">گفت:</span>
        </div>
        
        <div className="text-gray-700 leading-relaxed mb-3 whitespace-pre-line">
          تست
          پاسخ
        </div>
      </div>
              
      <div className="text-xs text-blue-500 ">
          اسفند ۲۸, ۱۴۰۳ در ۱۱:۰۴
        </div>
    </div>
  );
};

export default CommentItemUI; 