// old navbar
// https://j471n.in/blogs/active-navbar-next-js

// navbar from
// https://tailwindcss.com/plus/ui-blocks/application-ui/navigation/navbars

import { useRouter } from "next/router";
import Link from "next/link";
import '@tailwindplus/elements';


const navigationRoutes = ["work", "about", "contact"];

function NavigationLink({ href, text, router, classNames }) {
  const isActive = router.asPath === (href === "/home" ? "/" : href);
  return (
    <Link
      href={href === "/home" ? "/" : href}
      // className={`${isActive && "nav_item_active font-bold"} nav_item transition ease-in-out delay-75 hover:text-blueberry`}
      className={`${isActive && "nav_item_active font-bold"} nav_item transition ease-in-out delay-75 hover:text-blueberry` + classNames}

    >

      {text}

    </Link>
  );
}

export default function Navbar() {
  const router = useRouter();

  return (
    <nav class="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10
    justify-end text-base uppercase">
      {/* removed from nav attributes and added to _app.js: mx-10 md:mx-24 lg:mx-32 xl:mx-48 2xl:mx-80 my-8 space-x-6 md:space-x-10 lg:space-x-14 */}
      <div>
        <div class="relative flex h-16 justify-between">
          <div class="absolute inset-y-0 right-0 flex sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button type="button" command="--toggle" commandfor="mobile-menu" class="relative inline-flex items-center justify-center rounded-md p-2 text-sesame hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-mustard">
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 in-aria-expanded:hidden">
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 not-in-aria-expanded:hidden">
                <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <div class="flex flex-1 justify-between items-center">
            <div class="flex shrink-0">
              <Link href={'/'}><img src="/AE_Logo.svg" alt="AE signature logo" class="h-10 sm:h-12 w-auto" /></Link>
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-8">
                {navigationRoutes.map((singleRoute) => {
                  return (
                    <span className="hover:text-blueberry">
                      <NavigationLink
                        key={singleRoute}
                        href={`/${singleRoute}`}
                        text={singleRoute.charAt(0).toUpperCase() + singleRoute.slice(1)} //https://flexiple.com/javascript/javascript-capitalize-first-letter/
                        router={router}
                      />
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <el-disclosure id="mobile-menu" hidden class="block sm:hidden">
        <div class="space-y-8 px-2 pt-2 pb-3">
          {navigationRoutes.map((singleRoute) => {
            return (
              <div className="transition ease-in-out delay-75 hover:text-blueberry">

                <NavigationLink
                  key={singleRoute}
                  href={`/${singleRoute}`}
                  text={singleRoute.charAt(0).toUpperCase() + singleRoute.slice(1)} //https://flexiple.com/javascript/javascript-capitalize-first-letter/
                  router={router}
                  classNames={" block text-right text-xl"}
                />
              </div>
            );
          })}
        </div>
      </el-disclosure>
    </nav>
  );
}