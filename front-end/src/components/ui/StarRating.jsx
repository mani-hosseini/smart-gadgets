import React from 'react';

const StarRating = React.memo(({ rating, onRatingChange }) => (
  <div className="flex gap-1 justify-start">
    {[1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        type="button"
        onClick={() => onRatingChange(star)}
        className={`text-2xl transition-colors ${
          star <= rating ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
        }`}
      >
        {star <= rating ? '★' : '☆'}
      </button>
    ))}
  </div>
));

StarRating.displayName = 'StarRating';

export default StarRating;
