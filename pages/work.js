import styles from '../styles/Home.module.css'
import PageTitle from '../components/pagetitle'
import Image from 'next/image'
import WorkListing from '../components/worklisting'


export default function Work() {
  return (
    <div class="">

      <PageTitle title={"Work"}/>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 pb-24">

        {/* CHANGE THIS TO BE A FEED LATER ? */}

        {/* project one */}
          <WorkListing
            imgsrc={"/../public/images/work/wbecnydmv/wbec-thumb.png"} 
            title={"WBEC Metro NY & Greater DMV"}
            description={"Complete website overhaul to reflect new branding and improve user experience"}>
          </WorkListing>

        {/* project two */}
        <WorkListing
            imgsrc={"/../public/images/work/capstone/capstone-thumb.png"} 
            title={"Tastes of the Motherland"}
            description={"Northeastern University capstone project: an interactive website prototype"}>
        </WorkListing>

        {/* project three */}
        <WorkListing
            imgsrc={"/../public/images/work/mbta-unimaps/mbta-uni-maps-thumb.png"} 
            title={"MBTA University Marketing: Interest-Based Maps"}
            description={"Outreach plan to promote MBTA ridership to university students and young professionals"}>
        </WorkListing>

        {/* project four */}
        <WorkListing
            imgsrc={"/../public/images/work/mbta-bluebook/mbta-bluebook-thumb.png"} 
            title={"MBTA Blue Book Redesign"}
            description={"Microsite design to improve readability of and broaden access to MBTA data pool"}>
        </WorkListing>

      </div>

    </div>
  )
}
