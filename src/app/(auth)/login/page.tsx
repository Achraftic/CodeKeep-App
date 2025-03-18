import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
  <div className=" h-screen flex items-center justify-center bg-background">
      <div className="flex w-full max-w-sm flex-col gap-6">

        <LoginForm />
      </div>
    </div>
  )
}
