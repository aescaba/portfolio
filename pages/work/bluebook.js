import PageTitle from '../../components/pagetitle'

export default function UniMaps() {
  return (
    <div class="font-light text-lg leading-6">
      <PageTitle title={"MBTA Blue Book Redesign"}/>

      <div class="mb-14"> 
      {/* insert photo */}
        <div class="mb-4">
          <h2 class="text-2xl py-2 font-semibold">Overview</h2>
          <p>The MBTA has published several editions of the MBTA Ridership and Service Statistics, also known as the “Blue Book”, since 1988. The Blue Book contains a collection of MBTA data such as ridership, bus speeds, track distances, fleet rosters, and more, but its updates have been inconsistent and its lengthy PDF format was inconvenient to navigate.
          </p>
          <p class='mt-2'>One of my first projects at MassDOT/MBTA&apos;s Office of Performance Management and Innovation, another co-op and I worked on converting the PDF into a website. While he worked on the data organization aspect of the project, I led the redesign process of transforming the Blue Book PDF into an interactive website that was easy to navigate for its main userbase.</p>
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