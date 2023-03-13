import PageTitle from '../../components/pagetitle'
import Image from 'next/image';
import Summary from '../../components/work/summary';
import Overview from '../../components/work/overview';

const summary = "Two of my biggest passions are food and culture—so for my final capstone project at Northeastern University, I combined the two interests to create a project that encapsulated who I was and what I loved to express."

const toolsList = [
  "Adobe InDesign",
  "Adobe XD",
  "Procreate"
]

const imgInfo = {
  src: "/images/work/capstone/lechon-page.jpg",
  alt: "Screenshot of cookbook capstone project, open to a page with an illustrated roast pig",
  width: "1280",
  height: "720"
}

const overview = [
  "For my final capstone project at Northeastern University, I wanted to incorporate two of my passions: food and Filipino culture. A personal project I had already been thinking of making was documenting family recipes, so my capstone was the perfect way to combine that idea with my interests.",
  "Inspired by video games that required the user to interact with objects to progress and facilitate discovery and physical children's books with interactive components, I designed a website prototype evoking the feel of a loved family cookbook."
]

const responsibilities = [
  "Illustrated 40+ full color assets and hand-wrote titles and annotations",
  "Self-taught Adobe XD prototyping software to achieve layout and interactivity goals",
  "Designed page layouts in Adobe InDesign",
  "Researched from various sources and mixed media such as interactive online games, children’s books, cookbooks, and food essay compilations"
]

export default function Capstone() {
  return (
    <div class="font-light text-xl leading-6 pb-24">

      <PageTitle title={"Capstone Project: Tastes of the Motherland"} />

      {/* first section - summary and preview photo */}
      <Summary
        summary={summary}
        toolsList={toolsList}
        imgInfo={imgInfo}
      />

      {/* second section - overview and responsibilities */}
      <Overview
        overview={overview}
        responsibilities={responsibilities}
      />

      {/* third section - process */}
      <div class="mb-10 lg:mb-20">

        <div class="mb-4 text-xl leading-8">
          <h2 class="text-3xl py-4 font-semibold">Process</h2>
        </div>

        {/* row - image left + text right */}
        <div class="flex flex-col mb-10 lg:mb-20 lg:flex-row gap-8 lg:gap-12">
          <div class="lg:w-1/2">
            <Image class="" src="/images/work/capstone/capstone-sketches.jpg" alt="Early sketches of the proposed website flow" width={1280} height={720} />
            <p class="mt-2 text-lg leading-6">Early sketches of the website flow had the user choose a book off a shelf stocked with meaningful trinkets.</p>
          </div>

          <div class="lg:w-1/2 lg:mb-10 lg:self-center">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
          </div>
        </div>

        {/* row - full size image */}
        <div class="mb-10 lg:mb-20">
          <Image class="" src="/images/work/capstone/capstone-planning.jpg" alt="Early sketches of possible interactions; collection references and inspiration" width={1280} height={720} />
          <p class="mt-2 text-lg leading-6">I researched children&apos;s books, cookbooks, and food essays for inspiration.</p>
        </div>

        {/* row - text */}
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
        </div>

        {/* row - vertical + horizontal image */}
        <div class="flex flex-col mb-10 lg:mb-20 lg:flex-row gap-8 lg:gap-12">
          <div class="lg:w-1/2">
            <Image class="" src="/images/work/capstone/planning-excerpts.jpg" alt="Early sketches of possible interactions; collection references and inspiration" width={875} height={1078} />
            <p class="mt-2 text-lg leading-6">Excerpts from my early planning stages</p>
          </div>

          <div>
            <Image class="lg:w-1/2" src="/images/work/capstone/organizing.jpg" alt="Early sketches of possible interactions; collection references and inspiration" width={1405} height={1078} />
            <p class="mt-2 text-lg leading-6">lorem ipsum</p>
          </div>
        </div>


      </div>


    </div>
  );
}