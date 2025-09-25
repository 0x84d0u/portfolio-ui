import { Layout, Typography, LayoutStackProps, Button, NavigationLinkProps } from "@/ui";
import { ClassName, cn } from "@/helpers"
import { Navigation } from "@/ui";


export type FormWrapperProps = Pick<React.ComponentProps<"form">, 'action' | 'children'> & {
    title?: string
    description?: string
    isError?: boolean
    errorMessage?: string

    isPending?: boolean

    links?: NavigationLinkProps[] 

    submit?: string
    reset?: string

    center?: boolean
    className?: ClassName
}

export const FormWrapper = ({
    // Header
    title,
    description,
    // isError,
    errorMessage,
    
    // Card
    className,
    children,

    
    // Actions
    isPending,
    submit = "Submit",
    reset,
    
    // Footer
    links,
    
    // Root
    action,
    center,
    
    // ...props
}: FormWrapperProps) => {

    const rootProps: React.ComponentProps<"form"> = {
        action: action,
        className: cn(
            'flex flex-col gap-6',
        )
    }

    const headerProps: LayoutStackProps = {
        className: cn(center && "items-center")
    }

    const cardProps: LayoutStackProps = {
        className: cn('bg-slate-50 border flex flex-col rounded-lg', className),
        divided: true

    }
    const fieldsProps: LayoutStackProps = {
        // divided: true,
        className: 'gap-4 py-6'
    }
    const actionsProps: LayoutStackProps = {
        direction: 'horizontal',
        gap: 2,
        className: 'p-6'
    }

    const footerProps: LayoutStackProps = {
        className: cn(center && "items-center")

    }
    return <form {...rootProps}>

        <Layout.Stack {...headerProps}>
            <Typography.Base size='3xl' weight='semibold'>{title}</Typography.Base>
            <Typography.Base >{description}</Typography.Base>
            <Typography.Base >{errorMessage}</Typography.Base>
        </Layout.Stack>

        <Layout.Stack {...cardProps}>
            <Layout.Stack {...fieldsProps}>
                {children}
            </Layout.Stack>
            <Layout.Stack {...actionsProps}>
                {reset && <Button className="flex-1" variant='secondary' type="reset" disabled={isPending} size='lg' >{reset}</Button>}
                {submit && <Button className="flex-1" variant='default' type="submit" disabled={isPending} size='lg' >{submit}</Button>}                
            </Layout.Stack>
        </Layout.Stack>

        <Layout.Stack {...footerProps}>
            {links?.map((linkProps, key) => <Navigation.Link key={key} {...linkProps}/> )}
        </Layout.Stack>

    </form>
}


