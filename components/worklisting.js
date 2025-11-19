import Image from 'next/image'
import Link from 'next/link';

export default function WorkListing({imgsrc, path, title, description}) {

    /*
        imgsrc: image file - imported in work.js
        path: string - for the url link (ex. amandaescaba/work/path)
        title: string - title of the project, used for alt text
        description: string - project description to be displayed below image
    */
    
    return (
        <div class="">
            <div class="transition ease-in-out delay-100 hover:text-ocean">
                <Link href={"/work/"+ `${path}`}>

                    <div class="mb-4 lg:mb-6">
                        <Image alt={"Preview of " + `${title}`} src={imgsrc} placeholder="blur" width={1280} height={800}/>
                    </div>
                    <div class="uppercase mb-4">
                        {title}
                    </div>

                </Link>  
            </div>
            <div class=" text-sm text-stone-500">
                {description}
            </div>
        </div>
    );
}