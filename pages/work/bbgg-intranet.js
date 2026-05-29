// component imports
import WorkPage from '../../components/work/workpage';
import TextBlock from '../../components/textblock';


/* Photos */
import coverPhoto from '../../public/images/work/bbgg-intranet/BBGG Intranet_Cover.jpg'
import WorkRow from '../../components/work/workrow';


export default function BBGGIntranet() {
  return (
    <WorkPage
      title="Designing a centralized intranet to streamline knowledge sharing and team collaboration"
      client="BBG&G Integrated Marketing"
      coverSrc={coverPhoto}
      coverAltText="Mockup of WBEC site on a laptop someone is browsing"
      responsibilities={[
        "Project initiation and planning",
        "Information architecture and documentation strategy",
        "Platform research and implementation",
        "Responsive web development",
        "Cross-team coordination and documentation review"]}
      role="UX Designer & Web Developer"
      tools="Microsoft SharePoint, HTML/CSS, Microsoft ecosystem tools">

      {/* - Problem */}
      <TextBlock
        colSpan="2/3"
        h2="Problem"
        body={`Internal procedures, documentation, and company resources were stored across numerous server folders that had grown difficult to navigate and maintain. Employees often struggled to locate the most up-to-date information, leading to inefficiencies and reliance on institutional knowledge. Recognizing the impact this had on productivity and collaboration, I proposed creating a centralized intranet that would consolidate internal documentation and make resources easier for the team to find and maintain.`}
      />

      {/* -- Challenges / Goals */}
      <WorkRow>
        <TextBlock
          colSpan="1/2"
          isBulleted="true"
          h3="Challenges"
          body={[
            "Important documents were scattered across multiple locations",
            "Folder structures reflected internal department organization rather than user needs",
            "Employees often relied on colleagues to locate information",
            "No centralized system existed for naming conventions or maintaining and updating documentation"
          ]}
          textAfter="We needed a clear way to access and update information that was intuitive to any employee, whether seasoned or fresh hire."
        />
        <TextBlock
          colSpan="1/2"
          isBulleted="true"
          h3="Goals"
          body={[
            "Create a centralized hub for internal documentation and resources",
            "Improve the discoverability and organization of internal knowledge",
            "Establish a scalable structure for maintaining company documentation",
            "Reduce time spent searching for internal resources"
          ]}
        />
      </WorkRow>

      <TextBlock heading={"Constraints"} />

      {/* -- Tech Stack / Evolving Content Needs */}
      <WorkRow>
        <TextBlock
          colSpan="2/3"
          h3="Technology Stack"
          body="The organization did not have an existing intranet platform, so I researched potential solutions and recommended Microsoft SharePoint as the platform that best aligned with the company’s existing tools and workflows. Because SharePoint was new to me, I independently learned the platform in order to design and implement the intranet." />
      </WorkRow>
      <WorkRow>
        <TextBlock
          colSpan="1/2"
          h3="Content Organization"
          body="Documentation was owned by multiple departments, requiring coordination with team members to ensure resources were accurate, complete, and properly organized." />

        <TextBlock
          colSpan="1/2"
          h3="Userbase"
          body="I had to ensure the solution was easily accessible and editable by a range of users who had different levels of technological expertise." />
      </WorkRow>

      {/* - Process */}

      <TextBlock
        colSpan="2/3"
        h2="Identifying the Opportunity"
        body="Through daily workflows and conversations with coworkers, it became clear that employees spent significant time searching for documentation across various folders and files."
      />

      <WorkRow>

        <TextBlock
          colSpan="2/3"
          isBulleted="true"
          textBefore={"I proposed building a centralized intranet that would:"}
          body={[
            "centralize company resources",
            "simplify navigation",
            "improve internal knowledge sharing"
          ]}
          textAfter={"After gaining team support for the idea, I began planning the structure and platform for implementation."}
        />
      </WorkRow>

      {/* -- UX Strategy */}
      <WorkRow>
        <TextBlock
          colSpan="2/3"
          isBulleted="true"
          h3="Platform Research"
          textBefore="I evaluated several potential solutions for hosting the intranet, considering:"
          body={[
            "ease of use for employees",
            "compatibility with existing company tools",
            "long-term scalability and maintenance"
          ]}
          textAfter="Based on these factors, I selected Microsoft SharePoint as the most effective solution." />
      </WorkRow>

      <WorkRow>
        <TextBlock
          colSpan="2/3"
          h3="Information Architecture"
          body={"To organize the intranet, I designed a structure that grouped information based on how employees searched for resources, rather than how files were historically stored."}
        />
      </WorkRow>

      <WorkRow>
        <TextBlock
          colSpan="2/3"
          isBulleted="true"
          h3="Key Improvements"
          body={[
            "Created clear navigation categories for major documentation types",
            "Consolidated scattered files into structured sections",
            "Developed consistent naming and organization standards",
            "Reduced redundant or outdated documentation"
          ]}
          textAfter={"To ensure accuracy, I assigned sections of documentation to team members for review and updates, coordinating the organization of content across departments."} />
      </WorkRow>


      <WorkRow>
        <TextBlock
          colSpan="1/2"
          isBulleted="true"
          h3="Design Approach"
          h4="Usability"
          textBefore="The intranet was designed to prioritize efficiency and clarity. Key design decisions included:"
          body={[
            "simple navigation for frequently used resources",
            "structured page layouts for documentation",
            "clear headings and organization to support scanning and quick access"
          ]} />
        <TextBlock
          colSpan="1/2"
          h3="&nbsp;"
          h4="Consistency"
          body="Standardized layouts and documentation structures helped ensure the system remained easy to maintain as additional content was added." />

      </WorkRow>
      <WorkRow>
        <TextBlock
          colSpan="1"
          isBulleted="true"
          h3="Implementation"
          h4="Development highlights"
          body={[
            "Independently learned Microsoft SharePoint to design and build the intranet",
            "Developed the site structure and internal navigation system",
            "Migrated and reorganized documentation from existing server folders",
            "Built pages for internal procedures, resources, and documentation"
          ]}
        />
      </WorkRow>

      {/* - Improvements / Results */}
      <WorkRow>
        <TextBlock
          colSpan="2/3"
          h2="Improvements/Results"
          body={"The intranet provided employees with a centralized and organized hub for company knowledge, improving how teams accessed and maintained documentation."}
        />

      </WorkRow>

      {/* -- Outcomes / Reflection */}
      <WorkRow>
        <TextBlock
          colSpan="1/2"
          isBulleted="true"
          h3="Outcomes"
          body={[
            "Improved access to internal procedures and resources",
            "Reduced time spent searching for documentation",
            "Established a scalable structure for maintaining company knowledge",
            "Improved internal collaboration and knowledge sharing"
          ]}
        />

        <TextBlock
          colSpan="1/2"
          isBulleted="true"
          h3="Reflection"
          textBefore="What I’d continue improving:"
          body={[
            "Conduct usability feedback sessions with employees to refine navigation",
            "Develop documentation standards to ensure long-term consistency"
          ]} />
      </WorkRow>

      {/* -- Key Takeaways */}
      <WorkRow>
        <TextBlock
          colSpan="2/3"
          h3="Key Takeaways"
          body="This project demonstrated the value of identifying workflow inefficiencies and designing solutions that improve team productivity.
          By proposing, organizing, and building a centralized intranet, I helped transform scattered documentation into a structured and accessible knowledge hub that supports more efficient collaboration across the organization."
        />
      </WorkRow>



    </WorkPage>




  );
}