'use client'

import { Suspense } from 'react'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'

function LoginForm() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <SignIn.Root>
        <SignIn.Step name="start">
          <h1>Sign in to your account</h1>

          <Clerk.Connection name="google">
            Sign in with your Google Account
          </Clerk.Connection>

          <Clerk.Field name="identifier">
            <Clerk.Label>Email</Clerk.Label>
            <Clerk.Input />
            <Clerk.FieldError />
          </Clerk.Field>

          <SignIn.Action submit>Continue</SignIn.Action>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <LoginForm />
    </Suspense>
  )
}