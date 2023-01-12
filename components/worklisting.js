import Image from 'next/image'

export default function WorkListing({imgsrc, title, description}) {
    return (
        <div class="grayscale-[50%] hover:filter-none hover:text-amber-400">
            <div class="mb-4 lg:mb-6">
                <Image class="" src={imgsrc} width={1280} height={800}/>
            </div>

            <div class="font-bold text-xl">
                {title}
            </div>

            <div class="font-light text-neutral-300 text-lg leading-6">
                {description}
            </div>
      </div>
    );
}