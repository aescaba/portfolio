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
    <div class="font-light text-xl leading-8 pb-24">

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

        <div class="mb-4 text-xl">
          <h2 class="text-3xl py-4 font-semibold">Process</h2>
        </div>

        {/* row - image left + text right */}
        <div class="flex flex-col mb-10 lg:mb-20 lg:flex-row gap-8 lg:gap-12">
          <div class="lg:w-1/2">
            <Image class="" src="/images/work/capstone/capstone-sketches.jpg" alt="Early sketches of the proposed website flow" width={1280} height={720} />

          </div>

          <div class="lg:w-1/2 lg:mb-10 lg:self-center">
            <p>Early sketches of the website flow had the user choose a cookbook off a shelf. The
              book would open up to show the recipes, and clicking on certain photos or words
              triggered a popup with fun facts. The bookshelf would have trinkets lying on it that
              were relevant to how the food is prepared, cooked, or served. I eventually simplified
              this concept into one cookbook with interactive elements within and around it.
            </p>
          </div>
        </div>

        {/* row - full size image */}
        <div class="mb-10 lg:mb-20">
          <Image class="" src="/images/work/capstone/capstone-planning.jpg" alt="Early sketches of possible interactions; collection references and inspiration" width={1280} height={720} />
        </div>

        {/* row - text */}
        <div class="mb-10 lg:mb-20">
          <p class="mb-10">
            I initially turned to inspiration from both virtual and physical sources. Online
            references were interactive games that required the user to click and interact with
            objects on the page or virtual storybooks, and physical references were children&apos;s
            books that had interactive aspects like envelopes with letters inside or tabs to pull out.</p>
          <p>
            I wanted to insert a lot of personal stories in this to really convey how directly
            influenced I was by these dishes, and if I couldn&apos;t come up with a strong enough
            anecdotes to share, I would interview family members or other Filipino friends. I spent
            a few weeks narrowing down my target audience and researching existing media that catered
            towards that audience.
          </p>
        </div>

        {/* row - vertical + horizontal image */}
        <div class="flex flex-col mb-10 lg:mb-20 lg:flex-row gap-8 lg:gap-12">
          <div class="lg:w-1/2">
            <Image class="" src="/images/work/capstone/planning-excerpts.jpg" alt="Miscellaneous handwritten digital notes documenting the process of defining my target audience and look/feel" width={875} height={1078} />
            <p class="mt-2 text-lg leading-6">Excerpts from my early planning stages&mdash;defining my target audience and look/feel</p>
          </div>

          <div>
            <Image class="lg:w-1/2" src="/images/work/capstone/organizing.jpg" alt="Various lists of possible cookbook recipes and handwritten annotations" width={1405} height={1078} />
            <p class="mt-2 text-lg leading-6">Lists of possible cookbook recipes to include, narrowing them down, then organizing into sections</p>
          </div>
        </div>

        {/* row - text */}
        <div class="mb-10 lg:mb-20">
          <p class="mb-10">
            Once I had my cookbook structure finalized, I used a combination of online recipes,
            physical cookbooks, and phone calls with my parents to get the recipes. The project
            was put together using a combination of Adobe InDesign, iOS Procreate, and Adobe
            XD&mdash;I typeset the cookbook itself, drew all the annotations and illustrations
            by hand, and published the interactivity online.
          </p>
        </div>

      </div>

      {/* fourth section - preview */}
      {/* row - video embed*/}
      <div>
        <div class="mb-4 text-xl">
          <h2 class="text-3xl py-4 font-semibold">Preview</h2>
        </div>
        <div class="flex justify-center">
          <iframe class="w-full aspect-video" src="https://drive.google.com/file/d/1GQN2bRQYNej_zq_rWChd5c8c9StBEkqn/preview"  allow="autoplay"></iframe>
        </div>
      </div>

    </div>
  );
}