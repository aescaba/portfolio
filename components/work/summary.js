import Image from "next/image";

export default function Summary({ summary, toolsList, imgInfo }) {

    // imgInfo: src, alt, width, height

    const tools = toolsList;
    console.log(tools);
    console.log(toolsList);

    const src = `${imgInfo.src}`;
    const alt = `${imgInfo.alt}`;
    const width = `${imgInfo.width}`;
    const height = `${imgInfo.height}`;

    return (
        <div class="flex flex-col lg:flex-row lg:gap-x-8 mb-20">
            {/* first column - summary */}
            <div class="mb-8 lg:mb-4 lg:basis-1/2">
                <p class="text-[1.75rem] leading-9 font-thin">{summary}</p>

                <h3 class="text-xl mt-10 py-2 font-semibold">Skills/Tools</h3>
                <div class="flex flex-wrap gap-x-6 text-lg">
                    {tools.map((tool) => {
                        return (
                            <p key={tool}>{tool}</p>
                        );
                    })}
                </div>
            </div>

            {/* second column - image */}
            <div class="lg:basis-1/2">
                <Image class="" src={src} alt={alt} width={width} height={height} />
            </div>

        </div>
    );
}