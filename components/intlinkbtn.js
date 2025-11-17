import Link from "next/link";

export default function IntLinkBtn({link, linkText }) {

    /*
        styles a button that's an internal link

        code from https://buttons.ibelick.com/

        link: string - url
        linkText: string - descriptive text to be displayed
    */
    return (
        <Link href={link}>
            <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded border border-stone-800 bg-tomato px-6 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]">
                {linkText}</button>
        </Link>
    );
}