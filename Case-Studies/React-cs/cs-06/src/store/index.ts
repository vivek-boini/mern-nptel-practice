import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createUserSlice, type UserSlice } from './slices/userSlice';
import { createFileSlice, type FileSlice } from './slices/fileSlice';
import { createNotificationSlice, type NotificationSlice } from './slices/notificationSlice';

// Combine all slice types into one store type
type DesignHubStore = UserSlice & FileSlice & NotificationSlice;

// Create the main store with middleware
export const useDesignHubStore = create<DesignHubStore>()(
  devtools(
    persist(
      (...a) => ({
        // Spread all slices into the store
        ...createUserSlice(...a),
        ...createFileSlice(...a),
        ...createNotificationSlice(...a),
      }),
      { 
        name: 'designhub-store', // LocalStorage key
      }
    )
  )
);