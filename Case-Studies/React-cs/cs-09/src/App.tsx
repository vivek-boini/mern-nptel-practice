import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";

// Route-level lazy loading: each route gets its own bundle
const Forum = lazy(() => import("./pages/Forum"));
const AdminPanel = lazy(() => import("./components/AdminPanel"));

function App() {
  return (
    <Router>
      <Nav />
      {/*
        ErrorBoundary wraps all routes so load failures show a user-friendly error.
        Suspense fallback renders while the lazy bundle is being fetched.
      */}
      <ErrorBoundary>
        <Suspense fallback={<div style={styles.loading}>Loading page...</div>}>
          <Routes>
            {/* Home is NOT lazy — it's the critical first-paint route */}
            <Route path="/" element={<Home />} />
            {/* These routes are lazy — their JS is fetched only on navigation */}
            <Route path="/forum" element={<Forum />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

const styles: Record<string, React.CSSProperties> = {
  loading: {
    padding: 32,
    textAlign: "center",
    color: "#94a3b8",
    fontSize: 15,
  },
};

export default App;