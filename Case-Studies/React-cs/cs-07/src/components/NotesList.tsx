import { useQuery } from '@tanstack/react-query';
import { useNoteStore } from '../store/noteStore';
import { useSessionStore } from '../store/sessionStore';
import { fetchNotesFromAPI } from '../api/mockApi';
import { useEffect } from 'react';

function NotesList() {
  const notes = useNoteStore((state) => state.notes);
  const setNotes = useNoteStore((state) => state.setNotes);
  const addNote = useNoteStore((state) => state.addNote);
  const updateNote = useNoteStore((state) => state.updateNote);
  const deleteNote = useNoteStore((state) => state.deleteNote);
  const addHistoryEntry = useSessionStore((state) => state.addHistoryEntry);

  const { data, isLoading } = useQuery({
    queryKey: ['notes'],
    queryFn: fetchNotesFromAPI,
  });

  // Sync data to store when available
  useEffect(() => {
    if (data) {
      setNotes(data);
    }
  }, [data, setNotes]);

  const handleAddNote = () => {
    const newNote = {
      id: Date.now().toString(),
      text: 'New note',
      createdAt: Date.now(),
    };
    addNote(newNote);
    addHistoryEntry({ noteId: newNote.id, action: 'added' });
  };

  const handleUpdateNote = (id: string) => {
    updateNote(id, 'Updated text');
    addHistoryEntry({ noteId: id, action: 'updated' });
  };

  const handleDeleteNote = (id: string) => {
    deleteNote(id);
    addHistoryEntry({ noteId: id, action: 'deleted' });
  };

  if (isLoading) return <div>Loading notes...</div>;

  return (
    <div>
      <h3>Notes (Devtools + Immer + Logging)</h3>
      <button onClick={handleAddNote}>Add Note</button>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.text}
            <button onClick={() => handleUpdateNote(note.id)}>Update</button>
            <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesList;