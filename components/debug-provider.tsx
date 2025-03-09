"use client";

import { useEffect } from 'react';
import { setupErrorLogging } from '@/utils/debug';

export default function DebugProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    setupErrorLogging();
  }, []);

  return <>{children}</>;
}
