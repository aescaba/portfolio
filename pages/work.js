import PageTitle from '../components/pagetitle'
import WorkListing from '../components/worklisting'
import Image from 'next/image'

// image imports
import bbggIntranet from '../public/images/work/bbgg-intranet/BBGG Intranet_Cover.jpg'
import wbec from '../public/images/work/wbecnydmv/WBEC_Cover.png'
import capstone from '../public/images/work/capstone/capstone_thumb.jpg'
import bluebook from '../public/images/work/mbta-bluebook/bluebook_thumb.jpg'
import many from '../public/images/work/many/MANY_thumb.jpg'
import portfolioPreview from '../public/images/work/portfolio-preview-thumb.jpg'
import gallerifyPreview from '../public/images/work/gallerify-preview-thumb.jpg'


export default function Work() {
  return (
    <div class="">

      <PageTitle title={"Work"} />
      <div class="flex flex-col">

      </div>

      {/* <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 pb-24"> */}
      <div class="flex flex-col gap-30">

        {/* CHANGE THIS TO BE A FEED LATER ? */}

        {/* project one */}
        <WorkListing
          imgsrc={wbec}
          path={"wbecnydmv"}
          title={"WBEC Metro NY & Greater DMV"}
          description={"Reimagining a website to better serve a growing network of women entrepreneurs"}>
        </WorkListing>

        {/* project two */}
        <WorkListing
          imgsrc={bbggIntranet}
          path={"bbgg-intranet"}
          title={"BBG&G Integrated Marketing"}
          description={"Designing a centralized intranet to streamline knowledge sharing and team collaboration"}>
        </WorkListing>

        {/* project three */}
        <WorkListing
          imgsrc={many}
          path={"many"}
          title={"Museum Association of New York: \"Voices & Votes\""}
          description={"Microsite for two-year long traveling museum exhibition"}>
        </WorkListing>

        {/* project four */}
        <WorkListing
          imgsrc={capstone}
          path={"capstone"}
          title={"Tastes of the Motherland"}
          description={"Northeastern University capstone project: an interactive website prototype"}>
        </WorkListing>

        {/* project five */}
        <WorkListing
          imgsrc={bluebook}
          path={"bluebook"}
          title={"MBTA Blue Book Redesign"}
          description={"Microsite design to improve readability of and broaden access to MBTA data pool"}>
        </WorkListing>



      </div>

      {/* <h2 class="text-2xl mb-12 font-medium">In Progress</h2> */}

      {/* <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 pb-24"> */}
        {/* portfolio preview */}
        {/* <div class="">
          <div class="mb-4 lg:mb-6">
            <Image alt="Blurred photo preview of portfolio project asset" src={portfolioPreview} placeholder="blur" width={1280} height={800} />
          </div>

          <div class="font-bold text-xl">
            Portfolio Website
          </div>
        </div> */}

                {/* gallerify preview */}
                {/* <div class="">
          <div class="mb-4 lg:mb-6">
            <Image alt="Blurred photo preview of Gallerify project asset" src={gallerifyPreview} placeholder="blur" width={1280} height={800} />
          </div>

          <div class="font-bold text-xl">
            Gallerify
          </div>
        </div> */}
      {/* </div> */}

    </div>
  )
}
