import React from "react";

const ErrorBoundary: any = class extends (React.Component as any) {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-50 p-6 text-zinc-900">
          <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-zinc-100 text-center space-y-6">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-3xl">error</span>
            </div>
            <h2 className="text-2xl font-bold">Application Error</h2>
            <p className="text-zinc-600 leading-relaxed">
              Something went wrong. Please reload the page or contact hello@aiagenticverse.com.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="w-full py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all"
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
