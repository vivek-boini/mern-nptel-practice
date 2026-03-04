import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export interface Note {
  id: string;
  text: string;
  createdAt: number;
}

interface NoteState {
  notes: Note[];
  setNotes: (notes: Note[]) => void;
  addNote: (note: Note) => void;
  updateNote: (id: string, text: string) => void;
  deleteNote: (id: string) => void;
}

// Simple logging wrapper
const logMiddleware = (config: any) => (set: any, get: any, api: any) =>
  config(
    (...args: any[]) => {
      console.log('Before:', get());
      set(...args);
      console.log('After:', get());
    },
    get,
    api
  );

export const useNoteStore = create<NoteState>()(
  devtools(
    immer(
      logMiddleware((set: any) => ({
        notes: [],
        setNotes: (notes: Note[]) =>
          set((state: NoteState) => {
            state.notes = notes;
          }),
        addNote: (note: Note) =>
          set((state: NoteState) => {
            state.notes.push(note);
          }),
        updateNote: (id: string, text: string) =>
          set((state: NoteState) => {
            const note = state.notes.find((n) => n.id === id);
            if (note) note.text = text;
          }),
        deleteNote: (id: string) =>
          set((state: NoteState) => {
            state.notes = state.notes.filter((n) => n.id !== id);
          }),
      }))
    )
  )
);