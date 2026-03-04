// Lazy-loaded route — only fetched when user navigates to /forum
function Forum() {
  const posts = [
    { id: 1, user: "alice", title: "Tips for staying focused during online lectures" },
    { id: 2, user: "bob", title: "Best resources for learning algorithms" },
    { id: 3, user: "carol", title: "How to get the most out of peer discussions" },
  ];

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>Discussion Forum</h2>
      <p style={styles.note}>
        [This route was lazy-loaded — Forum bundle fetched on navigation]
      </p>
      {posts.map((p) => (
        <div key={p.id} style={styles.post}>
          <p style={styles.postTitle}>{p.title}</p>
          <p style={styles.postUser}>by {p.user}</p>
        </div>
      ))}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { padding: 24 },
  heading: { fontSize: 22, color: "#1e293b", marginBottom: 6 },
  note: { fontSize: 11, color: "#94a3b8", fontStyle: "italic", marginBottom: 20 },
  post: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 6,
    padding: "14px 18px",
    marginBottom: 10,
    maxWidth: 560,
  },
  postTitle: { margin: 0, fontSize: 15, color: "#1e293b" },
  postUser: { margin: "4px 0 0", fontSize: 12, color: "#94a3b8" },
};

export default Forum;