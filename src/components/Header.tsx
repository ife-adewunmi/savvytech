import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import LogoMobile from '@/data/logo-mobile.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="relative z-10 flex items-center justify-between py-5">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3 block md:hidden">
              <LogoMobile />
            </div>
            <div className="mr-3 hidden md:block  ">
              <Logo />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 xl:space-x-10">
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="cta-text-md hidden text-neutral-400 hover:text-neutral-600 dark:text-neutral-10 lg:block"
          >
            {link.title.toUpperCase()}
          </Link>
        ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
