import type { Note } from '../store/noteStore';
import type { Collaborator } from '../store/sessionStore';

export const fetchNotesFromAPI = async (): Promise<Note[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  return [
    { id: '1', text: 'First note from API', createdAt: Date.now() - 10000 },
    { id: '2', text: 'Second note from API', createdAt: Date.now() - 5000 },
  ];
};

export const fetchCollaboratorsFromAPI = async (): Promise<Collaborator[]> => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  return [
    { id: '1', name: 'Alice', status: 'online' },
    { id: '2', name: 'Bob', status: 'away' },
    { id: '3', name: 'Charlie', status: 'offline' },
  ];
};