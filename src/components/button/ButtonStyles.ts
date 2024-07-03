import { tv } from 'tailwind-variants'

// main button style
export const baseButton = tv({
  base: 'text-center text-white transition duration-500  ease-in-out rounded-lg px-6 relative whitespace-nowrap align-middle  inline-flex items-center justify-center select-none',
  variants: {
    size: {
      lg: 'cta-text-lg',
      md: 'cta-text-md',
      sm: 'cta-text-sm',
    },
    color: {
      primary: 'bg-main_gradient hover:bg-main_gradient_hover',
      secondary: 'bg-secondary-900 hover:bg-secondary-600',
      neutral: 'bg-neutral-700 hover:bg-neutral-900 ',
      white:
        'text-neutral-700 bg-white drop-shadow-md hover:drop-shadow-lg hover:text-white hover:bg-neutral-900',
      outline:
        'text-neutral-700 outline outline-1 outline-primary-900 hover:outline-white hover:text-white  hover:bg-neutral-900',
      text: 'bg-transparent text-neutral-700 px-0 text-icon',
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
