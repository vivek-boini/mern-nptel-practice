import type { StateCreator } from 'zustand';

// File slice manages design files
export interface File {
  id: string;
  name: string;
  content: string;
}

export interface FileSlice {
  files: File[];
  addFile: (file: File) => void;
  deleteFile: (id: string) => void;
}

// Factory function to create file slice
export const createFileSlice: StateCreator<FileSlice> = (set) => ({
  files: [],
  
  // Add a new file to the list
  addFile: (file) => 
    set((state) => ({ 
      files: [...state.files, file] 
    })),
  
  // Delete a file by id
  deleteFile: (id) =>
    set((state) => ({
      files: state.files.filter((f) => f.id !== id),
    })),
});