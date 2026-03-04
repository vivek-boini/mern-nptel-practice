import type { StateCreator } from 'zustand';

// Notification slice manages app notifications
export interface Notification {
  id: string;
  message: string;
  read: boolean;
}

export interface NotificationSlice {
  notifications: Notification[];
  addNotification: (message: string) => void;
  markAsRead: (id: string) => void;
  clearNotifications: () => void;
  getUnreadCount: () => number;
}

// Factory function to create notification slice
export const createNotificationSlice: StateCreator<NotificationSlice> = (set, get) => ({
  notifications: [],
  
  // Add a new notification (unread by default)
  addNotification: (message) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        {
          id: Date.now().toString(),
          message,
          read: false,
        },
      ],
    })),
  
  // Mark a notification as read
  markAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      ),
    })),
  
  // Clear all notifications
  clearNotifications: () => set({ notifications: [] }),
  
  // Get count of unread notifications
  getUnreadCount: () =>
    get().notifications.filter((n) => !n.read).length,
});