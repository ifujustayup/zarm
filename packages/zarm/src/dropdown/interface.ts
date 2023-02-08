import * as React from 'react';

export interface BaseDropdownProps {
  activeKey?: number | string;
  defaultActiveKey?: number | string;
  onChange?: (activeKey: number | string) => void;
  arrow?: React.ReactNode;
}

export interface BaseDropdownItemProps {
  itemKey?: string | number;
  title?: React.ReactNode;
  arrow?: React.ReactNode;
  children?: React.ReactNode;
  active?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}