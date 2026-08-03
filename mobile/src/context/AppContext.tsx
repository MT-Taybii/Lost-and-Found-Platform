import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LostItem, FoundItem } from '../models/Item';

interface AppContextType {
  lostItems: LostItem[];
  foundItems: FoundItem[];
  addLostItem: (item: LostItem) => void;
  addFoundItem: (item: FoundItem) => void;
  findMatches: () => Array<{ lost: LostItem; found: FoundItem }>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lostItems, setLostItems] = useState<LostItem[]>([]);
  const [foundItems, setFoundItems] = useState<FoundItem[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const lostData = await AsyncStorage.getItem('lostItems');
      const foundData = await AsyncStorage.getItem('foundItems');
      
      if (lostData) setLostItems(JSON.parse(lostData));
      if (foundData) setFoundItems(JSON.parse(foundData));
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const addLostItem = async (item: LostItem) => {
    const updated = [...lostItems, item];
    setLostItems(updated);
    await AsyncStorage.setItem('lostItems', JSON.stringify(updated));
  };

  const addFoundItem = async (item: FoundItem) => {
    const updated = [...foundItems, item];
    setFoundItems(updated);
    await AsyncStorage.setItem('foundItems', JSON.stringify(updated));
  };

  const findMatches = () => {
    const matches: Array<{ lost: LostItem; found: FoundItem }> = [];
    
    lostItems.forEach(lost => {
      foundItems.forEach(found => {
        if (lost.itemName.toLowerCase() === found.itemName.toLowerCase()) {
          matches.push({ lost, found });
        }
      });
    });
    
    return matches;
  };

  return (
    <AppContext.Provider value={{ lostItems, foundItems, addLostItem, addFoundItem, findMatches }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
