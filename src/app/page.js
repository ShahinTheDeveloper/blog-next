import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex place-items-center">
            <h1 className="flex justify-self-center	">
                Welcome To My &nbsp;
                <Link className="text-sky-400/100" href={"/blog"}>
                    Blog
                </Link>
            </h1>
        </div>
    );
}
