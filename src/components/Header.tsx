import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
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
            <div className="mr-3 ">
              <Logo />
            </div>
            <div className="mr-3">
              <Logo />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="cta-text-md hidden text-neutral-400 hover:text-neutral-600 dark:text-neutral-10 sm:block"
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
