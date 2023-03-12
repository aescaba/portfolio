import Image from 'next/image'
import Link from 'next/link';

export default function WorkListing({imgsrc, path, title, description}) {
    return (
        <div class="">
            <div class="transition ease-in-out delay-100 hover:text-amber-400">
                <Link href={"/work/"+ `${path}`}>
                    <a>
                        <div class="mb-4 lg:mb-6">
                            <Image alt={"Preview of " + `${title}`} src={imgsrc} width={1280} height={800}/>
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