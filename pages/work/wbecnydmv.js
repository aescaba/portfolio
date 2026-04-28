// library imports
import Image from 'next/image';

// component imports
import WorkPage from '../../components/work/workpage';
import WorkHeading from '../../components/work/workheading';
import WorkMetadata from '../../components/work/workmetadata';

// import WorkRow from '../../components/work/workrow';

// image imports
import summaryPhoto from '../../public/images/work/wbecnydmv/WBEC_preview_1.jpg'
import cover from '../../public/images/work/wbecnydmv/WBEC_Cover.png'

// for metadata
const responsibilities = [
  "UX research and information architecture",
  "Responsive web development",
  "SEO and accessibility improvements",
  "Collaboration with stakeholders"
]

const role = "UX/UI Designer & Web Developer"

const tools = "WordPress, HTML/CSS/JS, SEO tools"

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
    <WorkPage
    title = {title}
    client = {client}
    coverSrc = {cover}
    coverAltText = "Mockup of WBEC site on a laptop someone is browsing"
    responsibilities = {responsibilities}
    role ={role}
    tools = {tools}
    />
  );
}