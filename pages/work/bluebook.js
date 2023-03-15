import PageTitle from '../../components/pagetitle'
import Image from 'next/image';
import Summary from '../../components/work/summary';
import Overview from '../../components/work/overview';

const summary = "Prioritizing the user experience is always a driving factor of mine—so when I was faced with the challenge of designing a microsite for the Massachusetts Bay Transportation Authority Blue Book, I was excited to put my technical, design, and organization skills to use to make navigating through large amounts of data more bearable."

const toolsList = [
  "Persona development",
  "Sketching & Wireframing",
  "Adobe XD"
]

const imgInfo = {
  src: "/images/work/mbta-bluebook/wireframes_3_page-0003.jpg",
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
    <div class="font-light text-lg leading-6 pb-24">

      <PageTitle title={"MBTA Blue Book Redesign"} />

      {/* first row - summary and preview photo */}
      <Summary
        summary={summary}
        toolsList={toolsList}
        imgInfo={imgInfo}
        hasLink={false}
      />

      {/* second row - overview and responsibilities */}
      <Overview
        overview={overview}
        responsibilities={responsibilities}
      />

    </div>
  );
}