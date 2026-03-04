import { useDesignHubStore } from '../store';

function UserProfile() {
  // Subscribe only to user state
  const user = useDesignHubStore((state) => state.user);
  const setUser = useDesignHubStore((state) => state.setUser);
  const clearUser = useDesignHubStore((state) => state.clearUser);

  if (!user) {
    return (
      <div className="user-profile">
        <button onClick={() => setUser({ id: 'u1', name: 'Alex Morgan' })}>
          Login as Alex
        </button>
      </div>
    );
  }

  return (
    <div className="user-profile">
      <span>Welcome, {user.name}</span>
      <button onClick={clearUser}>Logout</button>
    </div>
  );
}

export default UserProfile;