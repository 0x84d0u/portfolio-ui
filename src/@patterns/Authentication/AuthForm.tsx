import { Children, StatefulAction, useForm } from "@helpers/index"
import { Field, Form, FormWrapperProps, Layout, NavigationLinkProps } from "@ui/index"
import { useEffect } from "react"

type AuthFormProps = Pick<FormWrapperProps, 'title' | 'description'> & {
    children: Children
    links?: NavigationLinkProps[]
}


export function AuthForm<T extends Record<string, any>>({
    title,
    description,
    children,
}: AuthFormProps) {

    type Data = {
        email: string
        name: string
        password: string
    }

    const form = useForm<Data>({
        initialValues: {
            name: "",
            email: "",
            password: "", 
        },
        action: async data => {
            await new Promise((r) => setTimeout(r, 1000));
            return {
                email: ["Wrong email"]
            }
        }
    })


    return <Form.Wrapper title={title} description={description} action={form.action}>
        {children}
        <Form.Control label="Name" iconName="user-2" errors={form.errors.name}>
            <Field.Input name="name" disabled={form.isPending}/>
        </Form.Control>
        <Form.Control label="Email" iconName="mail" errors={form.errors.email}>
            <Field.Input name="email" disabled={form.isPending}/>
        </Form.Control>
        <Form.Control label="Password" iconName="lock" errors={form.errors.password}>
            <Field.Input name="password" disabled={form.isPending}/>
        </Form.Control>
    </Form.Wrapper>
}