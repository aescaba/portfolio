// https://j471n.in/blogs/active-navbar-next-js

import { useRouter } from "next/router";
import Link from "next/link";

const navigationRoutes = ["home", "work", "about", "contact"];

export default function Navbar() {
    const router = useRouter();
    return (

    <nav className="nav_container flex justify-end text-xl space-x-6 md:space-x-10 lg:space-x-14">
            {navigationRoutes.map((singleRoute) => {
                return (
                    // <span class="">
                        <NavigationLink
                    key={singleRoute}
                    href={`/${singleRoute}`}
                    text={singleRoute.charAt(0).toUpperCase() + singleRoute.slice(1)} //https://flexiple.com/javascript/javascript-capitalize-first-letter/
                    router={router}
                    />
                    // </span>
                );
            })}
        </nav>

    );
}

function NavigationLink({ href, text, router }) {
    const isActive = router.asPath === (href === "/home" ? "/" : href);
    return (
        <Link href={href === "/home" ? "/" : href} passHref>
            <a href={href === "/home" ? "/" : href}
            className={`${isActive && "nav_item_active font-bold"} nav_item transition ease-in-out delay-75 hover:text-amber-400`}
            >
                {text}
            </a>
        </Link>
    );
}