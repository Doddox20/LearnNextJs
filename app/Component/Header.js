
import Link from "next/link"
export default function Header(){
    return (
        <>
        <main >
      <ul className="menu">
     <li><Link href="/" >Home</Link></li>
     <li><Link href="/cv" >CV</Link></li>
     <li><Link href="/contact" >Contact</Link></li>
     <li><Link href="/jeu" >jeu</Link></li>
     </ul>
    </main>
        </>
    )

}