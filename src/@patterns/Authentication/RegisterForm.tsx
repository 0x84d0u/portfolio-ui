import { FormAction, setTimeoutAsync, useForm } from "@helpers/index"
import { Field, Form, FormWrapperProps, toast } from "@ui/index"

type Data = {
    email: string
    password: string
}
type Props = Pick<FormWrapperProps, 'title' | 'description' | 'links'> & {
    action: FormAction<Data>
}


export function RegisterForm({
    ...props
}: Props) {

    const form = useForm<Data>({
        initialValues: { email: "", password: "" },
        action: async (values) => {
            console.log({ values })
            await setTimeoutAsync(1);
            toast("Registred successfully")
            return null
        }
    })
    const formWrapperProps: FormWrapperProps = {
        action: form.action,
        title: "Register",
        description: "Lorem ipsum",
        center: true,
        links: props.links || [
            { prompt: "Already have an account?", href: "/auth/login", children: "Register" },
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
    </Form.Wrapper>
}