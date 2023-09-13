// library imports
import Image from 'next/image';
import { HiOutlineExternalLink } from 'react-icons/hi'

// component imports
import WorkPage from '../../components/work/workpage';
import WorkSection from '../../components/work/worksection';
import WorkRow from '../../components/work/workrow';
import Summary from '../../components/work/summary';
import Overview from '../../components/work/overview';

// image imports
import summaryPhoto from '../../public/images/work/wbecnydmv/WBEC-3-crop-2.png'
import wbecHome from '../../public/images/work/bbgg/wbec-home.jpg';
import crcogHome from '../../public/images/work/bbgg/crcog-home.jpg';
import caseStudies from '../../public/images/work/bbgg/case-study-drafts.jpg';
import anniversary from '../../public/images/work/bbgg/25th-anniv.png';

const summary = "As a Mid-Level Web Designer and Developer at BBG&G Integrated Marketing, I am an integral member of the web/creative team and work on all aspects of website design and development."

const toolsList = [
    "HTML/CSS/JavaScript",
    "Figma",
    "WordPress",
    "Search Engine Optimization (SEO)",
    "Adobe Creative Suite"
]

const imgInfo = {
    summaryPhoto,
    alt: "Screenshot of 'About Us' page on WBEC Metro NY and Greater DMV website",
    width: "1280",
    height: "800"
}

const overview = [
    "I joined BBG&G as a Junior Web Developer and Designer in late February 2022 and was promoted to Mid-Level in November that same year. I take on various responsibilities as one of two members of the web/creative team, but I mainly play a key part in the design and development of websites.",
    "Working for a marketing agency with multiple clients, I am constantly juggling a wide range of projects. This role demands adaptability and versatility, but the ability to switch between coding and design tasks swiftly allows me to meet tight deadlines and ensure deliverables are of the highest quality."
]

const responsibilities = [
    "Create wireframes, design comps, and prototypes; build templates and manage themes and plugins",
    "Build sites with WordPress/HTML/CSS/JS/PHP; implement responsive design, SEO optimization, ADA compliance",
    "Document technical and creative processes in detail; develop training manuals & brand guidelines; lead web training sessions",
    "Programming, testing, and routine maintenance of client websites",
    "Collaborate with creative & account teams to support website development; make design & technical decisions best suited to each client's needs",
    "Continuously improve company and client development methodologies by researching industry trends and best practices; conduct competitive analyses and internal reviews"

]

