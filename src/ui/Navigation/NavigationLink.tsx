import { Layout, LayoutStackProps, Typography, TypographyBaseProps } from "@/ui";

export type NavigationLinkProps = React.ComponentProps<'a'> & TypographyBaseProps & {
    stackProps?: LayoutStackProps
    prompt?: string
}

export const NavigationLink = ({
    stackProps,
    prompt,
    ...props
}: NavigationLinkProps) => {
    return <Layout.Stack direction='horizontal' className='items-center gap-1' {...stackProps}>
        {prompt && <Typography.Base children={prompt} color="muted"/>}
        <Typography.Base className='text-blue-500' {...props}/>
    </Layout.Stack>
}
