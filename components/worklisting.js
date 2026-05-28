import Image from 'next/image'
import Link from 'next/link';

export default function WorkListing({ imgsrc, path, title, description }) {

    /*
        imgsrc: image file - imported in work.js
        path: string - for the url link (ex. amandaescaba/work/path)
        title: string - title of the project, used for alt text
        description: string - project description to be displayed below image
    */

    return (
        <div class="flex flex-col-reverse lg:flex-row gap-8 lg:gap-35">
            {/* Details */}
            <div class="flex flex-col lg:w-1/3 gap-2 lg:gap-4">
            <Link href={"/work/" + `${path}`} class="uppercase text-base group relative link">{title} &gt;</Link>
                {/* <h2 class="uppercase text-base mb-4 group relative link">{title} &gt;</h2> */}
                <div class="text-sm text-stone-500">{description}</div>
            </div>

            {/* Photo */}
            <div class="flex flex-col lg:w-2/3">
                <div class="">
                    <Image alt={"Preview of " + `${title}`} src={imgsrc} placeholder="blur" width={1280} height={800} />
                </div>
            </div>

        </div>
        // <div class="flex flex-col">
        //     <div class="mb-4 lg:mb-6">
        //         <Image alt={"Preview of " + `${title}`} src={imgsrc} placeholder="blur" width={1280} height={800} />
        //     </div>
        //     <Link href={"/work/" + `${path}`}>
        //         <div class="uppercase text-base mb-4 group relative link">
        //             {title}
        //             {/* <div class="bg-sesame h-[1px] w-0 group-hover:w-full transition-all duration-500"></div> */}
        //         </div>

        //     </Link>
            // <div class="text-sm text-stone-500">
            //     {description}
            // </div>
        // </div>
    );
}