export default function BBGG() {
    return (
        <WorkPage
            title={"BBG&G Integrated Marketing"}>

            <Summary
                summary={summary}
                toolsList={toolsList}
                imgInfo={imgInfo}
                hasLink={false}
            />

            <Overview
                overview={overview}
                responsibilities={responsibilities}
            />

            <WorkSection>
                <div class="mb-4 text-xl">
                    <h2 class="text-3xl py-4 font-semibold">Website Builds</h2>
                </div>

                {/* row - paragraph */}
                <WorkSection>
                    <p class="mb-10">I collaborated with our Creative Director to craft two distinct websites for The Women&apos;s Business Enterprise Council of Metro NY and Greater DMV (WBEC Metro NY & Greater DMV)
                        and the Capitol Region Council of Governments (CRCOG). I was responsible for transforming the Creative Director&apos;s wireframes into fully functional web pages while building all other sections of both websites.</p>
                </WorkSection>

                {/* row - image left + text right */}
                <WorkRow>
                    <div class="lg:w-1/3">
                        <Image class="" src={wbecHome} alt="Homepage of the WBEC NY DMV website" placeholder="blur" width={1598} height={2510} />
                    </div>

                    <div class="lg:w-2/3 lg:mb-10 lg:self-center">
                        <h3 class="text-2xl py-3 font-semibold">WBEC Metro NY & Greater DMV</h3>
                        <p>WBEC NY DMV&apos;s site was in need of a refresh, aligning with their recent rebranding, so we developed the new website to have a modern look, easier navigation, and clearer calls to action.</p>
                        <p class="mt-5 font-medium">
                            In tandem with implementing a new social media campaign, this project resulted in an 841.5% increase in new website users.
                        </p>
                        <a href="https://www.wbecnydmv.org/" target="_blank" rel="noreferrer">
                            <button class=" mt-6 items-center text-lg font-semibold outline outline-2 rounded-full px-6 py-2 transition ease-in-out delay-[25ms] hover:bg-white hover:text-black hover:outline-0 text-xl font-bold hover:bg-gradient-to-l from-orange-300 via-amber-300 to-blue-400">
                                <p class="inline">Visit Live Site</p><HiOutlineExternalLink class="inline items-center lg:mb-1 ml-2" />
                            </button>
                        </a>
                    </div>
                </WorkRow>


                {/* row - text left + image right */}
                <WorkRow>
                    {/* reverse column order on large screens */}
                    <div class="lg:flex lg:flex-row-reverse">
                        <div class="lg:w-1/3 mb-10">
                            <Image class="" src={crcogHome} alt="Homepage of the Capitol Region Council of Governments website" placeholder="blur" width={1598} height={2510} />
                        </div>

                        <div class="lg:w-2/3 lg:mb-10 lg:mr-10 lg:self-center">
                            <h3 class="text-2xl py-3 font-semibold">Capital Region Council of Governments</h3>
                            <p class="mb-5">CRCOG staff sought a solution to help its target audiences effectively and efficiently access relevant and current information.</p>
                            <p>We developed a website designed to accomplish enhanced organization, increase CRCOG&apos;s social media presence, and support its marketing efforts.</p>
                            <p class="mt-5 font-medium">
                                The new CRCOG website won a Gold Hermes Creative Award, evaluating the creative industry&apos;s best marketing and communication programs, in the category of Overall Website &ndash; Government.
                            </p>
                            <a href="https://crcog.org/" target="_blank" rel="noreferrer">
                                <button class=" mt-6 items-center text-lg font-semibold outline outline-2 rounded-full px-6 py-2 transition ease-in-out delay-[25ms] hover:bg-white hover:text-black hover:outline-0 text-xl font-bold hover:bg-gradient-to-l from-orange-300 via-amber-300 to-blue-400">
                                    <p class="inline">Visit Live Site</p><HiOutlineExternalLink class="inline items-center lg:mb-1 ml-2" />
                                </button>
                            </a>
                        </div>
                    </div>

                </WorkRow>
            </WorkSection>




            <WorkSection>

                <div class="mb-4 text-xl">
                    <h2 class="text-3xl py-4 font-semibold">UI/UX Design</h2>
                </div>

                {/* row - image left + text right */}
                <WorkRow>
                    <div class="lg:w-1/2">
                        <Image class="" src={anniversary} alt="Wireframes/drafts of 25th company anniversary homepage and timeline" placeholder="blur" width={842} height={800} />
                    </div>

                    <div class="lg:w-1/2 lg:mb-10 lg:self-center">
                        <h3 class="text-2xl py-3 font-semibold">BBG&G 25th Anniversary</h3>
                        <p>I designed the homepage header and landing page for BBG&G Integrated Marketing&apos;s 25th anniversary. The header replaced the website&apos;s usual design, offering a preview of BBG&G&apos;s growth
                            and success over the past 25 years. The landing page continued this narrative with an animated timeline showcasing more of the company&apos;s successes.
                        </p>
                    </div>
                </WorkRow>

                <WorkSection>
                    <WorkRow>
                        {/* reverse column order on large screens */}
                        <div class="lg:flex lg:flex-row-reverse">
                            <div class="lg:w-1/2 mb-10">
                                <Image class="" src={caseStudies} alt="Wireframes/drafts of new case study designs" placeholder="blur" width={3590} height={2149} />
                            </div>

                            <div class="lg:w-1/2 lg:mb-10 lg:mr-10 lg:self-center">
                                <h3 class="text-2xl py-3 font-semibold">BBG&G Case Studies</h3>
                                <p class="mb-5">With the goal of achieving a cohesive and contemporary look that aligned seamlessly with the BBG&G&apos;s existing brand image, I designed new templates for the case studies showcased on the site.</p>
                                <a href="https://bbggadv.com/work/" target="_blank" rel="noreferrer">
                                    <button class=" mt-6 items-center text-lg font-semibold outline outline-2 rounded-full px-6 py-2 transition ease-in-out delay-[25ms] hover:bg-white hover:text-black hover:outline-0 text-xl font-bold hover:bg-gradient-to-l from-orange-300 via-amber-300 to-blue-400">
                                        <p class="inline">Visit Live Site</p><HiOutlineExternalLink class="inline items-center lg:mb-1 ml-2" />
                                    </button>
                                </a>
                            </div>

                        </div>

                    </WorkRow>
                </WorkSection>
            </WorkSection>
        </WorkPage>
    );
}