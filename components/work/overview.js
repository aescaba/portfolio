
export default function Overview({ overview, responsibilities }) {

    const overviewText = overview;
    const resps = responsibilities;

    return (
        <div class="mb-10 lg:mb-20">
            <div class="mb-4 text-xl">
                <h2 class="text-3xl py-4 font-semibold">Overview</h2>
                {overviewText.map((paragraph) => {
                    return (
                        <p class="mb-6">{paragraph}</p>
                    );
                })}
            </div>

            <div class="mb-4 text-xl leading-8">
                <h2 class="py-4 font-semibold">Responsibilities</h2>
                {resps.map((point) => {
                    return (
                        <ul class="list-disc list-outside ml-6">
                            <li>{point}</li>
                        </ul>
                    );
                })}
            </div>
        </div>
    );
}