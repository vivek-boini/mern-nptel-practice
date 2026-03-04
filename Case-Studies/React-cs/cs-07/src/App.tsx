import NotesList from './components/NotesList';
import SessionInfo from './components/SessionInfo';
import CollaboratorsList from './components/CollaboratorsList';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>CollabNotes - Challenge Solution</h1>
      <hr />
      <SessionInfo />
      <hr />
      <NotesList />
      <hr />
      <CollaboratorsList />
    </div>
  );
}

export default App;