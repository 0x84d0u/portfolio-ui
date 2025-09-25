


import { ClassName, cn } from "@helpers/index";
import { DynamicIcon } from "lucide-react/dynamic"

export type IconProps = React.ComponentProps<typeof DynamicIcon> & {
    className?: ClassName
}

export const Icon = ({ className, ...props }: IconProps) => {
    return <DynamicIcon
        className={cn(className)}
        {...props}
    />
}