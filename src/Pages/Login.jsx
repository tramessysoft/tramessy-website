import { useState } from "react"
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react"

function GoogleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001 6.19 5.238 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  )
}

function Field({ id, label, icon: Icon, type = "text", placeholder, trailing }) {
  const [show, setShow] = useState(false)
  const isPassword = type === "password"
  const inputType = isPassword ? (show ? "text" : "password") : type

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
        {trailing}
      </div>
      <div className="relative">
        <Icon
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-2"
          aria-hidden="true"
        />
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          className="h-11 w-full rounded-lg border border-card-border bg-input pl-10 pr-10 text-sm text-foreground placeholder:text-muted-2 outline-none transition focus:border-brand-cyan/60 focus:ring-2 focus:ring-ring"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-2 transition-colors hover:text-foreground"
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        )}
      </div>
    </div>
  )
}

export default function Login() {
  const [tab, setTab] = useState("signin")
  const isSignIn = tab === "signin"

  return (
    <div className="w-full max-w-md rounded-2xl border border-card-border bg-card/80 p-8 shadow-2xl shadow-black/40 backdrop-blur-sm">
      {/* Logo + heading */}
      <div className="flex flex-col items-center text-center">
        <span className="brand-gradient flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold text-white">
          T
        </span>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-balance">
          {isSignIn ? "Welcome to Tramessy" : "Create your account"}
        </h1>
        <p className="mt-1.5 text-sm text-muted">
          {isSignIn ? "Sign in or create an account" : "Start your journey with Tramessy"}
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-6 grid grid-cols-2 gap-1 rounded-xl border border-card-border bg-input p-1">
        <button
          onClick={() => setTab("signin")}
          className={`rounded-lg py-2 text-sm font-medium transition-colors ${
            isSignIn ? "bg-surface text-foreground" : "text-muted hover:text-foreground"
          }`}
        >
          Sign in
        </button>
        <button
          onClick={() => setTab("signup")}
          className={`rounded-lg py-2 text-sm font-medium transition-colors ${
            !isSignIn ? "bg-surface text-foreground" : "text-muted hover:text-foreground"
          }`}
        >
          Create account
        </button>
      </div>

      {/* Form */}
      <form
        className="mt-6 flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        {!isSignIn && (
          <Field id="name" label="Full name" icon={User} placeholder="Jane Doe" />
        )}

        <Field
          id="email"
          label="Email"
          icon={Mail}
          type="email"
          placeholder="you@example.com"
        />

        <Field
          id="password"
          label="Password"
          icon={Lock}
          type="password"
          placeholder="••••••••"
          trailing={
            isSignIn ? (
              <a href="#" className="text-sm font-medium text-brand-cyan hover:underline">
                Forgot?
              </a>
            ) : null
          }
        />

        <button
          type="submit"
          className="brand-gradient mt-1 h-11 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          {isSignIn ? "Sign in" : "Create account"}
        </button>
      </form>

      {/* Divider */}
      <div className="my-5 flex items-center gap-3">
        <span className="h-px flex-1 bg-card-border" />
        <span className="text-xs text-muted-2">or</span>
        <span className="h-px flex-1 bg-card-border" />
      </div>

      {/* Google */}
      <button className="flex h-11 w-full items-center justify-center gap-2.5 rounded-lg border border-card-border bg-input text-sm font-medium text-foreground transition-colors hover:bg-surface">
        <GoogleIcon />
        Continue with Google
      </button>

      <p className="mt-6 text-center text-xs text-muted-2">
        By continuing you agree to our Terms and Privacy Policy.
      </p>
    </div>
  )
}
