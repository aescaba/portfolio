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
            <div class="transition ease-in-out delay-100 hover:text-amber-400">
                <Link href={"/work/"+ `${path}`}>
                    <a>
                        <div class="mb-4 lg:mb-6">
                            <Image alt={"Preview of " + `${title}`} src={imgsrc} placeholder="blur" width={1280} height={800}/>
                        </div>

                        <div class="font-bold text-xl">
                            {title}
                        </div>
                    </a>
                </Link>  
            </div>
            <div class="font-light text-neutral-300 text-lg leading-6">
                {description}
            </div>
      </div>
    );
}