import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// pick keys at runtime
export function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>
  keys.forEach((k) => {
    if (k in obj) {
      result[k] = obj[k]
    }
  })
  return result
}

// omit keys at runtime
export function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...obj } as any  // cast temporarily
  keys.forEach((k) => {
    delete result[k]
  })
  return result as Omit<T, K>
}