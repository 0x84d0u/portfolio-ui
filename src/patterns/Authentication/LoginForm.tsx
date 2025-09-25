'use client'

import { Field, Form, FormWrapperProps, toast } from "@/ui"
import { FormAction, setTimeoutAsync, useForm } from "@/helpers"

type Data = {
    email: string
    password: string
    remember: boolean
}
type Props = Pick<FormWrapperProps, 'links'> & {
    action: FormAction<Data>
}


export function LoginForm({
    ...props
}: Props) {
    const form = useForm<Data>({
        initialValues: { email: "", password: "", remember: false },
        action: async (values) => {
            console.log({ values })
            await setTimeoutAsync(1);
            toast("Logged in successfully")
            return null
        }
    })
    const formWrapperProps: FormWrapperProps = {
        action: form.action,
        title: "Login",
        description: "Lorem ipsum",
        center: true,
        links: props.links || [
            { prompt: "New user?", href: "/auth/register", children: "Register" },
            { prompt: "Forgot password?", href: "/auth/reset-password", children: "Reset password" }
        ],
        className: "max-w-screen-tablet mx-auto w-full"
    }

    return <Form.Wrapper {...formWrapperProps}>
        <Form.Control label="Email" iconName="mail" errors={form.errors.email}>
            <Field.Input name="email" disabled={form.isPending} />
        </Form.Control>
        <Form.Control label="Password" iconName="lock" errors={form.errors.password}>
            <Field.Input name="password" disabled={form.isPending} />
        </Form.Control>
        <Form.Control>
            <Field.Checkbox name="remember" label="Remember me"/>
        </Form.Control>
    </Form.Wrapper>
}