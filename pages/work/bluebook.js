// library imports
import Image from 'next/image';

// component imports
import WorkPage from '../../components/work/workpage';
import WorkSection from '../../components/work/worksection';
import WorkRow from '../../components/work/workrow';
import Summary from '../../components/work/summary';
import Overview from '../../components/work/overview';

// image imports
import summaryPhoto from '../../public/images/work/mbta-bluebook/wireframes_3_page-0003.jpg';
import personas from '../../public/images/work/mbta-bluebook/personas.jpg';
import planning2 from '../../public/images/work/mbta-bluebook/planning2.png';
import planning3 from '../../public/images/work/mbta-bluebook/planning3.png';
import wireframesModeTopic from '../../public/images/work/mbta-bluebook/wireframes-mode-topic.jpg';
import wireframesSubpages from '../../public/images/work/mbta-bluebook/wireframes-subpages.jpg';

const summary = "Prioritizing the user experience is always a driving factor of mine—so when I was faced with the challenge of designing a microsite for the Massachusetts Bay Transportation Authority Blue Book, I was excited to put my technical, design, and organization skills to use to make navigating through large amounts of data more bearable."

const toolsList = [
  "Persona development",
  "Sketching & Wireframing",
  "Adobe XD"
]

const imgInfo = {
  summaryPhoto,
  alt: "Screenshot of a wireframed webpage for MBTA Blue Book microsite",
  width: "4000",
  height: "2932"
}

const overview = [
  "The MBTA has published several editions of the MBTA Ridership and Service Statistics, also known as the “Blue Book”, since 1988. The Blue Book contains a collection of MBTA data such as ridership, bus speeds, track distances, fleet rosters, and more, but its updates have been inconsistent and its lengthy PDF format was inconvenient to navigate.",
  "One of my first projects at MassDOT/MBTA’s Office of Performance Management and Innovation, another co-op and I worked on converting the PDF into a website. While he worked on the data organization aspect of the project, I led the redesign process of transforming the Blue Book PDF into an interactive website that was easy to navigate for its main userbase."
]

const responsibilities = [
  "Identified four groups of target audiences and developed user personas",
  "Led design efforts and technical research as sole designer and one of two developers on team",
  "Designed potential screens and flow of microsite with sketches and interactive wireframes",
  "Analyzed technical requirements for hosting desired microsite versus available hosting environment and capabilities"
]

export default function BlueBook() {
  return (
    <WorkPage
      title={"MBTA Blue Book Redesign"} >

      {/* first row - summary and preview photo */}
      <Summary
        summary={summary}
        toolsList={toolsList}
        imgInfo={imgInfo}
        hasLink={true}
        link="https://mbta-massdot.opendata.arcgis.com/"
        linkText="View Open Data Portal"
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
          <div class="lg:w-2/3">
            <Image class="" src={personas} alt="Four different user personas" placeholder="blur" width={1280} height={720} />

          </div>

          <div class="lg:w-1/3 lg:mb-10 lg:self-center">
            <p>Four different user types I identified for the MBTA Blue Book project, the first two being prioritized:</p>
            <ul class="list-disc list-outside ml-6">
              <li><span class="font-bold">User A:</span> Researcher</li>
              <li><span class="font-bold">User B:</span> Transit Agency Employee</li>
              <li><span class="font-bold">User C:</span> Journalist</li>
              <li><span class="font-bold">User D:</span> General Public</li>
            </ul>
          </div>
        </WorkRow>

        {/* row - 2 horizontal images */}
        <WorkRow>
          <div class="">
            <Image class="" src={planning2} alt="Rough pencil sketches of potential webpage organization" placeholder="blur" width={1643} height={1088} />
            <p class="mt-2 text-lg leading-6">Initial sketches trying to figure out a way to display content</p>
          </div>

          <div>
            <Image class="" src={planning3} alt="Pencil sketches of potential landing pages and a subpage" placeholder="blur" width={1643} height={1088} />
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
            <Image class="" src={wireframesModeTopic} alt="Two wireframes of landing page layouts" placeholder="blur" width={1186} height={631} />
          </div>
        </WorkRow>

        {/* row - full size image */}
        <WorkRow>
          <Image class="" src={wireframesSubpages} alt="Four wireframes of different types of Blue Book subpages" placeholder="blur" width={1197} height={1078} />
          {/* <p class="mt-2 text-lg leading-6">Sample subpage design options</p> */}
        </WorkRow>

      </WorkSection>


    </WorkPage>
  );
}