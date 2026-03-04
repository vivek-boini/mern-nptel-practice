import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export interface HistoryEntry {
  noteId: string;
  action: string;
  timestamp: number;
}

export interface Collaborator {
  id: string;
  name: string;
  status: string;
}

interface SessionState {
  userId: string | null;
  token: string | null;
  expiresAt: number | null;
  role: 'admin' | 'user';
  history: HistoryEntry[];
  collaborators: Collaborator[];
  setSession: (userId: string, token: string, expiresAt: number) => void;
  clearSession: () => void;
  addHistoryEntry: (entry: Omit<HistoryEntry, 'timestamp'>) => void;
  clearHistory: () => void;
  setCollaborators: (collaborators: Collaborator[]) => void;
}

export const useSessionStore = create<SessionState>()(
  devtools(
    persist(
      immer((set: any) => ({
        userId: null,
        token: null,
        expiresAt: null,
        role: 'user',
        history: [],
        collaborators: [],
        setSession: (userId: string, token: string, expiresAt: number) =>
          set((state: SessionState) => {
            state.userId = userId;
            state.token = token;
            state.expiresAt = expiresAt;
          }),
        clearSession: () =>
          set((state: SessionState) => {
            state.userId = null;
            state.token = null;
            state.expiresAt = null;
          }),
        addHistoryEntry: (entry: Omit<HistoryEntry, 'timestamp'>) =>
          set((state: SessionState) => {
            state.history.push({
              ...entry,
              timestamp: Date.now(),
            });
          }),
        clearHistory: () =>
          set((state: SessionState) => {
            state.history = [];
          }),
        setCollaborators: (collaborators: Collaborator[]) =>
          set((state: SessionState) => {
            state.collaborators = collaborators;
          }),
      })),
      {
        name: 'collabnotes-session',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          userId: state.userId,
          token: state.token,
          role: state.role,
        }),
        version: 2,
        migrate: (persistedState: unknown, version: number) => {
          if (version < 2) {
            return { ...(persistedState as object), role: 'user' };
          }
          return persistedState as SessionState;
        },
      }
    )
  )
);