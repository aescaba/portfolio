import PageTitle from '../components/pagetitle'
import WorkListing from '../components/worklisting'
import Image from 'next/image'

// image imports
import bbgg from '../public/images/work/bbgg/bbgg-thumb.jpg'
import capstone from '../public/images/work/capstone/capstone-thumb.jpg'
import unimaps from '../public/images/work/mbta-unimaps/mbta-unimaps-thumb.jpg'
import bluebook from '../public/images/work/mbta-bluebook/mbta-bluebook-thumb.jpg'
import portfolioPreview from '../public/images/work/portfolio-preview-thumb.jpg'
import gallerifyPreview from '../public/images/work/gallerify-preview-thumb.jpg'


export default function Work() {
  return (
    <div class="">

      <PageTitle title={"Work"} />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 pb-24">

        {/* CHANGE THIS TO BE A FEED LATER ? */}

        {/* project one */}
        <WorkListing
          imgsrc={bbgg}
          path={"bbgg"}
          title={"BBG&G Integrated Marketing"}
          description={"Projects as Mid-Level Web Developer/Designer"}>
        </WorkListing>

        {/* project two */}
        <WorkListing
          imgsrc={capstone}
          path={"capstone"}
          title={"Tastes of the Motherland"}
          description={"Northeastern University capstone project: an interactive website prototype"}>
        </WorkListing>

        {/* project three */}
        <WorkListing
          imgsrc={unimaps}
          path={"unimaps"}
          title={"MBTA University Marketing: Interest-Based Maps"}
          description={"Outreach plan to promote MBTA ridership to university students and young professionals"}>
        </WorkListing>

        {/* project four */}
        <WorkListing
          imgsrc={bluebook}
          path={"bluebook"}
          title={"MBTA Blue Book Redesign"}
          description={"Microsite design to improve readability of and broaden access to MBTA data pool"}>
        </WorkListing>

      </div>

      <h2 class="text-2xl mb-12 font-medium">In Progress</h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 pb-24">
        {/* portfolio preview */}
        <div class="">
          <div class="mb-4 lg:mb-6">
            <Image alt="Blurred photo preview of portfolio project asset" src={portfolioPreview} placeholder="blur" width={1280} height={800} />
          </div>

          <div class="font-bold text-xl">
            Portfolio Website
          </div>
        </div>

                {/* gallerify preview */}
                <div class="">
          <div class="mb-4 lg:mb-6">
            <Image alt="Blurred photo preview of Gallerify project asset" src={gallerifyPreview} placeholder="blur" width={1280} height={800} />
          </div>

          <div class="font-bold text-xl">
            Gallerify
          </div>
        </div>
      </div>

    </div>
  )
}
