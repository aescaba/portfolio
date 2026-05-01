// component imports
import WorkPage from '../../components/work/workpage';
import TextBlock from '../../components/textblock';

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

/* Constraints */
const constraintsHeading = "Constraints"
const constraintsSubHeading1 = "Technology Stack"
const constraintsBody1 = "Stakeholders required keeping the existing CMS. The builder tools implemented were new to me since I was brought onto the project after scope was defined, so I took it as a hands-on learning opportunity."

const constraintsSubHeading2 = "Evolving Content Needs"
const constraintsTextBefore = "During the project, the organization frequently introduced new feature requests. To keep the project on track, I:"
const constraintsBody2 = ["prioritized high-impact updates", "designed modular components for quick implementation", "balanced design improvements with timeline constraints"]

/* Process */
const processHeading = "Process"
const processSubHeading = "Define the Experience"
const processTextBefore = "User Needs"
const processBody = "Two primary audiences emerged with sets of different needs:"

const prospectiveMembersHeading = "Prospective Members"
const prospectiveMembersBody = ["Learn about certification", "Understand eligibility", "Find application steps"]

const existingMembersHeading = "Existing Members"
const existingMembersBody = ["Access programming and events", "Stay updated on resources and opportunities"]

const uxStrategyHeading = "UX Strategy"
const uxStrategyTextBefore = "To support these needs, I focused on:"
const uxStrategyBody = ["simplifying the information architecture", "clarifying navigation pathways", "prioritizing high-value content"]

const informationArchitectureSubHeading = "Information Architecture"

const improvementsHeading = "Key Improvements"
const improvementsBody = ["Consolidated scattered content into clear program hubs", "Prioritized certification information within navigation", "Reduced content redundancy across pages"]

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

      <TextBlock heading={constraintsHeading} />

      {/* Tech Stack / Evolving Content Needs */}
      <WorkRow>
        <TextBlock
          colSpan="1/2"
          subheading={constraintsSubHeading1}
          body={constraintsBody1} />

        <TextBlock
          colSpan="1/2"
          isBulleted="true"
          subheading={constraintsSubHeading2}
          textBefore={constraintsTextBefore}
          body={constraintsBody2} />
      </WorkRow>

      {/* Process Row */}
      <TextBlock
        colSpan="2/3"
        heading={processHeading}
        subheading={processSubHeading}
        textBefore={processTextBefore}
        body={processBody}
      />

      <WorkRow>

        <TextBlock
          isBulleted="true"
          subheading={prospectiveMembersHeading}
          body={prospectiveMembersBody}
        />

        <TextBlock
          isBulleted="true"
          subheading={existingMembersHeading}
          body={existingMembersBody}
        />
        <TextBlock />
      </WorkRow>

      <WorkRow>
        <TextBlock
          isBulleted="true"
          heading={uxStrategyHeading}
          textBefore={uxStrategyTextBefore}
          body={uxStrategyBody} />
      </WorkRow>

      <WorkRow>
        <TextBlock
        subheading={informationArchitectureSubHeading}/>
      </WorkRow>

      <WorkRow>
        <TextBlock
        isBulleted="true"
        subheading={improvementsHeading}
        body={improvementsBody}/>
      </WorkRow>


    </WorkPage>




  );
}