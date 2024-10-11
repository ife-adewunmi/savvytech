import { tv } from 'tailwind-variants'

// main button style
export const baseButton = tv({
  base: 'text-center  transition duration-500  ease-in-out rounded-lg px-6 relative whitespace-nowrap align-middle  inline-flex items-center justify-center select-none',
  variants: {
    size: {
      lg: 'cta-text-lg',
      md: 'cta-text-md',
      sm: 'cta-text-sm',
    },
    color: {
      primary: 'bg-main_gradient text-white hover:bg-main_gradient_hover',
      secondary: 'bg-secondary-900 text-white hover:bg-secondary-600',
      neutral: 'bg-neutral-700 text-white hover:bg-neutral-900 ',
      white:
        'text-neutral-700 bg-white drop-shadow-md hover:drop-shadow-lg hover:text-white hover:bg-primary-900',
      outline:
        'text-primary-900 dark:text-neutral-50 outline outline-1 dark:outline-neutral-50 outline-primary-900 dark:hover:text-primary-900 dark:hover:bg-neutral-50  hover:text-white  hover:bg-primary-900',
      text_link: 'px-0 text-icon text-primary-700 dark:text-primary-50',
    },
    padding: {
      lg: 'py-[1.375rem]',
      md: 'py-4 ',
      sm: 'py-3 ',
      xs: 'py-2.5 ',
    },

    align: {
      center: 'mx-auto',
      right: 'ml-auto',
      left: 'mr-auto',
      top: 'mb-auto',
      bottom: 'mt-auto',
    },

    behavior: {
      block: 'w-full',
    },
    disabled: {
      true: 'opacity-50 bg-neutral-200 pointer-events-none',
    },
  },
})
