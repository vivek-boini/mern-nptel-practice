// This entire page is lazy-loaded — only fetched when /admin is visited
function AdminPanel() {
  const stats = [
    { label: "Total Users", value: "12,480" },
    { label: "Active Courses", value: "340" },
    { label: "Forum Posts", value: "8,921" },
    { label: "Revenue", value: "$48,200" },
  ];

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>Admin Panel</h2>
      <p style={styles.note}>
        [This route was lazy-loaded — AdminPanel bundle fetched on navigation]
      </p>
      <div style={styles.grid}>
        {stats.map((s) => (
          <div key={s.label} style={styles.statCard}>
            <p style={styles.statValue}>{s.value}</p>
            <p style={styles.statLabel}>{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { padding: 24 },
  heading: { fontSize: 22, color: "#1e293b", marginBottom: 6 },
  note: { fontSize: 11, color: "#94a3b8", fontStyle: "italic", marginBottom: 20 },
  grid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, maxWidth: 700 },
  statCard: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 8,
    padding: "18px 16px",
    textAlign: "center",
  },
  statValue: { fontSize: 22, fontWeight: 700, color: "#0f172a", margin: 0 },
  statLabel: { fontSize: 12, color: "#64748b", marginTop: 4 },
};

export default AdminPanel;