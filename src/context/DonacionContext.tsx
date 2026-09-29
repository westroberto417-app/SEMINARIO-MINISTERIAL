import React, { createContext, useContext, useState, useEffect } from 'react';
import { DonacionData, getDonacionData, saveDonacionData, resetDonacionData as resetData } from '../data/donacionConfig';

interface DonacionContextType {
  isOpen: boolean;
  openDonacion: () => void;
  closeDonacion: () => void;
  donacionData: DonacionData;
  updateData: (updates: Partial<DonacionData>) => void;
  resetData: () => void;
}

const DonacionContext = createContext<DonacionContextType | undefined>(undefined);

export function DonacionProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [donacionData, setDonacionData] = useState<DonacionData>(getDonacionData);

  useEffect(() => {
    setDonacionData(getDonacionData());
  }, []);

  const openDonacion = () => setIsOpen(true);
  const closeDonacion = () => setIsOpen(false);

  const updateData = (updates: Partial<DonacionData>) => {
    const updated = saveDonacionData(updates);
    setDonacionData(updated);
  };

  const handleResetData = () => {
    const def = resetData();
    setDonacionData(def);
  };

  return (
    <DonacionContext.Provider
      value={{
        isOpen,
        openDonacion,
        closeDonacion,
        donacionData,
        updateData,
        resetData: handleResetData,
      }}
    >
      {children}
    </DonacionContext.Provider>
  );
}

export function useDonacion() {
  const context = useContext(DonacionContext);
  if (!context) {
    throw new Error('useDonacion must be used within a DonacionProvider');
  }
  return context;
}
