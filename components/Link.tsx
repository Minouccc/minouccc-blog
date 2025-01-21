/* eslint-disable jsx-a11y/anchor-has-content */
'use client'

import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 500,
  showSpinner: false,
})

const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const pathname = usePathname()
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  useEffect(() => {
    NProgress.done()
  }, [pathname])

  const handleClick = () => {
    if (href === '/' && pathname === '/') {
      return
    }

    if (isInternalLink) {
      NProgress.start()
    }
  }

  if (isInternalLink) {
    return <Link className="break-words" href={href} onClick={handleClick} {...rest} />
  }

  if (isAnchorLink) {
    return <a className="break-words" href={href} {...rest} />
  }

  return (
    <a className="break-words" target="_blank" rel="noopener noreferrer" href={href} {...rest} />
  )
}

export default CustomLink
