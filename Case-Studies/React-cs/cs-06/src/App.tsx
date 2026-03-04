import './App.css';
import UserProfile from './components/UserProfile';
import FileList from './components/FileList';
import NotificationsPanel from './components/NotificationsPanel';

function App() {
  return (
    <div className="app">
      <header>
        <h1>DesignHub - Collaborative Design Platform</h1>
        <UserProfile />
      </header>

      <div className="main-content">
        <aside className="sidebar">
          <FileList />
        </aside>

        <main className="content">
          <div className="placeholder">
            <h2>Welcome to DesignHub</h2>
            <p>Create design files and watch notifications appear</p>
          </div>
        </main>

        <aside className="notifications">
          <NotificationsPanel />
        </aside>
      </div>
    </div>
  );
}

export default App;