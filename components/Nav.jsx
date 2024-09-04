'use client'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="sm:relative sm:flex-none fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10">
        <ul className = " sm:flex sm:space-x-5 text-white text-5.4xl sm:text-3.2xl lg:text-3.8xl font-light"  >
            <li><Link href='/project'>Project</Link></li>
            <li><Link href='/service'>Service</Link></li>
            <li><Link href='/about'>About</Link></li>
        </ul>
    </nav>
  )
}

export default Nav