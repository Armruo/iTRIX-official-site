"use client";

/**
 * Debug utility for tracking errors in the application
 * This will help us identify where errors are occurring
 */

// Global error handler that logs to console
export const setupErrorLogging = () => {
  if (typeof window !== 'undefined') {
    const originalConsoleError = console.error;
    console.error = function(...args) {
      // Log original error
      originalConsoleError.apply(console, args);
      
      // Add additional debug information
      const error = args[0];
      if (error instanceof Error) {
        console.log('Debug info - Error:', {
          name: error.name,
          message: error.message,
          stack: error.stack,
          time: new Date().toISOString()
        });
      }
    };

    // Add window error handler
    window.addEventListener('error', (event) => {
      console.log('Debug info - Window error:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error,
        time: new Date().toISOString()
      });
    });

    // Add unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      console.log('Debug info - Unhandled promise rejection:', {
        reason: event.reason,
        time: new Date().toISOString()
      });
    });

    console.log('Debug logging initialized');
  }
};
