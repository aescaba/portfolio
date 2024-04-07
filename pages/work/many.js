// library imports
import Image from 'next/image';

// component imports
import WorkPage from '../../components/work/workpage';
import Summary from '../../components/work/summary';
import Overview from '../../components/work/overview';
// import WorkRow from '../../components/work/workrow';

// image imports
import summaryPhoto from '../../public/images/work/many/MANY_thumb.jpg'
import responsiveMockup from '../../public/images/work/many/MANY_Mockup.png'

const summary = "I designed and developed a microsite for the Museum Association of New York (MANY)’s “Voices and Votes” exhibit to enhance visitor engagement and provide easy access to relevant information."

const toolsList = [
  "WordPress",
  "HTML/CSS",
  "Search Engine Optimization"
]

const imgInfo = {
  summaryPhoto,
  alt: "Screenshot of 'About Us' page on WBEC Metro NY and Greater DMV website",
  width: "1280",
  height: "800"
}

const overview = [
  "Following a successful rebranding initiative, the Women's Business Enterprise Council of Metro NY and Greater DMV (WBEC NY DMV) sought to align their website with their updated brand identity. With the direction provided by our team's creative director, I translated the new sitemap and initial wireframes into a cohesive design for over 90 pages of the website.",
  "From conceptualization to execution, I oversaw the entire redesign process, ensuring a modern aesthetic, improved navigation, and more compelling calls to action. The result was a website that not only reflected the organization's fresh look but also enhanced user experience and engagement."
]

const responsibilities = [
  "Designed and built 90+ responsive web pages based off old content and new requests, adhering to brand guidelines and 2 initial page wireframes",
  "Organized and coordinated technical and design process efforts between myself, creative director, and account staff/client liaison",
  "Researched, tested, and implemented technical solutions to specific client requests",
  "Perform routine web maintenance: plugin updates, content updates, SEO audits"
]

export default function MANY() {
  return (
    <WorkPage
      title={"Museum Association of New York: \"Voices & Votes\""}>


      <Summary
        summary={summary}
        toolsList={toolsList}
        imgInfo={imgInfo}
        hasLink={true}
        link="https://www.agoranewyork.org/"
        linkText="Visit Website"
      />

      {/* <Overview
        overview={overview}
        responsibilities={responsibilities}
      /> */}
      <Image class="" src={responsiveMockup} alt="Mockup of MANY site on a desktop, laptop, tablet, and phone" placeholder="blur" width={1260} height={840} />

    </WorkPage>
  );
}