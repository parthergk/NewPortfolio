
import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
        <ul className = " sm:flex space-x-5 text-white sm:text-3.2xl lg:text-3.8xl font-light hidden"  >
            <li><Link href='/project'>Project</Link></li>
            <li><Link href='/service'>Service</Link></li>
            <li><Link href='/about'>About</Link></li>
        </ul>
    </nav>
  )
}

export default Nav