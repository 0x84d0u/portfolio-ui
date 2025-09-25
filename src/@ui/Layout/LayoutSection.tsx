import { Children, ClassName, TagName , cn} from "@helpers/index"
import { Layout, LayoutContainerProps } from "@ui/index"

export type LayoutSectionProps =  {
    children?: Children
    className?: ClassName
    Tagname?: TagName
    containerProps?: Omit<LayoutContainerProps, 'children'>
};

export const LayoutSection = ({
    containerProps,
    className,
    Tagname = 'section',
    children,
    ...sectionProps
}: LayoutSectionProps) => {
    return <Tagname className={cn(className)} {...sectionProps}>
        <Layout.Container {...containerProps} children={children} />
    </Tagname>
}
