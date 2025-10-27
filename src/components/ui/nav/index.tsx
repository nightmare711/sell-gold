import { useEffect, useState, type JSX } from 'react'
import Logo from '../../../assets/logo.avif'
import { TranslationSwitcher } from '../translation-switcher'

export const NavBar = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(true)
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = (): void => {
      const currentScrollY = window.scrollY

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      // Check if at top
      setIsAtTop(currentScrollY < 10)

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 bg-white/80 backdrop-blur-sm ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${!isAtTop ? 'shadow-md' : 'shadow-none'}`}
    >
      <div className="flex items-center justify-end relative w-full px-4 lg:px-8 py-6">
        <img alt="logo" className="w-32 lg:w-48 absolute top-1/2 left-1/2 -translate-1/2" src={Logo} />
        <TranslationSwitcher />
      </div>
    </div>
  )
}
