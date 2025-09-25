import { ClassName, TagName, cn } from "@/helpers"
import { cva, VariantProps } from "class-variance-authority"


const v = cva(
  "",
  {
    variants: {
      weight: {
        normal: "font-normal",
        semibold: "font-semibold",
        extrabold: "font-extrabold",
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        base: 'text-base',
        lg: "text-lg",
        xl: "text-xl",
        '2xl': "text-2xl",
        '3xl': "text-3xl",
        '4xl': "text-4xl",
        '5xl': "text-5xl",
        '6xl': "text-6xl",
      },
      color: {
        muted: "text-gray-500",
        primary: "text-blue-600",
        secondary: "text-purple-600",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
      },
      transform: {
        uppercase: "uppercase",
        lowercase: "lowercase",
        capitalize: "capitalize",
      },
      truncate: {
        true: "truncate",
        false: "",
      },
    },
  }
)



export type TypographyBaseProps = React.ComponentProps<"p"> & VariantProps<typeof v> & {
  className?: ClassName
  TagName?: TagName
  hideEmpty?: boolean
}

export const TypographyBase = ({
  size,
  weight,
  color,
  align,
  transform,
  truncate,

  className,
  TagName = 'p',
  hidden,
  hideEmpty,

  ...props
}: TypographyBaseProps) => {
  if (hidden) return null;
  if (hideEmpty == true && !props.children) return null;

  const vProps = { weight, size, color, align, transform, truncate }
  return <TagName
    className={cn(v({ ...vProps, className }))}
    {...props}
  />
}

