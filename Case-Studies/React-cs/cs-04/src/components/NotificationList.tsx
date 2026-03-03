import useNotificationStore from "../store/notificationStore";

const NotificationList: React.FC = () => {
  const notifications = useNotificationStore((s) => s.notifications);
  const markAsRead = useNotificationStore((s) => s.markAsRead);

  const unread = notifications.filter((n) => !n.read);

  return (
    <div>
      <h2>Unread Notifications</h2>

      {unread.length === 0 && <p>No unread notifications</p>}

      <ul>
        {unread.map((n) => (
          <li key={n.id}>
            {n.message} ({n.type})
            <button onClick={() => markAsRead(n.id)}>
              Mark as Read
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;