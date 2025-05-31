
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GameContextType {
  // Simple tracking without gamification
  visitedPages: Set<string>;
  markPageVisited: (page: string) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [visitedPages, setVisitedPages] = useState<Set<string>>(new Set());

  const markPageVisited = (page: string) => {
    setVisitedPages(prev => new Set([...prev, page]));
  };

  return (
    <GameContext.Provider value={{
      visitedPages,
      markPageVisited,
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
