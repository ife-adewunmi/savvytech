import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import LogoFooter from '@/data/logo_footer.svg'
import LogoFooterMobile from '@/data/logo_footer_mobile.svg'
import SocialIcon from './social-icons'
import ButtonComponent from '@/components/common/button/ButtonComponent'

export default function Footer() {
  return (
    <footer className="flex h-full flex-col items-start gap-10 bg-neutral-800 px-0 pb-20 pt-16 sm:px-6 md:px-11 lg:px-20  xl:px-56">
      <div>
        <div className="block md:hidden">
          <LogoFooterMobile />
        </div>
        <div className="hidden md:block">
          <LogoFooter />
        </div>
      </div>
      <div className="flex w-full flex-row items-stretch justify-between gap-8 ">
        <div className="basis-1/3 text-white">
          <div className="flex w-full flex-col items-start gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="body-text-sm-1 ">LAGOS Head Office</h3>
              <p className="body-text-md-3">
                2, First Avenue, Ismail Estate, Maryland, Lagos State, Nigeria
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="body-text-sm-1">PORTHARCOURT Office</h3>
              <p className="body-text-md-3">
                Igbodo Street Old GRA, Port Harcourt, Rivers State, Nigeria
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="body-text-sm-1">ACCRA, GHANA</h3>
              <p className="body-text-md-3">
                21 Third Close, Off Volta Street, Airport Res. Area, Accra, Ghana
              </p>
            </div>
          </div>
        </div>
        <div className="body-text-md-1 flex basis-1/4 flex-col gap-8 self-stretch text-white">
          Company
          <div className="flex  flex-col gap-4 self-start">
            <a href="#" className="body-text-md-3">
              About us
            </a>
            <a href="#" className="body-text-md-3">
              Products
            </a>
            <a href="#" className="body-text-md-3">
              News
            </a>
            <a href="#" className="body-text-md-3">
              Testimonials
            </a>
          </div>
        </div>
        <div className="body-text-md-1 flex basis-1/4 flex-col gap-8  text-white">
          Connect
          <div className="flex flex-col gap-4">
            <p className="body-text-md-3">+234-1-270-4409</p>
            <p className="body-text-md-3">info@savvytechweb.com</p>
            <ButtonComponent
              buttonStyle={{ size: 'lg', padding: 'lg', color: 'white', align: 'left' }}
            >
              Contact Us
            </ButtonComponent>
          </div>
          <div className="mb-3 flex space-x-4">
            <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
            <SocialIcon kind="x" href={siteMetadata.x} size={6} />
            <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  )
}
