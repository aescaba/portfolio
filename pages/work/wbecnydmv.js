// library imports
import Image from 'next/image';

// component imports
import WorkPage from '../../components/work/workpage';
import WorkHeading from '../../components/work/workheading';
import Summary from '../../components/work/summary';
import Overview from '../../components/work/overview';
// import WorkRow from '../../components/work/workrow';

// image imports
import summaryPhoto from '../../public/images/work/wbecnydmv/WBEC_preview_1.jpg'
import responsiveMockup from '../../public/images/work/wbecnydmv/WBEC_responsive_mockup.png'

const summary = "Amidst restructuring and rebranding, WBEC Metro NY and Greater DMV needed a website redesign to blend their new brand identity into a modern and cohesive online presence."

const toolsList = [
  "WordPress",
  "HTML/CSS",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Search Engine Optimization"
]

const imgInfo = {
  summaryPhoto,
  alt: "Screenshot of 'About Us' page on WBEC Metro NY and Greater DMV website",
  width: "1280",
  height: "800"
}

const title = "Reimagining a website to better serve a growing network of women entrepreneurs"

const client = "WBEC Metro NY & Greater DMV"

export default function WBECNYDMV() {
  return (
    <WorkPage>

      {/* <Summary
        summary={summary}
        toolsList={toolsList}
        imgInfo={imgInfo}
        hasLink={true}
        link="https://www.wbecnydmv.org/"
        linkText="Visit Website"
      /> */}

      <WorkHeading
        title={title}
        client={client}
      />

      {/* row - full size image */}
      {/* <WorkRow> */}
        <Image class="" src={responsiveMockup} alt="Mockup of WBEC site on a desktop, laptop, tablet, and phone" placeholder="blur" width={1260} height={840} />
      {/* </WorkRow> */}
    </WorkPage>
  );
}