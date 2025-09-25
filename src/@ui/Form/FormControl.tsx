import { Icon, IconName, Layout, Typography } from "@ui/index";
import { Children } from "@helpers/index"

export type FormControlProps =  {
    label?: string
    iconName?: IconName
    description?: string
    infos?: string
    
    errors?: string[]
    isRequired?: boolean

    children?: Children
}
export const FormControl = ({
    label = 'Email',
    iconName,
    description,
    infos,

    errors,
    isRequired,

    children
}: FormControlProps) => {
    const hasError = errors && errors.length > 0;


    return <Layout.Stack className="px-6  flex-1" gap={3}  >
        <div>
            <Layout.Stack inline gap={1} className='items-center'>
                {iconName && <Icon name={iconName} className="size-4 opacity-15" />}
                <Typography.Base weight='semibold'>{label}</Typography.Base>
                <Typography.Base hidden={!isRequired} className='text-red-400'>*</Typography.Base>
            </Layout.Stack>
            <Typography.Base>{description}</Typography.Base>
        </div>
        <div> {children} </div>

        <Layout.Stack hidden={!hasError}>
            {errors && errors.map((error, index) => <Typography.Base key={index} className='text-red-400'>{error}</Typography.Base>)}
        </Layout.Stack>

    </Layout.Stack>
}