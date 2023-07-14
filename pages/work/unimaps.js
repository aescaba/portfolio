// library imports
import Image from 'next/image';

// component imports
import WorkPage from '../../components/work/workpage';
import WorkSection from '../../components/work/worksection';
import WorkRow from '../../components/work/workrow';
import Summary from '../../components/work/summary';
import Overview from '../../components/work/overview';

// image imports
import summaryPhoto from '../../public/images/work/mbta-unimaps/mbta-uni-maps-crop.png';
import personasLevelsGroup from '../../public/images/work/mbta-unimaps/personas-levels-group.png';
import mapsDrafts from '../../public/images/work/mbta-unimaps/maps-drafts.png'

const summary = "As an advocate for accessible public transit, getting to co-op at the Massachusetts Bay Transportation Authority was an incredible opportunity. I loved getting to use my personal experiences as a college student and Boston resident to drive my inspiration for this marketing concept."

const toolsList = [
  "Procreate",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Persona Development",
  "Sketching & Wireframing",
  "User Interviews & Crowdsourcing"
]

const imgInfo = {
  summaryPhoto,
  alt: "Interest-Based Map of Boston Preview, a map of the Greater Boston Area with neighborhoods labeled and outlined.",
  width: "1280",
  height: "800"
}

const overview = [
  "During my time at MassDOT/MBTA’s Office of Performance Management and Innovation, in an effort to promote train ridership to university students, I wanted to focus on how the T was an accessible and affordable means of transportation. I developed a system of interest-based maps to highlight how students can use the T to reach notable destinations in Greater Boston and surrounding areas. My team and I took an approach that focused on students with different levels of experience with the T and the city of Boston—we aimed to present the T as a connector to Boston’s different cultural attractions."
]

const responsibilities = [
  "Developed three distinct user personas to focus design efforts around",
  "Researched and collected input on areas of interest in Greater Boston neighborhoods relevant to university student/young professional interests and habits",
  "Sketched maps of different scopes to incorporate students’ locations, common travel routes, and places of interest",
  "Coordinated meetings and analyzed group findings and discussions to achieve project goals",
  "Assembled portfolio of process, sketches, and final drafts to be saved for potential future use"
]

