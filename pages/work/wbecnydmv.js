// component imports
import WorkPage from '../../components/work/workpage';
import TextBlock from '../../components/textblock';
/*
  colSpan: string | columns to span (ex. 1/3, 2/3) - default is 1/3
  isBulleted: boolean | is the body a bulleted list? - default is false
  heading: string | heading of the text block
  body: array (string) | body copy of the text block
*/

/* Work Heading component */
const title = "Reimagining a website to better serve a growing network of women entrepreneurs"
const client = "WBEC Metro NY & Greater DMV"

/* Cover photo */
import coverPhoto from '../../public/images/work/wbecnydmv/WBEC_Cover.png'
import WorkRow from '../../components/work/workrow';
const coverAltText = "Mockup of WBEC site on a laptop someone is browsing"

/* Metadata */
const responsibilities = [
  "UX research and information architecture",
  "Responsive web development",
  "SEO and accessibility improvements",
  "Collaboration with stakeholders"
]
const role = "UX/UI Designer & Web Developer"
const tools = "WordPress, HTML/CSS/JS, SEO tools"

/* Body */

/* Problem */
const problemHeading = "Problem"
const problemBody = "The Women’s Business Enterprise Council of Metro NY and Greater DMV, or WBEC NY DMV, supports a network of women entrepreneurs through certification, programming, and business resources. Their outdated website made it difficult for members and potential applicants to find information about benefits and the certification process. Its site structure and design reinforced the incorrect assumption that the organization was developed with the mindset of a demographic inexperienced with modern design conventions."

/* Challenges */
const challengesHeading = "Challenges"
const challengesBody = ["Important information about certification and programs was difficult to locate", "Navigation and content structure had grown inconsistent over time", "Visual design lacked brand consistency across digital platforms", "The website needed to support frequent feature requests and program updates"]
const challengesTextAfter = "Because the site serves both existing members and prospective entrepreneurs, unclear navigation created friction in the onboarding journey."

/* Goals */
const goalsHeading = "Goals"
const goalsBody = ["Improve the user experience for accessing key information", "Establish consistent branding across digital touchpoints", "Create a flexible system that could support evolving organizational needs", "Deliver design improvements while adapting to scope changes and deadlines"]

export default function WBECNYDMV() {
  return (
    <WorkPage
      title={title}
      client={client}
      coverSrc={coverPhoto}
      coverAltText={coverAltText}
      responsibilities={responsibilities}
      role={role}
      tools={tools}>

      {/* Problem Row */}
      <TextBlock
        colSpan="2/3"
        heading={problemHeading}
        body={problemBody}
      />

      {/* Challenges / Goals Row */}
      <WorkRow>
      <TextBlock
        colSpan="1/2"
        isBulleted="true"
        heading={challengesHeading}
        body={challengesBody}
        textAfter={challengesTextAfter}
      />
            <TextBlock
        colSpan="1/2"
        isBulleted="true"
        heading={goalsHeading}
        body={goalsBody}
      />
      </WorkRow>


    </WorkPage>




  );
}