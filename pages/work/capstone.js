// library imports
import Image from 'next/image';

//component imports
import WorkPage from '../../components/work/workpage';
import WorkSection from '../../components/work/worksection';
import WorkRow from '../../components/work/workrow';
import Summary from '../../components/work/summary';
import Overview from '../../components/work/overview';

// image imports
import summaryPhoto from '../../public/images/work/capstone/lechon-page.jpg'
import capstoneSketches from '../../public/images/work/capstone/capstone-sketches.jpg';
import capstonePlanning from '../../public/images/work/capstone/capstone-planning.jpg';
import planningExcerpts from '../../public/images/work/capstone/planning-excerpts.jpg';
import organizing from '../../public/images/work/capstone/organizing.jpg';

const summary = "Two of my biggest passions are food and culture—so for my final capstone project at Northeastern University, I combined the two interests to create a project that encapsulated who I was and what I loved to express."

const toolsList = [
  "Adobe InDesign",
  "Adobe XD",
  "Procreate"
]

const imgInfo = {
  summaryPhoto,
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
    <WorkPage
      title={"Capstone Project: Tastes of the Motherland"}>

      {/* first section - summary and preview photo */}
      <Summary
        summary={summary}
        toolsList={toolsList}
        imgInfo={imgInfo}
        hasLink={true}
        link="http://bit.ly/aescaba_capstone"
        linkText="View Project"
      />

      <a class="text-amber-400 transition ease-in-out delay-100 hover:text-orange-400 font-semibold" href="https://drive.google.com/file/d/146VCS8Jz-Py_qIGlt_TLYfS-ULiYQb4_/view?usp=sharing" target="_blank" rel="noreferrer" aria-label="View full process documentation">
        View full process documentation	&#8594;
      </a>

      {/* second row - overview and responsibilities */}
      <Overview
        overview={overview}
        responsibilities={responsibilities}
      />

      {/* third section - process */}
      <WorkSection>

        <div class="mb-4 text-xl">
          <h2 class="text-3xl py-4 font-semibold">Process</h2>
        </div>

        {/* row - image left + text right */}
        <WorkRow>
          <div class="lg:w-1/2">
            <Image class="" src={capstoneSketches} alt="Early sketches of the proposed website flow" placeholder="blur" width={1280} height={720} />

          </div>

          <div class="lg:w-1/2 lg:mb-10 lg:self-center">
            <p>Early sketches of the website flow had the user choose a cookbook off a shelf. The
              book would open up to show the recipes, and clicking on certain photos or words
              triggered a popup with fun facts. The bookshelf would have trinkets lying on it that
              were relevant to how the food is prepared, cooked, or served. I eventually simplified
              this concept into one cookbook with interactive elements within and around it.
            </p>
          </div>
        </WorkRow>

        {/* row - full size image */}
        <WorkRow>
          <Image class="" src={capstonePlanning} alt="Early sketches of possible interactions; collection references and inspiration" placeholder="blur" width={1280} height={720} />
        </WorkRow>

        {/* row - text */}
        {/* 
        TODO:
          using a section instead of a row so it doesnt go to two columns - redo this to be cleaner/consistent later 
        */}
        <WorkSection>
          <p class="mb-10">
            I initially turned to inspiration from both virtual and physical sources. Online
            references were interactive games that required the user to click and interact with
            objects on the page or virtual storybooks, and physical references were children&apos;s
            books that had interactive aspects like envelopes with letters inside or tabs to pull out.
          </p>
          <p>
            I wanted to insert a lot of personal stories in this to really convey how directly
            influenced I was by these dishes, and if I couldn&apos;t come up with a strong enough
            anecdotes to share, I would interview family members or other Filipino friends. I spent
            a few weeks narrowing down my target audience and researching existing media that catered
            towards that audience.
          </p>
        </WorkSection>

        {/* row - vertical + horizontal image */}
        <WorkRow>
          <div class="lg:w-1/2">
            <Image class="" src={planningExcerpts} alt="Miscellaneous handwritten digital notes documenting the process of defining my target audience and look/feel" placeholder="blur" width={875} height={1078} />
            <p class="mt-2 text-lg leading-6">Excerpts from my early planning stages&mdash;defining my target audience and look/feel</p>
          </div>

          <div>
            <Image class="lg:w-1/2" src={organizing} alt="Various lists of possible cookbook recipes and handwritten annotations" placeholder="blur" width={1405} height={1078} />
            <p class="mt-2 text-lg leading-6">Lists of possible cookbook recipes to include, narrowing them down, then organizing into sections</p>
          </div>
        </WorkRow>

        {/* row - text */}
        <WorkRow>
          <p class="mb-10">
            Once I had my cookbook structure finalized, I used a combination of online recipes,
            physical cookbooks, and phone calls with my parents to get the recipes. The project
            was put together using a combination of Adobe InDesign, iOS Procreate, and Adobe
            XD&mdash;I typeset the cookbook itself, drew all the annotations and illustrations
            by hand, and published the interactivity online.
          </p>
        </WorkRow>

      </WorkSection>

      {/* fourth section - preview */}
      <WorkSection>
        <div class="mb-4 text-xl">
          <h2 class="text-3xl py-4 font-semibold">Preview</h2>
        </div>
        <div class="flex justify-center">
          <iframe class="w-full aspect-video" src="https://drive.google.com/file/d/1GQN2bRQYNej_zq_rWChd5c8c9StBEkqn/preview" allow="autoplay"></iframe>
        </div>
      </WorkSection>

    </WorkPage>
  );
}