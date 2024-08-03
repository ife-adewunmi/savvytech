'use client'

import React, { useEffect, useRef, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import LogoMobile from '@/data/logo-mobile.svg'
import Link from '@/components/Link'
import MobileNav from '@/components/navigation/MobileNav'
import ThemeSwitch from '@/components/common/button/ThemeSwitch'
import SearchButton from '@/components/common/button/SearchButton'
import DropdownMenu from './DropdownMenu'

const Header = () => {
  return (
    <header className="header-wrapper relative z-10 flex items-center justify-between py-5">
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="mr-3 block md:hidden">
          <LogoMobile />
        </div>
        <div className="mr-3 hidden md:block">
          <Logo />
        </div>
      </Link>

      <div className="flex items-center xl:space-x-10">
        {headerNavLinks.map((link) => (
          <div key={link.title} className="relative">
            {link?.dropdown ? (
              <DropdownMenu
                title={link.title}
                items={link.dropdown}
                className={
                  'cta-text-md hidden cursor-pointer text-neutral-400 hover:text-neutral-600 dark:text-neutral-10 lg:block'
                }
              />
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
        <div className="flex items-center space-x-4 xl:space-x-10">
          <SearchButton />
          <ThemeSwitch />
        </div>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
