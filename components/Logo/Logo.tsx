import Link from 'next/link'
import { RoutesEnum } from '@/constants/routes'

const Logo = () => {
  return (
    <Link className="logo" href={RoutesEnum.Home}>
      <p className="logo__text">astro.teq</p>
    </Link>
  )
}

export default Logo
