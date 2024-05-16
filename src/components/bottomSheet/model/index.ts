import React from 'react';

export type DataBottomSheet = {
  title: string;
  content: React.ReactNode;
};

export type BottomSheetRef = {
  show: (data: DataBottomSheet) => void;
  close: () => void;
};
