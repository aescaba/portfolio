// component imports
import WorkPage from '../../components/work/workpage';
import TextBlock from '../../components/textblock';


/* Photos */
import coverPhoto from '../../public/images/work/wbecnydmv/WBEC_Cover.png'
import WorkRow from '../../components/work/workrow';


export default function WBECNYDMV() {
  return (
    <WorkPage
      title={"Reimagining a website to better serve a growing network of women entrepreneurs"}
      client={"WBEC Metro NY & Greater DMV"}
      coverSrc={coverPhoto}
      coverAltText={"Mockup of WBEC site on a laptop someone is browsing"}
      responsibilities={[
        "UX research and information architecture",
        "Responsive web development",
        "SEO and accessibility improvements",
        "Collaboration with stakeholders"
      ]}
      role={"UX/UI Designer & Web Developer"}
      tools={"WordPress, HTML/CSS/JS, SEO tools"}>

      {/* Problem Row */}
      <TextBlock
        colSpan="2/3"
        heading={"Problem"}
        body={"The Women’s Business Enterprise Council of Metro NY and Greater DMV, or WBEC NY DMV, supports a network of women entrepreneurs through certification, programming, and business resources. Their outdated website made it difficult for members and potential applicants to find information about benefits and the certification process. Its site structure and design reinforced the incorrect assumption that the organization was developed with the mindset of a demographic inexperienced with modern design conventions."}
      />

      {/* Challenges / Goals Row */}
      <WorkRow>
        <TextBlock
          colSpan="1/2"
          isBulleted="true"
          heading={"Challenges"}
          body={["Important information about certification and programs was difficult to locate", "Navigation and content structure had grown inconsistent over time", "Visual design lacked brand consistency across digital platforms", "The website needed to support frequent feature requests and program updates"]}
          textAfter={"Because the site serves both existing members and prospective entrepreneurs, unclear navigation created friction in the onboarding journey."}
        />
        <TextBlock
          colSpan="1/2"
          isBulleted="true"
          heading={"Goals"}
          body={["Improve the user experience for accessing key information", "Establish consistent branding across digital touchpoints", "Create a flexible system that could support evolving organizational needs", "Deliver design improvements while adapting to scope changes and deadlines"]}
        />
      </WorkRow>

      <TextBlock heading={"Constraints"} />

      {/* Tech Stack / Evolving Content Needs */}
      <WorkRow>
        <TextBlock
          colSpan="1/2"
          subheading={"Technology Stack"}
          body={"Stakeholders required keeping the existing CMS. The builder tools implemented were new to me since I was brought onto the project after scope was defined, so I took it as a hands-on learning opportunity."} />

        <TextBlock
          colSpan="1/2"
          isBulleted="true"
          subheading={"Evolving Content Needs"}
          textBefore={"During the project, the organization frequently introduced new feature requests. To keep the project on track, I:"}
          body={["prioritized high-impact updates", "designed modular components for quick implementation", "balanced design improvements with timeline constraints"]} />
      </WorkRow>

      {/* Process Row */}

      <TextBlock
        colSpan="2/3"
        heading={"Process"}
        subheading={"Defining the User Experience"}
        body={"Two primary audiences emerged with sets of different needs:"}
      />

      <WorkRow>

        <TextBlock
          isBulleted="true"
          subheading={"Prospective Members"}
          body={["Learn about certification", "Understand eligibility", "Find application steps"]}
        />

        <TextBlock
          isBulleted="true"
          subheading={"Existing Members"}
          body={["Access programming and events", "Stay updated on resources and opportunities"]}
        />
        <TextBlock />
      </WorkRow>

      <WorkRow>
        <TextBlock
          isBulleted="true"
          heading={"UX Strategy"}
          textBefore={"To support these needs, I focused on:"}
          body={["simplifying the information architecture", "clarifying navigation pathways", "prioritizing high-value content"]} />
      </WorkRow>

      <WorkRow>
        <TextBlock
          subheading={"Information Architecture"} />
      </WorkRow>

      <WorkRow>
        <TextBlock
          isBulleted="true"
          subheading={"Key Improvements"}
          body={["Consolidated scattered content into clear program hubs", "Prioritized certification information within navigation", "Reduced content redundancy across pages"]} />
      </WorkRow>


    </WorkPage>




  );
}