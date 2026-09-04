"use client"

import { useState } from "react"
import { Loader2, LogIn, Mail, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/context/AuthContext"

export default function AuthModal() {
  const { isOpen, closeAuthModal, login, register, googleAuth, isLoading, user } = useAuth()

  const [activeTab, setActiveTab] = useState("login")
  const [loginForm, setLoginForm] = useState({ identity: "", password: "" })
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
    phone_no: "",
    country: "",
  })
  const [message, setMessage] = useState({ type: "", text: "" })

  const resetMessage = () => setMessage({ type: "", text: "" })

  const handleLogin = async (event) => {
    event.preventDefault()
    resetMessage()

    const result = await login(loginForm.identity, loginForm.password)
    if (result.ok) {
      closeAuthModal()
      setMessage({ type: "success", text: "Welcome back!" })
    } else {
      const errorText = result?.error?.message || "Unable to sign in. Please try again."
      setMessage({ type: "error", text: errorText })
    }
  }

  const handleRegister = async (event) => {
    event.preventDefault()
    resetMessage()

    if (registerForm.password !== registerForm.passwordConfirm) {
      setMessage({ type: "error", text: "Passwords do not match." })
      return
    }

    const result = await register({
      email: registerForm.email,
      password: registerForm.password,
      passwordConfirm: registerForm.passwordConfirm,
      username: registerForm.username || registerForm.email,
      name: registerForm.name,
      phone_no: registerForm.phone_no,
      country: registerForm.country,
    })

    if (result.ok) {
      closeAuthModal()
      setMessage({ type: "success", text: "Account created successfully." })
    } else {
      const errorText = result?.error?.message || "Unable to create an account. Please try again."
      setMessage({ type: "error", text: errorText })
    }
  }

  const handleGoogle = async () => {
    resetMessage()
    const result = await googleAuth()
    if (!result?.ok) {
      setMessage({ type: "error", text: "Google sign-in could not be started." })
    }
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          closeAuthModal()
          resetMessage()
        }
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{user ? "Welcome back" : "Join ICEMSS"}</DialogTitle>
          <DialogDescription>
            {user
              ? "You are already signed in."
              : "Sign in to continue or create a new account in seconds."}
          </DialogDescription>
        </DialogHeader>

        {message.text ? (
          <div
            className={`rounded-md border px-3 py-2 text-sm ${
              message.type === "error"
                ? "border-red-200 bg-red-50 text-red-700"
                : "border-emerald-200 bg-emerald-50 text-emerald-700"
            }`}
          >
            {message.text}
          </div>
        ) : null}

        {!user ? (
          <Tabs value={activeTab} onValueChange={(value) => { setActiveTab(value); resetMessage() }} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4 pt-4">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="identity">Email or username</Label>
                  <Input
                    id="identity"
                    type="text"
                    placeholder="Enter email or username"
                    value={loginForm.identity}
                    onChange={(event) => setLoginForm((prev) => ({ ...prev, identity: event.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    value={loginForm.password}
                    onChange={(event) => setLoginForm((prev) => ({ ...prev, password: event.target.value }))}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <LogIn className="mr-2 h-4 w-4" />}
                  Login
                </Button>
              </form>

              <Button type="button" variant="outline" className="w-full" onClick={handleGoogle} disabled={isLoading}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
</svg>
                Continue with Google
              </Button>
            </TabsContent>

            <TabsContent value="register" className="space-y-4 pt-4">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={registerForm.name}
                    onChange={(event) => setRegisterForm((prev) => ({ ...prev, name: event.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="registerEmail">Email</Label>
                  <Input
                    id="registerEmail"
                    type="email"
                    placeholder="your@gmail.com"
                    value={registerForm.email}
                    onChange={(event) => setRegisterForm((prev) => ({ ...prev, email: event.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Choose a username"
                    value={registerForm.username}
                    onChange={(event) => setRegisterForm((prev) => ({ ...prev, username: event.target.value }))}
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="registerPassword">Password</Label>
                    <Input
                      id="registerPassword"
                      type="password"
                      placeholder="Password"
                      value={registerForm.password}
                      onChange={(event) => setRegisterForm((prev) => ({ ...prev, password: event.target.value }))}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm"
                      value={registerForm.passwordConfirm}
                      onChange={(event) => setRegisterForm((prev) => ({ ...prev, passwordConfirm: event.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phoneNo">Phone</Label>
                    <Input
                      id="phoneNo"
                      type="tel"
                      placeholder="+91 123 456 7890"
                      value={registerForm.phone_no}
                      onChange={(event) => setRegisterForm((prev) => ({ ...prev, phone_no: event.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      type="text"
                      placeholder="Country"
                      value={registerForm.country}
                      onChange={(event) => setRegisterForm((prev) => ({ ...prev, country: event.target.value }))}
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <UserPlus className="mr-2 h-4 w-4" />}
                  Create account
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        ) : (
          <div className="space-y-3 rounded-lg border bg-slate-50 p-4 text-sm text-slate-700">
            <p>You are signed in as {user.name || user.username || user.email || "a member"}.</p>
            <Button type="button" variant="outline" className="w-full" onClick={() => { closeAuthModal(); resetMessage() }}>
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
