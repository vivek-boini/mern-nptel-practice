import { useSessionStore } from '../store/sessionStore';

function SessionInfo() {
  const userId = useSessionStore((state) => state.userId);
  const token = useSessionStore((state) => state.token);
  const role = useSessionStore((state) => state.role);
  const history = useSessionStore((state) => state.history);
  const setSession = useSessionStore((state) => state.setSession);
  const clearSession = useSessionStore((state) => state.clearSession);
  const clearHistory = useSessionStore((state) => state.clearHistory);

  const handleLogin = () => {
    setSession('user123', 'token-abc-xyz', Date.now() + 3600000);
  };

  return (
    <div>
      <h3>Session (Persisted with Migration)</h3>
      {!userId ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <div>
          <p>User ID: {userId}</p>
          <p>Token: {token}</p>
          <p>Role: {role}</p>
          <button onClick={clearSession}>Logout</button>
        </div>
      )}
      
      <h4>History Log</h4>
      <button onClick={clearHistory}>Clear History</button>
      <ul>
        {history.map((entry, idx) => (
          <li key={idx}>
            Note {entry.noteId} - {entry.action} at {new Date(entry.timestamp).toLocaleTimeString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SessionInfo;