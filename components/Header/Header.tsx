import Link from 'next/link'
import React from 'react'

import { RoutesEnum } from '@/constants/routes'
import Logo from '../Logo/Logo'
import SearchInput from '../Inputs/SearchInput/SearchInput'
import Navigation from '../Navigation/Navigation'

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <SearchInput />
      <Navigation />
    </header>
  )
}

export default Header
