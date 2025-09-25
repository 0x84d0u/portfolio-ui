import { ClassName , cn } from "@helpers/index"
import { cva, VariantProps } from "class-variance-authority"


const v = cva(
    'mx-auto px-4', {
    variants: {
        size: {
            fluid: "",
            desktop: "max-w-screen-desktop",
            laptop: "max-w-screen-laptop",
            tablet: "max-w-screen-tablet",
        }
    },
    defaultVariants: {
        size: 'fluid'
    }
})

export type LayoutContainerProps = React.ComponentProps<"div"> & VariantProps<typeof v> & {
    className?: ClassName
}

export const LayoutContainer = ({
    size,
    className,
    ...props
}: LayoutContainerProps) => {
    return <div
        className={cn(v({ size, className }))}
        {...props}
    />
}

