
export default function Overview({ overview, responsibilities }) {
    
    /*
        overview: array of strings - each string is a paragraph in the overview section
        responsibilities: array of strings - each string is a bullet point
    */

    return (
        <div class="mb-10 lg:mb-20">
            <div class="mb-4 text-xl">
                <h2 class="text-xl py-6 font-semibold uppercase">Overview</h2>
                {overview.map((paragraph) => {
                    return (
                        <p class="mb-6 text-base" key={paragraph}>{paragraph}</p>
                    );
                })}
            </div>

            <div class="mb-4 text-xl leading-8">
                <h2 class="text-xl py-6 font-semibold uppercase">Responsibilities</h2>
                <ul class="list-disc list-outside ml-6 space-y-2 text-base">
                    {responsibilities.map((point) => {
                        return (
                            <li key={point}>{point}</li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}