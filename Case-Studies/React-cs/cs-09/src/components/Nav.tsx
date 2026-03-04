import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav style={styles.nav}>
      <span style={styles.brand}>EduStream</span>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/forum" style={styles.link}>Forum</Link>
        <Link to="/admin" style={styles.link}>Admin</Link>
      </div>
    </nav>
  );
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 24px",
    background: "#1e293b",
    color: "#f8fafc",
  },
  brand: { fontWeight: 700, fontSize: 18, letterSpacing: 1 },
  links: { display: "flex", gap: 20 },
  link: { color: "#94a3b8", textDecoration: "none", fontSize: 14 },
};

export default Nav;