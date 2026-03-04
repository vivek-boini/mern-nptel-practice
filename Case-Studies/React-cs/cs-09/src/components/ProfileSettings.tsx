// This component is lazy-loaded — it won't be in the initial bundle
function ProfileSettings() {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Profile Settings</h3>
      <label style={styles.label}>Display Name</label>
      <input style={styles.input} defaultValue="Student123" />
      <label style={styles.label}>Email</label>
      <input style={styles.input} defaultValue="student@edustream.com" />
      <button style={styles.saveBtn}>Save Changes</button>
      <p style={styles.note}>
        [This component was lazy-loaded on button click]
      </p>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    background: "#f1f5f9",
    border: "1px solid #e2e8f0",
    borderRadius: 8,
    padding: 24,
    marginTop: 16,
    maxWidth: 400,
  },
  title: { margin: "0 0 16px", fontSize: 17, color: "#1e293b" },
  label: { display: "block", fontSize: 12, color: "#64748b", marginBottom: 4 },
  input: {
    width: "100%",
    padding: "7px 10px",
    marginBottom: 12,
    border: "1px solid #cbd5e1",
    borderRadius: 4,
    fontSize: 14,
    boxSizing: "border-box",
  },
  saveBtn: {
    background: "#0f172a",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    padding: "8px 18px",
    cursor: "pointer",
    fontSize: 14,
  },
  note: { marginTop: 14, fontSize: 11, color: "#94a3b8", fontStyle: "italic" },
};

export default ProfileSettings;