export default function UniMaps() {
  return (
    <WorkPage title={"MBTA University Marketing: Interest-Based Maps"}>

      {/* first row - summary and preview photo */}
      <Summary
        summary={summary}
        toolsList={toolsList}
        imgInfo={imgInfo}
        hasLink={true}
        link="https://drive.google.com/file/d/1Mn1ZaLUWeAT9z04bvnlV_ln-Hf0TZamY/view?usp=sharing"
        linkText="View Proposal"
      />

      {/* second row - overview and responsibilities */}
      <Overview
        overview={overview}
        responsibilities={responsibilities}
      />

      <WorkSection>
        <div class="mb-4 text-xl">
          <h2 class="text-3xl py-4 font-semibold">Process</h2>
        </div>

        {/* row - image left + text right */}
        <WorkRow>
          <div class="lg:w-1/2">
            <Image class="" src={personasLevelsGroup} alt="Three user personas and notes on three information levels" placeholder="blur" width={529} height={441} />

          </div>

          <div class="lg:w-1/2 lg:mb-10 lg:self-center">
            <p>I was initially presented with the challenge to come up with a marketing campaign to increase ridership
              amongst university students in Boston. I chose to focus on <span class="font-bold">what entices folks to ride the T </span>
              and how to market that information to the intended audiences. The idea evolved in creating a
              <span class="font-bold"> series of maps </span>that highlighted areas of interest.</p>
            <p>&nbsp;</p>
            <p>
              Three different personas were then created to develop different map campaigns around, targeting riders&apos; specific
              needs when it came to travel around the Greater Boston Area.
            </p>
            <ul class="list-disc list-outside ml-6">
              <li><span class="font-bold">"Level One" Map:</span> For the student brand new to the Boston area</li>
              <li><span class="font-bold">“Level Two” Map:</span> For the student comfortable with travel to places they frequent</li>
              <li><span class="font-bold">“Level Three” Map:</span> For the young person who considers themself an expert traveling Boston proper</li>
            </ul>
          </div>
        </WorkRow>

                {/* row - full size image */}
                <WorkRow>
          <Image class="" src={mapsDrafts} alt="Three drafts for three different map levels" placeholder="blur" width={1286} height={344} />
          {/* <p class="mt-2 text-lg leading-6">Sample subpage design options</p> */}
        </WorkRow>

        {/* row - 2 horizontal images */}
        <WorkRow>
          <div class="">
            {/* <Image class="" src={planning2} alt="Rough pencil sketches of potential webpage organization" placeholder="blur" width={1643} height={1088} /> */}
            <p class="mt-2 text-lg leading-6">Initial sketches trying to figure out a way to display content</p>
          </div>

          <div>
            {/* <Image class="" src={planning3} alt="Pencil sketches of potential landing pages and a subpage" placeholder="blur" width={1643} height={1088} /> */}
            <p class="mt-2 text-lg leading-6">Slightly more refined pencil sketches of two landing page options and a subpage</p>
          </div>
        </WorkRow>

        {/* row - text left + image right */}
        <WorkRow>
          <div class="lg:w-1/3 lg:mb-10 lg:self-center">
            <p>Wireframes for the main landing page, which could be navigated according to data <span class="font-bold">topic</span> or transit <span class="font-bold">mode</span>.
              This was based on the notion that journalists or researchers could be specifically looking for data on one topic from all modes of transit, or all the data regarding one specific mode.</p>
          </div>

          <div class="lg:w-2/3">
            {/* <Image class="" src={wireframesModeTopic} alt="Two wireframes of landing page layouts" placeholder="blur" width={1186} height={631} /> */}
          </div>
        </WorkRow>

        {/* row - text */}
        {/* 
        TODO:
          using a section instead of a row so it doesnt go to two columns - redo this to be cleaner/consistent later 
        */}
        <WorkSection>
          <p class="mb-10">
            Upon further research into the technologies available to my team as a subunit of a government agency, I found
            that our version of PHP was too outdated to create what we wanted to accomplish&mdash;it would take requests to the
            IT department that affected more websites than our own and an approval and testing process that took longer
            than my co-op duration to be able to build a new microsite.
          </p>
          <p>
            With that in mind, we decided to pivot our approach and build an open data portal using a service that was already
            available to us: ArcGIS. ArcGIS allows you to create a live open data portal and design the look and feel of the
            site. Though I couldn&apos;t be granted access to handle the design myself, my wireframes were given to the appropriate
            department, and elements of my designs were used in the final product.
          </p>
        </WorkSection>



      </WorkSection>

      {/* preview */}
      {/* <WorkSection>
        <div class="mb-4 text-xl">
          <h2 class="text-3xl py-4 font-semibold">Preview</h2>
          <a href="https://mbta-massdot.opendata.arcgis.com/" target="_blank" rel="noreferrer" aria-label="View MBTA Open Data Portal">
            <button class="flex mt-6 items-center text-lg font-semibold outline outline-2 rounded-full px-6 py-2 transition ease-in-out delay-[25ms] hover:bg-white hover:text-black hover:outline-0 text-xl font-bold hover:bg-gradient-to-l from-orange-300 via-amber-300 to-blue-400">
              View MBTA Open Data Portal<HiOutlineExternalLink class="inline ml-2" />
            </button>
          </a>
        </div>
        <div class="flex justify-center">
          <Image class="" src={openDataPortal} alt="Screenshot of the MBTA Open Data Portal" placeholder="blur" width={1920} height={2396} />
        </div>
      </WorkSection> */}

    </WorkPage>
  );
}