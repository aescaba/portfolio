import PageTitle from '../../components/pagetitle'
import Image from 'next/image';

export default function Capstone() {
  return (
    <div class="font-light text-xl leading-6 pb-24">
      <PageTitle title={"Capstone Project: Tastes of the Motherland"}/>
      
      {/* first row - summary and preview photo */}
      <div class="flex flex-col lg:flex-row lg:gap-x-8 mb-20">
        {/* <p class="text-2xl my-10 font-medium text-blue-300 italic">preview coming soon</p> */}

      {/* first column - summary */}
        <div class="mb-8 lg:mb-4 lg:basis-1/2">
            <p class="text-[1.75rem] leading-9 font-thin">Two of my biggest passions are food and culture&mdash;so for my final capstone project at Northeastern University, I combined the two interests to create a project that encapsulated who I was and what I loved to express.
            </p>

            <h3 class="text-xl mt-10 py-2 font-semibold">Skills/Tools</h3>
            <div class="flex space-x-6 text-lg">
              <p>Adobe InDesign</p>
              <p>Adobe XD</p>
              <p>Procreate</p>
            </div>
        </div>

      {/* second column - image */}
          <div class="lg:basis-1/2">
            <Image class="" src="/images/work/capstone/lechon-page.jpg" alt="Screenshot of cookbook capstone project, open to a page with an illustrated roast pig" width={1280} height={720}/>
          </div>

      </div>

    {/* second row */}
    <div class="mb-10 lg:mb-20">
      <div class="mb-4 text-xl leading-8">
        <h2 class="text-3xl py-4 font-semibold">Overview</h2>
        <p>For my final capstone project at Northeastern University, I wanted to incorporate two of my passions: food and Filipino culture. A personal project I had already been thinking of making was documenting family recipes, so my capstone was the perfect way to combine that idea with my interests.
        </p>
        <p class="mt-6">Inspired by video games that required the user to interact with objects to progress and facilitate discovery and physical children&apos;s books with interactive components, I designed a website prototype evoking the feel of a loved family cookbook.
        </p>
      </div>

      <div class="mb-4 text-xl leading-8">
          <h2 class="py-4 font-semibold">Responsibilities</h2>
          <ul class="list-disc list-outside ml-6">
            <li>Illustrated 40+ full color assets and hand-wrote titles and annotations</li>
            <li>Self-taught Adobe XD prototyping software to achieve layout and interactivity goals</li>
            <li>Designed page layouts in Adobe InDesign</li>
            <li>Researched from various sources and mixed media such as interactive online games, children&apos;s books, cookbooks, and food essay compilations</li>
          </ul>
      </div>
    </div>

    {/* third row */}
    <div class="mb-10 lg:mb-20">
      <div class="mb-4 text-xl leading-8">
        <h2 class="text-3xl py-4 font-semibold">Process</h2>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <Image class="" src="/images/work/capstone/capstone-sketches.jpg" alt="Early sketches of the proposed website flow" width={1280} height={720}/>
          <p class="mt-2 text-lg leading-6">Early sketches of the website flow had the user choose a book off a shelf stocked with meaningful trinkets.</p>
        </div>

        <div>
          <Image class="" src="/images/work/capstone/capstone-planning.jpg" alt="Early sketches of possible interactions; collection references and inspiration" width={1280} height={720}/>
          <p class="mt-2 text-lg leading-6">I researched children's books, cookbooks, and food essays for inspiration.</p>
        </div>
      </div>
    </div>

    </div>
  );
}