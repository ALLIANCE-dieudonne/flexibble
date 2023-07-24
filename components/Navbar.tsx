import Link from "next/link"
import Image from "next/image"
import { NavLinks } from "@/constants"
import AuthProviders from "./AuthProviders"
const Navbar = () => {
  const session ={}
  return (
    <nav className="flexBetween navbar">
        <div className="flex1 flexStart gap-10">
            <Link href="/">
                <Image src="/logo.svg" width={155} height={43} alt="flexibble"/>
            </Link>
            <ul className="xl:flex hidden text-small gap-7">
                {NavLinks.map((link)=>(
                  <Link href={link.href} key={link.key}>
                    {link.text}
                  </Link>
                ))} 
            </ul>
        </div>

        <div className="flexCenter gap-4">
          {session ? (
            <>userphoto
            <Link href="/create-project">
              Share work
            </Link>
            </>
          ):(<AuthProviders />)}
        </div>
    </nav>
  )
}
export default Navbar