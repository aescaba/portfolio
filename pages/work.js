import PageTitle from '../components/pagetitle'
import WorkListing from '../components/worklisting'


export default function Work() {
  return (
    <div class="">

      <PageTitle title={"Work"}/>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 pb-24">

        {/* CHANGE THIS TO BE A FEED LATER ? */}

        {/* project one */}
          <WorkListing
            imgsrc={"/images/work/wbecnydmv/wbec-thumb.jpg"}
            path={"wbecnydmv"}
            title={"WBEC Metro NY & Greater DMV"}
            description={"Complete website overhaul to reflect new branding and improve user experience"}>
          </WorkListing>

        {/* project two */}
        <WorkListing
            imgsrc={"/images/work/capstone/capstone-thumb.jpg"}
            path={"capstone"}
            title={"Tastes of the Motherland"}
            description={"Northeastern University capstone project: an interactive website prototype"}>
        </WorkListing>

        {/* project three */}
        <WorkListing
            imgsrc={"/images/work/mbta-unimaps/mbta-unimaps-thumb.jpg"}
            path={"unimaps"}
            title={"MBTA University Marketing: Interest-Based Maps"}
            description={"Outreach plan to promote MBTA ridership to university students and young professionals"}>
        </WorkListing>

        {/* project four */}
        <WorkListing
            imgsrc={"/images/work/mbta-bluebook/mbta-bluebook-thumb.jpg"}
            path={"bluebook"}
            title={"MBTA Blue Book Redesign"}
            description={"Microsite design to improve readability of and broaden access to MBTA data pool"}>
        </WorkListing>

      </div>

    </div>
  )
}
