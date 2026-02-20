'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'

export default function Login(){
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen">
            <SignIn.Root>
                <SignIn.Step name="start" className="bg-white p-4 rounded">
                    <h1>Sign into your account</h1>
                    <Clerk.Connection name="google">Sign in with Google</Clerk.Connection>

                    <Clerk.Field name="identifier">
                        <Clerk.Label>Email</Clerk.Label>
                        <Clerk.Input />
                        <Clerk.FieldError>Ihre Login Daten eingeben</Clerk.FieldError>
                    </Clerk.Field>

                    <SignIn.Action submit>Continue</SignIn.Action>
                </SignIn.Step>
            </SignIn.Root>
        </div>
    )
}