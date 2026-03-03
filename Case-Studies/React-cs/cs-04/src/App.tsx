import NotificationList from './components/NotificationList'  
import './App.css'
import NotificationPanel from './components/NotificationPanel'

function App() {
  return (
    <div className="container">
      <NotificationPanel />
      <NotificationList />
    </div>
  )
}

export default App
