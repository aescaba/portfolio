import Image from 'next/image'

// component imports
import WorkPage from '../../components/work/workpage';
import TextBlock from '../../components/textblock';


/* Photos */
import coverPhoto from '../../public/images/work/wbecnydmv/WBEC_Cover.png'
import WorkRow from '../../components/work/workrow';
import img1 from '../../public/images/work/wbecnydmv/WBEC_devices_mockup.png'


export default function WBECNYDMV() {
  return (
    <WorkPage
      title="Reimagining a website to better serve a growing network of women entrepreneurs"
      client="WBEC Metro NY & Greater DMV"
      coverSrc={coverPhoto}
      coverAltText="Mockup of WBEC site on a laptop someone is browsing"
      responsibilities={[
        "UX research and information architecture",
        "Responsive web development",
        "SEO and accessibility improvements",
        "Collaboration with stakeholders"
      ]}
      role="UX/UI Designer & Web Developer"
      tools="WordPress, HTML/CSS/JS, SEO tools">

      {/* - Problem */}
      <TextBlock
        colSpan="2/3"
        h2="Problem"
        body="The Women&apos;s Business Enterprise Council of Metro NY and Greater DMV, or WBEC NY DMV, supports a network of women entrepreneurs through certification, programming, and business resources. Their outdated website made it difficult for members and potential applicants to find information about benefits and the certification process. Its site structure and design reinforced the incorrect assumption that the organization was developed with the mindset of a demographic inexperienced with modern design conventions."
      />

      {/* -- Challenges / Goals */}
      <WorkRow>
        <TextBlock
          colSpan="1/2"
          isBulleted="true"
          h3="Challenges"
          body={["Important information about certification and programs was difficult to locate", "Navigation and content structure had grown inconsistent over time", "Visual design lacked brand consistency across digital platforms", "The website needed to support frequent feature requests and program updates"]}
        />
        <TextBlock
          colSpan="1/2"
          isBulleted="true"
          h3="Goals"
          body={["Improve the user experience for accessing key information", "Establish consistent branding across digital touchpoints", "Create a flexible system that could support evolving organizational needs", "Deliver design improvements while adapting to scope changes and deadlines"]}
        />
      </WorkRow>

      <WorkRow>
        <TextBlock
      colSpan="1"
         body="Because the site serves both existing members and prospective entrepreneurs, unclear navigation created friction in the onboarding journey. Stakeholders required keeping the existing CMS. The builder tools implemented were new to me since I was brought onto the project after scope was defined, so I took it as a hands-on learning opportunity."
         />
      </WorkRow>

      <Image alt={"Mockup of WBEC NY DMV website on a desktop and mobile screen"} src={img1} placeholder="blur" />

      {/* - Process */}

      <TextBlock
        colSpan="2/3"
        h2="Process"
        h3="Defining the User Experience"
        body="Two primary audiences emerged with sets of different needs:"
      />

      <WorkRow>

        <TextBlock
          colSpan="1/3"
          isBulleted="true"
          h4="Prospective Members"
          body={["Learn about certification", "Understand eligibility", "Find application steps"]}
        />

        <TextBlock
          colSpan="1/3"
          isBulleted="true"
          h4="Existing Members"
          body={["Access programming and events", "Stay updated on resources and opportunities"]}
        />
        <TextBlock />
      </WorkRow>

      {/* -- UX Strategy */}
      <WorkRow>
        <TextBlock
          isBulleted="true"
          h3="UX Strategy"
          textBefore="To support these needs, I focused on:"
          body={["simplifying the information architecture", "clarifying navigation pathways", "prioritizing high-value content"]} />
      </WorkRow>

      {/* -- Tech Stack / Evolving Content Needs */}
      <WorkRow>
     
        <TextBlock
          colSpan="1/2"
          isBulleted="true"
          h3="Evolving Content Needs"
          textBefore="During the project, the organization frequently introduced new feature requests. To keep the project on track, I:"
          body={["prioritized high-impact updates", "designed modular components for quick implementation", "balanced design improvements with timeline constraints"]} />
      </WorkRow>

      <WorkRow>
        <TextBlock
          h3="Information Architecture" />
      </WorkRow>

      <WorkRow>
        <TextBlock
          colSpan="1"
          isBulleted="true"
          h3="Key Improvements"
          body={["Consolidated scattered content into clear program hubs", "Prioritized certification information within navigation", "Reduced content redundancy across pages"]} />
      </WorkRow>


      <WorkRow>
        <TextBlock
          colSpan="1/2"
          isBulleted="true"
          h3="Brand Consistency"
          textBefore="The redesign introduced:"
          body={["consistent typography hierarchy", "standardized colors and spacing", "reusable UI components"]}
          textAfter="This helped align the website with the organization’s broader brand identity while improving readability and accessibility." />

        <TextBlock
          colSpan="1/2"
          h3="Responsive Design"
          body="The interface was optimized for mobile users, ensuring entrepreneurs could access resources on any device." />

      </WorkRow>
      <WorkRow>
        <TextBlock
          colSpan="1"
          isBulleted="true"
          h3="Implementation"
          h4="Development highlights"
          body={["Built responsive page layouts in WordPress", "Implemented SEO best practices across key pages", "Improved accessibility through semantic markup and improved contrast", "Created flexible templates to support future content updates"]}
        />
      </WorkRow>

      {/* - Improvements / Results */}
      <WorkRow>
        <TextBlock
          colSpan="2/3"
          isBulleted="true"
          h2="Improvements/Results"
          h3="Outcomes"
          body={["Improved navigation clarity for certification and program information", "Established consistent design patterns across the website", "Enabled the organization to add new program content more easily"]}
        />

      </WorkRow>
      <WorkRow>

        <TextBlock
          colSpan="2/3"
          isBulleted="true"
          textBefore="According to a follow-up survey:"
          body={["Improved awareness of WBE small- or Black-owned businesses and diversity", "New website users went up 841.5% since implementing a new social media campaign and launching a new website", "52% increase in search engine optimization score"]}
        />
      </WorkRow>

      {/* -- Reflection */}
      <WorkRow>
        <TextBlock
          colSpan="2/3"
          isBulleted="true"
          h3="Reflection"
          textBefore="What I’d continue improving:"
          body={["Expansive user testing with business owners navigating the certification process", "developing a more comprehensive design system for future updates", "Technology stack audit to implement a system that would allow for modern, aesthetically pleasing design"]} />
      </WorkRow>

      {/* -- Key Takeaways */}
      <WorkRow>
        <TextBlock
          colSpan="2/3"
          body="Redesigning WBEC NY/DMV’s website demonstrated how thoughtful UX improvements can help mission-driven organizations better support their communities. Through improved information architecture, consistent design, and flexible development, the website now provides a clearer path for women entrepreneurs seeking certification and resources."
        />
      </WorkRow>



    </WorkPage>




  );
}