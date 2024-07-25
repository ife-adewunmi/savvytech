'use client'

import { useEffect, useRef, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import LogoMobile from '@/data/logo-mobile.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

interface HeaderProps {
  dropdownTrigger?: string
}

const Header = ({ dropdownTrigger = 'hover' }: HeaderProps) => {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  const handleDropdownToggle = () => {
    if (dropdownTrigger === 'click') {
      setIsProductsOpen(!isProductsOpen)
    }
  }

  const handleMouseEnter = () => {
    if (dropdownTrigger === 'hover') {
      clearTimeout(timeoutRef.current)
      setIsProductsOpen(true)
    }
  }

  const handleMouseLeave = () => {
    if (dropdownTrigger === 'hover') {
      timeoutRef.current = setTimeout(() => {
        setIsProductsOpen(false)
      }, 300) // Delay closing by 300ms
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleDropdownToggle()
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="relative z-10 flex items-center justify-between py-5">
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="mr-3 block md:hidden">
          <LogoMobile />
        </div>
        <div className="mr-3 hidden md:block">
          <Logo />
        </div>
      </Link>

      <div className="flex items-center space-x-4 xl:space-x-10">
        {headerNavLinks.map((link) => (
          <div key={link.title} className="relative">
            {link.dropdown ? (
              <button
                ref={dropdownRef}
                className="cta-text-md hidden cursor-pointer text-neutral-400 hover:text-neutral-600 dark:text-neutral-10 lg:block"
                onClick={handleDropdownToggle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onKeyDown={handleKeyDown}
                aria-haspopup="true"
                aria-expanded={isProductsOpen}
              >
                {link.title}
                {isProductsOpen && (
                  <div className="absolute left-0 mt-2 grid w-80 grid-cols-2 gap-4 rounded-md bg-white p-4 py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900"
                      >
                        {`${item.title} >`}
                      </Link>
                    ))}
                  </div>
                )}
              </button>
            ) : (
              <Link
                key={link.title}
                href={link.href}
                className="cta-text-md hidden text-neutral-400 hover:text-neutral-600 dark:text-neutral-10 lg:block"
              >
                {link.title}
              </Link>
            )}
          </div>
        ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
