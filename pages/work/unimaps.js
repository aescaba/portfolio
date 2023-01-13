import PageTitle from '../../components/pagetitle'

export default function UniMaps() {
  return (
    <div class="font-light text-lg leading-6 pb-24">
      <PageTitle title={"MBTA University Marketing: Interest-Based Maps"}/>

      <div class="mb-14"> 
      {/* insert photo */}
      <p class="text-2xl my-10 font-medium text-blue-300 italic">preview coming soon</p>

        <div class="mb-4">
          <h2 class="text-2xl py-2 font-semibold">Overview</h2>
          <p>During my time at MassDOT/MBTA&apos;s Office of Performance Management and Innovation, in an effort to promote train ridership to university students, I wanted to focus on how the T was an accessible and affordable means of transportation. I developed a system of interest-based maps to highlight how students can use the T to reach notable destinations in Greater Boston and surrounding areas. My team and I took an approach that focused on students with different levels of experience with the T and the city of Boston&mdash;we aimed to present the T as a connector to Boston&apos;s different cultural attractions.
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
            <li>Developed three distinct user personas to focus design efforts around</li>
            <li>Researched and collected input on areas of interest in Greater Boston neighborhoods relevant to university student/young professional interests and habits</li>
            <li>Sketched maps of different scopes to incorporate students&apos; locations, common travel routes, and places of interest</li>
            <li>Coordinated meetings and analyzed group findings and discussions to achieve project goals</li>
            <li>Assembled portfolio of process, sketches, and final drafts to be saved for potential future use</li>
          </ul>
        </div>

    </div>
  );
}