import styles from '../styles/Home.module.css'
import PageTitle from '../components/pagetitle'

export default function Work() {
  return (
    <div class="">

      <PageTitle title={"Work"}/>

      <div class="grid grid-cols-2">

        {/* project one */}
        <div class="">
          <div class="">
            Photo
          </div>

          <div class="">
            Title
          </div>

          <div class="">
            Description
          </div>
        </div>

        {/* project two */}
        <div class="">
          <div class="">
            Photo
          </div>

          <div class="">
            Title
          </div>

          <div class="">
            Description
          </div>
        </div>

      </div>

    </div>
  )
}
