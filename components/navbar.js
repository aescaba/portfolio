// https://j471n.in/blogs/active-navbar-next-js

import { useRouter } from "next/router";
import Link from "next/link";

const navigationRoutes = ["home", "work", "about", "contact"];

export default function Navbar() {
    const router = useRouter();
    return (
<div class="mt-8">
    <nav className="nav_container text-xl space-x-14">
            {navigationRoutes.map((singleRoute) => {
                return (
                    // <span class="">
                        <NavigationLink
                    key={singleRoute}
                    href={`/${singleRoute}`}
                    text={singleRoute}
                    router={router}
                    />
                    // </span>
                );
            })}
        </nav>
        </div>
    );
}

function NavigationLink({ href, text, router }) {
    const isActive = router.asPath === (href === "/home" ? "/" : href);
    return (
        <Link href={href === "/home" ? "/" : href} passHref>
            <a href={href === "/home" ? "/" : href}
            className={`${isActive && "nav_item_active font-bold"} nav_item`}
            >
                {text}
            </a>
        </Link>
    );
}