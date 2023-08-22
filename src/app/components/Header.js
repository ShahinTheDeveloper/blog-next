import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <nav>
            <div className="flex space-x-6">
                <div>
                    <Link href={"/"}>Home</Link>
                </div>
                <div>
                    <Link href={"/about"}>About</Link>
                </div>
                <div>
                    <Link href={"/blog"}>Blog</Link>
                </div>
                <div>
                    <Link href={"/contact"}>Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
