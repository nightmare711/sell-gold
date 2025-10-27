/* eslint-disable unicorn/prevent-abbreviations */
export const isProduction = import.meta.env.MODE === "production";

/**
 * Utility function to conditionally join classNames together
 * Similar to the popular 'clsx' library but lightweight
 */
export function classNames(...classes: Array<string | undefined | null | false>): string {
  return classes.filter(Boolean).join(' ');
}
