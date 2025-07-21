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
  alt: "Screenshot of homepage on MANY Agora New York website",
  width: "1280",
  height: "800"
}

const overview = [
  "The Museum Association of New York lacked a centralized, user-friendly digital presence for their Voices and Votes: Democracy in America | A New Agora for New York project. Only existing as a single page as part of a broader website, MANY needed Agora New York to have its own platform to introduce the project’s mission, spark curiosity, and turn website visitors into active participants.  Without a clear path to promote events or foster community among history enthusiasts and museum-goers, opportunities to build connections were being lost.",
  "The goals were multifaceted: build an intuitive, engaging site from scratch, add interactive elements to boost user involvement, drive online traffic to in-person events, and lay the foundation for a vibrant, enthusiastic community. The solution also needed to empower the client with the ability to manage and update content independently after launch."
]

const responsibilities = [
  "CMS Setup using WordPress, allowing full customization and scalability to meet any and all evolving needs",
  "Organized and coordinated technical and design process efforts between myself, creative director, and account staff/client liaison",
  "Researched, tested, and implemented technical solutions to specific client requests"
]

export default function MANY() {
  return (
    <WorkPage
      title={"Museum Association of New York: \"Voices & Votes\""}>


      <Summary
        summary={summary}
        toolsList={toolsList}
        imgInfo={imgInfo}
        hasLink={false}
      />

      <Overview
        overview={overview}
        responsibilities={responsibilities}
      />
      <Image class="" src={responsiveMockup} alt="Mockup of MANY site on a desktop, laptop, tablet, and phone" placeholder="blur" width={1260} height={840} />

    </WorkPage>
  );
}