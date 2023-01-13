import PageTitle from '../../components/pagetitle'

export default function Capstone() {
  return (
    <div class="font-light text-lg leading-6 pb-24">
      <PageTitle title={"Capstone Project: Tastes of the Motherland"}/>

      <div class="mb-14"> 
      {/* insert photo */}
      <p class="text-2xl my-10 font-medium text-blue-300 italic">preview coming soon</p>

        <div class="mb-4">
          <h2 class="text-2xl py-2 font-semibold">Overview</h2>
          <p>For my final capstone project at Northeastern University, I wanted to incorporate two of my passions: food and Filipino culture. A personal project I had already been thinking of making was documenting family recipes, so my capstone was the perfect way to combine that idea with my interests.
          </p>
          <p class="mt-2">Inspired by video games that required the user to interact with objects to progress and facilitate discovery and physical children&apos;s books with interactive components, I designed a website prototype evoking the feel of a loved family cookbook.
          </p>
        </div>

        {/* <div>
          <h3 class="text-xl py-2 font-semibold">Skills/Tools</h3>
          <div class="flex space-x-6">
            <p>Skill One</p>
            <p>Skill Two</p>
            <p>Another Skill</p>
          </div>
        </div> */}
      </div>

      <div class="mb-4">
          <h2 class="text-xl py-2 font-semibold">Responsibilities</h2>
          <ul class="list-disc list-outside ml-6">
            <li>Self-taught Adobe XD prototyping software to achieve layout and interactivity goals</li>
            <li>Illustrated 40+ full color assets and hand-wrote titles and annotations for each page of cookbook</li>
            <li>Designed page layouts in Adobe InDesign</li>
            <li>Researched from various sources and mixed media such as interactive online games, children&apos;s books, cookbooks, and food essay compilations</li>
          </ul>
        </div>

    </div>
  );
}