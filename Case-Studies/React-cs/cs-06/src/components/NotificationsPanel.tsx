import { useDesignHubStore } from '../store';

function NotificationsPanel() {
  // Subscribe to notifications state
  const notifications = useDesignHubStore((state) => state.notifications);
  const markAsRead = useDesignHubStore((state) => state.markAsRead);
  const clearNotifications = useDesignHubStore((state) => state.clearNotifications);
  const getUnreadCount = useDesignHubStore((state) => state.getUnreadCount);

  const unreadCount = getUnreadCount();

  return (
    <div className="notifications-panel">
      <div className="notifications-header">
        <h3>Notifications ({unreadCount} unread)</h3>
        <button onClick={clearNotifications}>Clear All</button>
      </div>
      
      <ul>
        {notifications.map((notification) => (
          <li 
            key={notification.id} 
            className={notification.read ? 'read' : 'unread'}
          >
            <span>{notification.message}</span>
            {!notification.read && (
              <button onClick={() => markAsRead(notification.id)}>
                Mark as Read
              </button>
            )}
          </li>
        ))}
      </ul>
      
      {notifications.length === 0 && <p>No notifications</p>}
    </div>
  );
}

export default NotificationsPanel;