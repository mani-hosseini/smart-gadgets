import { useState, useCallback, useEffect, useRef } from 'react';

export const useSearch = (initialQuery = '', debounceMs = 300) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchHistory, setSearchHistory] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debounceRef = useRef(null);

  const updateSearch = useCallback((query) => {
    setSearchQuery(query);
    
    // Clear previous debounce
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    // Set new debounce
    debounceRef.current = setTimeout(() => {
      if (query.trim()) {
        setIsSearching(true);
        // Simulate search delay
        setTimeout(() => setIsSearching(false), 500);
        
        // Add to history if not empty and not duplicate
        setSearchHistory(prev => {
          const filtered = prev.filter(item => item !== query);
          return [query, ...filtered].slice(0, 10); // Keep last 10 searches
        });
      }
    }, debounceMs);
  }, [debounceMs]);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
    setIsSearching(false);
  }, []);

  const removeFromHistory = useCallback((queryToRemove) => {
    setSearchHistory(prev => prev.filter(item => item !== queryToRemove));
  }, []);

  const clearHistory = useCallback(() => {
    setSearchHistory([]);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  return {
    searchQuery,
    searchHistory,
    isSearching,
    updateSearch,
    clearSearch,
    removeFromHistory,
    clearHistory,
  };
};
