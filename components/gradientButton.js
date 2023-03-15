
export default function gradientButton({link, linkText, classes}) {

    /*
        link: string - url
        linkText: string - descriptive text to be displayed
        isExternal: boolean - is the link external? -> displays icon, adds target and rel
        classes: array of strings - any additional classes needed for styling? map these to anchor tag?
    */
    return (
        // code from summary section
        <a href={link} target="_blank" rel="noreferrer" aria-label={"View a live preview"}>
        <button class="flex mt-6 items-center text-lg font-semibold outline outline-2 rounded-full px-6 py-2 transition ease-in-out delay-[25ms] hover:bg-white hover:text-black hover:outline-0 text-xl font-bold hover:bg-gradient-to-l from-orange-300 via-amber-300 to-blue-400">
            {linkText}<HiOutlineExternalLink class="inline ml-2" />
        </button>
    </a>
    );
}

/*

resume link code

<a href="LINKHERE" target="_blank" rel="noreferrer">
    <button class="outline outline-2 rounded-full px-8 py-2 transition ease-in-out delay-[25ms] hover:bg-white hover:text-black hover:outline-0 text-xl font-semibold hover:bg-gradient-to-l from-orange-300 via-amber-300 to-blue-400">
        <p>Resume</p>
    </button>
</a>

*/