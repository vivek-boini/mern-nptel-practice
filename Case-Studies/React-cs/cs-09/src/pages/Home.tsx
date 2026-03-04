import { Suspense, lazy, useState } from "react";
import ErrorBoundary from "../components/ErrorBoundary";

// React.lazy wraps dynamic import — ProfileSettings only loads when rendered
const ProfileSettings = lazy(() => import("../components/ProfileSettings"));

function Home() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>Welcome to EduStream</h2>
      <p style={styles.sub}>Your personalized learning dashboard.</p>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Account</h3>
        <p style={styles.desc}>
          Click below to load and open Profile Settings.
          The component code is fetched only on demand.
        </p>
        <button
          style={styles.btn}
          onClick={() => setShowSettings((prev) => !prev)}
        >
          {showSettings ? "Hide Settings" : "Settings"}
        </button>

        {/* ErrorBoundary catches lazy load failures; Suspense shows fallback */}
        {showSettings && (
          <ErrorBoundary>
            <Suspense fallback={<div style={styles.loading}>Loading settings...</div>}>
              <ProfileSettings />
            </Suspense>
          </ErrorBoundary>
        )}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { padding: 24 },
  heading: { fontSize: 22, color: "#1e293b", marginBottom: 4 },
  sub: { color: "#64748b", marginBottom: 24, fontSize: 14 },
  section: {
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: 8,
    padding: 20,
    maxWidth: 480,
  },
  sectionTitle: { margin: "0 0 8px", fontSize: 16, color: "#334155" },
  desc: { fontSize: 13, color: "#64748b", marginBottom: 14 },
  btn: {
    background: "#0f172a",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    padding: "8px 18px",
    cursor: "pointer",
    fontSize: 14,
  },
  loading: { padding: 16, color: "#94a3b8", fontSize: 14 },
};

export default Home;