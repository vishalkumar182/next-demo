import Link from "next/link";
import Image from "next/image";

 export const Header =() => {
    return (
        <header className ="bg-lightgray text-black py-4 shadow -md">
            <div className =  " max-w-7xl mx-auto flex justify-between items-center">

      {/* Logo Section */}
            <div className = "flex items-center space-x-2">
                <Image src="/DAVOSA.png" alt="Logo" width={50} height={50} className="rounded-full" />
                <h1 className = "text-2xl font-bold">My Website</h1>
            </div>

      {/* Navigation Links */}
            <nav className = "space-x-4">
                <Link href="/" className = "text-lg hover:text-blue-500">Home</Link>
                <Link href="/about" className = "text-lg hover:text-blue-500">About</Link>
                <Link href="/Contact" className = "text-lg hover:text-blue-500">Contact</Link>
            </nav>
            </div>
</header>
);
};
