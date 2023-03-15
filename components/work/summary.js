import Image from "next/image";
import { HiOutlineExternalLink } from 'react-icons/hi'

export default function Summary({ summary, toolsList, imgInfo, hasLink, link = "", linkText = "" }) {

    /*
        summary: string - 1-2 sentence description of project, larger text at top
        toolsList: array of strings - each string is a skill/tool used in project
        imgInfo: object
            src: string - path to image
            alt: string - image alt text
            width: string - # - image width
            height: string - # - image height
        hasLink: boolean - is there a link to some sort of preview?
        link: string - external preview link. default empty string
        linkText: string - link text
    */

    // parameters needed to render image
    const src = `${imgInfo.src}`;
    const alt = `${imgInfo.alt}`;
    const width = `${imgInfo.width}`;
    const height = `${imgInfo.height}`;

    // if there's a link to some sort of preview, create this link
    function previewLink() {
        if (hasLink) {
            return (
                <a href={link} target="_blank" rel="noreferrer" aria-label={"View a live preview"}>
                    <button class="flex mt-6 items-center text-lg font-semibold outline outline-2 rounded-full px-6 py-2 transition ease-in-out delay-[25ms] hover:bg-white hover:text-black hover:outline-0 text-xl font-bold hover:bg-gradient-to-l from-orange-300 via-amber-300 to-blue-400">
                        {linkText}<HiOutlineExternalLink class="inline ml-2" />
                    </button>
                </a>
            )
        }
    }

    return (
        <div class="flex flex-col lg:flex-row lg:gap-x-8 mb-20">
            {/* first column - summary */}
            <div class="mb-8 lg:mb-4 lg:basis-1/2">
                <p class="text-[1.75rem] leading-9 font-thin">{summary}</p>

                <h3 class="text-xl mt-6 lg:mt-10 py-2 font-semibold">Skills/Tools</h3>
                <div class="flex flex-wrap gap-x-6 text-lg">
                    {toolsList.map((tool) => {
                        return (
                            <p key={tool}>{tool}</p>
                        );
                    })}
                </div>
                {previewLink()}
            </div>



            {/* second column - image */}
            <div class="lg:basis-1/2">
                <Image class="" src={src} alt={alt} width={width} height={height} />
            </div>

        </div>
    );
}