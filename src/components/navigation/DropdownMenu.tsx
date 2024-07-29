import React, { useRef, useState } from 'react'
import { MdChevronRight, MdExpandMore } from 'react-icons/md'
import Link from '@/components/Link'
import ButtonComponent from '@/components/common/button/ButtonComponent'

interface DropdownItem {
  title: string
  href: string
}

interface DropdownMenuProps {
  title: string
  items: Array<DropdownItem>
  dropdownTrigger?: 'hover' | 'click'
  isMobile?: boolean
  className?: string
}

const DropdownMenu = ({
  title,
  items,
  dropdownTrigger = 'hover',
  isMobile = false,
  className,
}: DropdownMenuProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLButtonElement>(null)
  const timeoutRef = useRef<number | undefined>(undefined)

  const handleDropdownToggle = () => {
    if (dropdownTrigger === 'click') {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  const handleMouseEnter = () => {
    if (dropdownTrigger === 'hover') {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      setIsDropdownOpen(true)
    }
  }

  const handleMouseLeave = () => {
    if (dropdownTrigger === 'hover') {
      timeoutRef.current = window.setTimeout(() => {
        setIsDropdownOpen(false)
      }, 300)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleDropdownToggle()
    }
  }

  if (isMobile) {
    return (
      <>
        <ButtonComponent fullWidth onClick={handleDropdownToggle} className={`p-0 ${className}`}>
          {title}
          <MdExpandMore className="ml-1 inline h-4 w-4" />
        </ButtonComponent>
        {isDropdownOpen && (
          <div className="pl-4">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex w-full items-center py-2 text-sm font-medium text-gray-700 transition hover:translate-x-6 hover:text-slate-900 dark:text-neutral-10"
              >
                {item.title} <MdChevronRight size={16} />
              </Link>
            ))}
          </div>
        )}
      </>
    )
  }

  return (
    <ButtonComponent
      ref={dropdownRef}
      className={`p-0 ${className}`}
      onClick={handleDropdownToggle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      aria-haspopup="true"
      aria-expanded={isDropdownOpen}
    >
      {title}
      <MdExpandMore className="ml-1 inline h-4 w-4" />
      {isDropdownOpen && (
        <div className="absolute left-0 mt-8 inline-grid w-[400px] grid-cols-2 gap-x-10 gap-y-2 rounded-md bg-white p-4 px-10 py-6 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-neutral-700">
          {items.map((item: DropdownItem) => (
            <Link
              key={item.title}
              href={item.href}
              className="flex w-full items-center py-3 text-sm text-slate-600 transition hover:translate-x-6 hover:text-slate-900 dark:text-neutral-10"
            >
              {item.title} <MdChevronRight size={16} />
            </Link>
          ))}
        </div>
      )}
    </ButtonComponent>
  )
}

export default DropdownMenu
