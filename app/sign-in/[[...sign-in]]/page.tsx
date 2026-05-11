import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:flex-col lg:justify-center lg:p-12 bg-(--accent-primary)">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold text-(--text-primary) mb-3">Ghost AI</h1>
          <p className="text-(--text-muted) mb-6 text-lg">
            AI-powered code generation and editing
          </p>
          <ul className="space-y-4 text-sm text-(--text-muted)">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Intelligent code completion
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Context-aware suggestions
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Seamless refactoring
            </li>
          </ul>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="flex items-center justify-center p-8 bg-(--bg-base)">
        <div className="w-full max-w-md">
          <SignIn />
        </div>
      </div>
    </div>
  );
}