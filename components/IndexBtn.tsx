"use client";

import React from 'react';
import { primaryColor } from '@/utils/css';

interface IndexBtnProps {
  children: React.ReactNode;
  onClick?: () => void;
  height?: string;
  fontSize?: string;
  size?: 'small' | undefined;
}

const IndexBtn: React.FC<IndexBtnProps> = ({
  children,
  onClick,
  height = '52px',
  fontSize = '20px',
  size,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        height,
        fontSize,
        padding: '0 24px',
        background: primaryColor,
        borderRadius: '26px',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.opacity = '0.9';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.opacity = '1';
      }}
    >
      {children}
    </button>
  );
};

export default IndexBtn;
