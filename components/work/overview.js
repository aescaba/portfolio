
export default function Overview({ overview, responsibilities }) {

    // const overviewText = overview;
    // const resps = responsibilities;

    return (
        <div class="mb-10 lg:mb-20">
            <div class="mb-4 text-xl">
                <h2 class="text-3xl py-4 font-semibold">Overview</h2>
                {overview.map((paragraph) => {
                    return (
                        <p class="mb-6" key={paragraph}>{paragraph}</p>
                    );
                })}
            </div>

            <div class="mb-4 text-xl leading-8">
                <h2 class="py-4 font-semibold">Responsibilities</h2>
                <ul class="list-disc list-outside ml-6">
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