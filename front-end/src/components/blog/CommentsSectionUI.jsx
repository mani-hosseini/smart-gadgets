import React from "react";
import CommentItemUI from "./CommentItemUI";
import CommentFormUI from "./CommentFormUI";

const CommentsSectionUI = () => {
  return (
    <div className="bg-[#f7f7f7] rounded-xl md:p-8 p-2">
      <div className="space-y-8">
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800 text-right">
            یک پاسخ
          </h3>
          <div className="space-y-4">
            <CommentItemUI />
          </div>
        </div>
        <CommentFormUI />
      </div>
    </div>
  );
};

export default CommentsSectionUI;
