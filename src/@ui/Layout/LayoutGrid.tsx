import { ClassName , cn} from "@helpers/index"

import { cva, VariantProps } from "class-variance-authority"


const v = cva(
    'grid', {
    variants: {
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
        columns: {
            1: "grid-cols-1",
            2: "grid-cols-2",
            3: "grid-cols-3",
            4: "grid-cols-4",
            5: "grid-cols-5",
            6: "grid-cols-6",
            7: "grid-cols-7",
            8: "grid-cols-8",
            9: "grid-cols-9",
            10: "grid-cols-10",
            11: "grid-cols-11",
            12: "grid-cols-12",
        },
        desktopColumns: {
            1: "desktop:grid-cols-1",
            2: "desktop:grid-cols-2",
            3: "desktop:grid-cols-3",
            4: "desktop:grid-cols-4",
            5: "desktop:grid-cols-5",
            6: "desktop:grid-cols-6",
            7: "desktop:grid-cols-7",
            8: "desktop:grid-cols-8",
            9: "desktop:grid-cols-9",
            10: "desktop:grid-cols-10",
            11: "desktop:grid-cols-11",
            12: "desktop:grid-cols-12",
        },
        laptopColumns: {
            1: "laptop:grid-cols-1",
            2: "laptop:grid-cols-2",
            3: "laptop:grid-cols-3",
            4: "laptop:grid-cols-4",
            5: "laptop:grid-cols-5",
            6: "laptop:grid-cols-6",
            7: "laptop:grid-cols-7",
            8: "laptop:grid-cols-8",
            9: "laptop:grid-cols-9",
            10: "laptop:grid-cols-10",
            11: "laptop:grid-cols-11",
            12: "laptop:grid-cols-12",
        },
        tabletColumns: {
            1: "tablet:grid-cols-1",
            2: "tablet:grid-cols-2",
            3: "tablet:grid-cols-3",
            4: "tablet:grid-cols-4",
            5: "tablet:grid-cols-5",
            6: "tablet:grid-cols-6",
            7: "tablet:grid-cols-7",
            8: "tablet:grid-cols-8",
            9: "tablet:grid-cols-9",
            10: "tablet:grid-cols-10",
            11: "tablet:grid-cols-11",
            12: "tablet:grid-cols-12",
        },
    }
})

export type LayoutGridProps = React.ComponentProps<"div"> & VariantProps<typeof v> & {
    className?: ClassName
}

export const LayoutGrid = ({
    gap,
    columns,
    tabletColumns,
    desktopColumns,
    laptopColumns,
    className,
    ...props
}: LayoutGridProps) => {
    
    return <div
        className={cn(
            v({ gap, columns, tabletColumns, desktopColumns, laptopColumns }),
            className
        )}
        {...props}
    />
}

