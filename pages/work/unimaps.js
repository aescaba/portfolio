// library imports
import Image from 'next/image';
import { HiOutlineExternalLink } from 'react-icons/hi'

// component imports
import WorkPage from '../../components/work/workpage';
import WorkSection from '../../components/work/worksection';
import WorkRow from '../../components/work/workrow';
import Summary from '../../components/work/summary';
import Overview from '../../components/work/overview';

// image imports
import summaryPhoto from '../../public/images/work/mbta-unimaps/mbta-uni-maps-crop.png';
import personasLevelsGroup from '../../public/images/work/mbta-unimaps/personas-levels-group.png';
import mapsDrafts from '../../public/images/work/mbta-unimaps/maps-drafts.png';
import levelOne from '../../public/images/work/mbta-unimaps/Level1.png';
import levelTwo from '../../public/images/work/mbta-unimaps/Level2.png';
import levelThree from '../../public/images/work/mbta-unimaps/Level3.png';

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
        linkText="View Full Proposal"
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
              <li><span class="font-bold">&ldquo;Level One&rdquo; Map:</span> For the student brand new to the Boston area</li>
              <li><span class="font-bold">&ldquo;Level Two&rdquo; Map:</span> For the student comfortable with travel to places they frequent</li>
              <li><span class="font-bold">&ldquo;Level Three&rdquo; Map:</span> For the young person who considers themself an expert traveling Boston proper</li>
            </ul>
          </div>
        </WorkRow>

                {/* row - full size image */}
                <WorkRow>
                  <div>
          <Image class="" src={mapsDrafts} alt="Three drafts for three different map levels" placeholder="blur" width={1286} height={344} />
          <p class="mt-2 text-lg leading-6">Some drafts for the three map levels. Different versions of the Levels One and Two maps could be 
          developed: Level One maps would be interest based (i.e. cultural attractions, cuisines, parks and outdoor activities); separate Level
           Two maps could represent unique neighborhoods. Once these ideas were defined, my colleagues and I polled our networks to get 
           locals&apos; ideas of what attractions should be highlighted on each map.</p>
           </div>
        </WorkRow>
      </WorkSection>

      {/* preview */}
      <WorkSection>
        <div class="mb-4 text-xl">
          <h2 class="text-3xl py-4 font-semibold">Preview</h2>
          <a href="https://drive.google.com/file/d/1Mn1ZaLUWeAT9z04bvnlV_ln-Hf0TZamY/view?usp=sharing" target="_blank" rel="noreferrer" aria-label="View Full Proposal">
            <button class="flex mt-6 items-center text-lg font-semibold outline outline-2 rounded-full px-6 py-2 transition ease-in-out delay-[25ms] hover:bg-white hover:text-black hover:outline-0 text-xl font-bold hover:bg-gradient-to-l from-orange-300 via-amber-300 to-blue-400">
              View Full Proposal<HiOutlineExternalLink class="inline ml-2" />
            </button>
          </a>
        </div>
        <div class="">
        <div class="flex justify-center mb-10">
          <Image class="" src={levelOne} alt="Level One map of the Greater Boston area, highlighting five Boston neighborhoods" placeholder="blur" width={4426} height={2573} />
        </div>
        <div class="flex justify-center mb-10">
          <Image class="" src={levelTwo} alt="Level Two map of the Greater Boston area, highlighting the Cambridge, Somerville, and Medford areas" placeholder="blur" width={4407} height={2559} />
        </div>
        <div class="flex justify-center">
          <Image class="" src={levelThree} alt="Level Three map of the Greater Boston area, highlighting Commuter Rail routes throughout Eastern Massachusetts" placeholder="blur" width={4484} height={2577} />
        </div>
        </div>
      </WorkSection>

    </WorkPage>
  );
}