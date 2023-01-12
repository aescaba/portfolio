import Image from 'next/image'

export default function WorkListing({imgsrc, title, description}) {
    return (
        <div>
            <div class="mb-4 lg:mb-6">
                <Image class="grayscale-[40%] hover:filter-none" src={imgsrc} alt="placeholder" width={1280} height={800}/>
            </div>

            <div class="font-bold text-2xl">
                {title}
            </div>

            <div class="text-xl">
                {description}
            </div>
      </div>
    );
}