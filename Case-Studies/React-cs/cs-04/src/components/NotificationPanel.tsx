import { useState } from "react";
import useNotificationStore from "../store/notificationStore";

const NotificationPanel: React.FC = () => {
  const [message, setMessage] = useState("");

  const addNotification = useNotificationStore(
    (state) => state.addNotification
  );

  const clearNotifications = useNotificationStore(
    (state) => state.clearNotifications
  );

  return (
    <div>
      <h2>Add Notification</h2>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter message"
      />

      <button
        onClick={() => {
          if (!message.trim()) return;
          addNotification(message, "info");
          setMessage("");
        }}
      >
        Add
      </button>

      <button onClick={clearNotifications}>
        Clear All
      </button>
    </div>
  );
};

export default NotificationPanel;