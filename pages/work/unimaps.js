import WorkPage from '../../components/work/workpage';
import Summary from '../../components/work/summary';
import Overview from '../../components/work/overview';

// image imports
import summaryPhoto from '../../public/images/work/mbta-unimaps/mbta-uni-maps-crop.png'

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

    </WorkPage>
  );
}