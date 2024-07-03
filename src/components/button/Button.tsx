import { forwardRef, useMemo } from 'react'
import { type VariantProps } from 'tailwind-variants'
import { BiLoaderCircle } from 'react-icons/bi'
import { baseButton } from './ButtonStyles'

// define all the button attributes
type BaseButtonAttributes = React.ComponentPropsWithoutRef<'button'>

// define the ref type
type Ref = HTMLButtonElement

// extend the base button attributes
interface ButtonProps extends BaseButtonAttributes {
  isLoading?: boolean
  disabled?: boolean
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  buttonStyle?: VariantProps<typeof baseButton>
  className?: string
}

const ButtonMain = forwardRef<Ref, ButtonProps>((props, ref) => {
  // destructure neccesary props
  const {
    type,
    children,
    buttonStyle,
    disabled,
    isLoading,
    leftIcon,
    rightIcon,
    className,
    ...rest
  } = props

  // determine icon placement
  const { newIcon: icon, iconPlacement } = useMemo(() => {
    let newIcon = rightIcon || leftIcon

    if (isLoading) {
      newIcon = <BiLoaderCircle className="animate-spin" size={24} />
    }

    return {
      newIcon,
      iconPlacement: rightIcon ? ('right' as const) : ('left' as const),
    }
  }, [isLoading, leftIcon, rightIcon])

  const renderButtonVariant = () => {
    return baseButton({ ...buttonStyle, className })
  }

  return (
    <button
      className={renderButtonVariant()}
      {...rest}
      type={type ? 'submit' : 'button'}
      ref={ref}
      disabled={disabled || isLoading}
    >
      {/** render icon before */}
      {icon && iconPlacement === 'left' ? (
        <span className={`icon icon-left ${children && !isLoading && 'mr-2'}`}>{icon}</span>
      ) : null}

      {/** hide button text during loading state */}
      {!isLoading && children}

      {/** render icon after */}
      {icon && iconPlacement === 'right' ? (
        <span className={`icon icon-right  ${children && !isLoading && 'ml-2'} `}>{icon}</span>
      ) : null}
    </button>
  )
})

// set default props
ButtonMain.defaultProps = {
  buttonStyle: {},
  //   buttonVariant: 'primary',
  isLoading: false,
  disabled: false,
  leftIcon: undefined,
  rightIcon: undefined,
}

export default ButtonMain
