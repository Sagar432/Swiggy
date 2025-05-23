import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo.png";
import { ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-[2vw] py-[1vh] mb-6 border-2 border-orange-500">
      <Link href={""}>
        <Image src={logo} height={60} alt="" />
      </Link>
      <ul className="flex items-center gap-8">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About Us</Link>
        <Link href={"/contact"}>Contact Us</Link>
        <Link href={"/cart"}><ShoppingCart/></Link>
      </ul>
    </header>
  );
}
