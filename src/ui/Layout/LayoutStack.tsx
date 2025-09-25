import { ClassName, cn } from "@/helpers"
import { cva, VariantProps } from "class-variance-authority"


const v = cva(
    'flex', {
    variants: {
        direction: { horizontal: "flex-row", vertical: "flex-col" },
        reverse: { false: null, true: null, },
        divided: { false: null, true: 'divider' },
        gap: {
            1: "gap-1",
            2: "gap-2",
            3: "gap-3",
            4: "gap-4",
            5: "gap-5",
            6: "gap-6",
            7: "gap-7",
            8: "gap-8",
            9: "gap-9",
            10: "gap-10",
            11: "gap-11",
            12: "gap-12",
        },
    },
    compoundVariants: [
        // Reverse
        { direction: 'horizontal', reverse: true, class: "flex-row-reverse" },
        { direction: 'vertical', reverse: true, class: "flex-col-reverse" },
        // Divided
        { direction: 'horizontal', divided: true, class: "divide-x" },
        { direction: 'vertical', divided: true, class: "divide-y" },
    ],
    defaultVariants: {
        direction: 'vertical',
        reverse: false,
        divided: false,
    }
})

export type LayoutStackProps = React.ComponentProps<"div"> & VariantProps<typeof v> & {
    className?: ClassName
    inline?: boolean
    hideEmpty?: boolean
}

export const LayoutStack = ({
    reverse,
    direction,
    className,
    divided,
    gap,
    inline,
    hidden,
    hideEmpty,
    ...props
}: LayoutStackProps) => {
    if (hidden) return null;
    if (hideEmpty == true && !props.children) return null;

    const vProps = { reverse, direction, divided, gap };
    return <div
        className={cn(
            v({ ...vProps }),
            inline && 'inline-flex flex-row',
            className
        )}
        {...props}
    />
}

