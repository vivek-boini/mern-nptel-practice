import { Component } from "react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

// Class component required for error boundaries (no hooks alternative)
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error.message };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.errorBox}>
          <p style={styles.errorTitle}>Failed to load component</p>
          <p style={styles.errorMsg}>{this.state.errorMessage}</p>
          <button
            style={styles.retryBtn}
            onClick={() => this.setState({ hasError: false, errorMessage: "" })}
          >
            Retry
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const styles: Record<string, React.CSSProperties> = {
  errorBox: {
    border: "1px solid #f87171",
    background: "#fef2f2",
    borderRadius: 6,
    padding: 20,
    margin: 12,
    color: "#b91c1c",
  },
  errorTitle: { fontWeight: 700, marginBottom: 6 },
  errorMsg: { fontSize: 13, marginBottom: 10 },
  retryBtn: {
    background: "#b91c1c",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    padding: "6px 14px",
    cursor: "pointer",
  },
};

export default ErrorBoundary;