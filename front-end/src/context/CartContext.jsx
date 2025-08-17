import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

// Get current user ID from localStorage
const getCurrentUserId = () => {
  try {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).id : null;
  } catch (error) {
    return null;
  }
};

// Load cart from localStorage for specific user
const loadCartFromStorage = (userId) => {
  try {
    if (!userId) return { items: [] };
    const savedCart = localStorage.getItem(`smartGadgetsCart_${userId}`);
    return savedCart ? JSON.parse(savedCart) : { items: [] };
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
    return { items: [] };
  }
};

// Save cart to localStorage for specific user
const saveCartToStorage = (userId, cartData) => {
  try {
    if (userId) {
      localStorage.setItem(`smartGadgetsCart_${userId}`, JSON.stringify(cartData));
    }
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

// Clear all user carts (for logout)
const clearAllUserCarts = () => {
  try {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith('smartGadgetsCart_')) {
        localStorage.removeItem(key);
      }
    });
  } catch (error) {
    console.error('Error clearing user carts:', error);
  }
};

const cartReducer = (state, action) => {
  let newState;
  
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.items.findIndex(
        item => 
          item.product.id === action.payload.product.id && 
          item.selectedColor === action.payload.selectedColor && 
          item.selectedWarranty === action.payload.selectedWarranty
      );

      if (existingItemIndex > -1) {
        // Update quantity if item already exists
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
        newState = { ...state, items: updatedItems };
      } else {
        // Add new item
        newState = {
          ...state,
          items: [...state.items, action.payload]
        };
      }
      break;

    case 'REMOVE_FROM_CART':
      newState = {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload)
      };
      break;

    case 'UPDATE_QUANTITY':
      const updatedItems = state.items.map((item, index) => {
        if (index === action.payload.index) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
      newState = { ...state, items: updatedItems };
      break;

    case 'CLEAR_CART':
      newState = { ...state, items: [] };
      break;

    case 'SYNC_CART':
      newState = { ...state, ...action.payload };
      break;

    case 'SWITCH_USER':
      newState = { ...state, items: action.payload.items || [] };
      break;

    default:
      return state;
  }

  // Save to localStorage after every state change
  const currentUserId = getCurrentUserId();
  saveCartToStorage(currentUserId, newState);

  return newState;
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Load cart when component mounts or user changes
  useEffect(() => {
    const currentUserId = getCurrentUserId();
    const savedCart = loadCartFromStorage(currentUserId);
    
    if (savedCart.items.length !== state.items.length) {
      dispatch({ type: 'SWITCH_USER', payload: savedCart });
    }
  }, []);

  // Listen for storage changes (when user logs in/out in another tab)
  useEffect(() => {
    const handleStorageChange = () => {
      const currentUserId = getCurrentUserId();
      const savedCart = loadCartFromStorage(currentUserId);
      
      if (savedCart.items.length !== state.items.length) {
        dispatch({ type: 'SWITCH_USER', payload: savedCart });
      }
    };

    // Listen for user login event
    const handleUserLogin = (event) => {
      const userId = event.detail.userId;
      const savedCart = loadCartFromStorage(userId);
      dispatch({ type: 'SWITCH_USER', payload: savedCart });
    };

    // Listen for user logout event
    const handleUserLogout = () => {
      dispatch({ type: 'CLEAR_CART' });
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('userLogin', handleUserLogin);
    window.addEventListener('userLogout', handleUserLogout);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('userLogin', handleUserLogin);
      window.removeEventListener('userLogout', handleUserLogout);
    };
  }, [state.items.length]);

  const addToCart = (product, selectedColor, selectedWarranty, quantity, finalPrice) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        product,
        selectedColor,
        selectedWarranty,
        quantity,
        finalPrice
      }
    });
  };

  const removeFromCart = (index) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: index
    });
  };

  const updateQuantity = (index, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { index, quantity: Math.max(1, quantity) }
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const clearAllCarts = () => {
    clearAllUserCarts();
    dispatch({ type: 'CLEAR_CART' });
  };

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + (item.finalPrice * item.quantity), 0);
  };

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    items: state.items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    clearAllCarts,
    getTotalPrice,
    getTotalItems
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
