import PageTitle from '../../components/pagetitle'
import Summary from '../../components/work/summary';
import Overview from '../../components/work/overview';

const summary = "I love taking a design concept and seeing how far I can run with it, so designing and building website pages for my marketing agency’s client was a challenge I was excited to take on."

const toolsList = [
  "WordPress",
  "HTML/CSS",
  "Adobe Photoshop",
  "Adobe Illustrator"
]

const imgInfo = {
  src: "/images/work/wbecnydmv/WBEC-3-crop-2.png",
  alt: "Screenshot of 'About Us' page on WBEC Metro NY and Greater DMV website",
  width: "1280",
  height: "800"
}

const overview = [
  "Coming off the heels of a successful rebranding, the Women’s Business Enterprise Council of Metro NY and Greater DMV (WBEC NY DMV) wanted to update their website to reflect their fresh new look and feel. After my team’s creative director developed the new sitemap and a couple of wireframes, I designed the remaining 90+ pages based off of these concepts and handled the new website build. The result was a website with a modern look, easier navigation, and clearer calls to action."
]

const responsibilities = [
  "Designed and built 90+ responsive web pages based off old content and new requests, adhering to brand guidelines and 2 initial page wireframes",
  "Organized and coordinated technical and design process efforts between myself, creative director, and account staff/client liaison",
  "Researched, tested, and implemented technical solutions to specific client requests"
]

export default function WBECNYDMV() {
  return (
    <div class="font-light text-lg leading-6 pb-24">
      <PageTitle title={"WBEC Metro NY & Greater DMV"} />

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
    </div>
  );
}