import { Suspense } from "react";
import BackToTop from "../../components/common/BackToTop";
import Navbar from "../../components/layout/Navbar";
import Contact from "../../components/sections/Contact";

export const metadata = {
  title: "Detailed Overview",
  description:
    "A comprehensive overview of Discussion with the Changemakers Chapter 02, including event specifics, marketing strategies, and sustainability plans.",
  keywords:
    "DWC Chapter 02, event details, marketing strategy, sustainability, youth empowerment, Chattogram, urban development",
  openGraph: {
    type: "article",
  },
};

export default function DetailedOverview() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <section className="py-20 bg-neutral-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">
                  Discussion with the Changemakers Chapter 02
                </h1>
                <p className="text-xl text-neutral-gray mb-8">
                  Detailed Overview
                </p>
                <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
              </div>

              <div className="prose prose-lg max-w-none text-neutral-gray">
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-brand-primary mb-4 text-justify">
                    Introduction
                  </h2>
                  <p className="text-justify">
                    Discussion with the Changemakers (DWC) is a platform that
                    creates a bridge between YOUTH and National AUTHORITIES for
                    change. Here, we are building a bridge between the
                    authorities of Bangladesh and youth changemakers, where
                    young people can come up with solutions to significant
                    problems in our country or plan the development of our
                    nation through their innovations. DWC is a youth-driven
                    initiative that fosters collaboration between young people,
                    city leaders, and the public to address pressing urban
                    challenges. By providing a platform for collaboration with
                    city leaders, DWC not only empowers youth but also ensures
                    that their innovative ideas contribute to a more sustainable
                    and inclusive future. Through its structured approach and
                    strategic partnerships, DWC is helping to shape the next
                    generation of leaders and problem-solvers, making it a vital
                    initiative in the landscape of urban development and youth
                    engagement.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-brand-primary mb-4 text-justify">
                    Specifics of DWC Chapter 02
                  </h2>
                  <p className="text-justify">
                    DWC Chapter 02 is designed to empower Chattogram's youth by
                    providing a platform to develop and present innovative
                    solutions to major city problems. The event engages
                    approximately 30 teams from over 30 universities, ensuring a
                    diverse range of perspectives. It is structured to maximize
                    impact through a multi-stage program:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>
                      <strong>Problem Identification and Research:</strong>{" "}
                      Teams identify key urban issues affecting Chattogram,
                      conducting fieldwork and surveys to gather data.
                    </li>
                    <li>
                      <strong>Roadmap Development:</strong> Participants create
                      detailed plans to address these issues, focusing on
                      practical and actionable solutions.
                    </li>
                    <li>
                      <strong>Plan Execution and Trial Runs:</strong> Solutions
                      are tested through trial implementations to ensure
                      feasibility.
                    </li>
                    <li>
                      <strong>Elimination Rounds:</strong> Teams compete in
                      group rounds, with approximately 30 teams narrowed down to
                      5 finalists.
                    </li>
                    <li>
                      <strong>Final Showcase:</strong> Finalists present their
                      solutions to a guest panel of city leaders, including the
                      CDA Chairman, City Mayor, Ward Councilors, Members of
                      Parliament (MPs), and the Deputy Commissioner. Authorities
                      may select 3-5 change-making solutions for potential
                      implementation.
                    </li>
                  </ul>
                  <p className="mt-4">
                    The event is expected to draw a massive audience and garner
                    extensive media coverage, thereby amplifying its reach and
                    impact. A prize of 100,000 BDT is offered to the winning
                    team, subject to sponsorship availability, incentivizing
                    participation and excellence.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-brand-primary mb-4 text-justify">
                    Why Youth/Students Should Participate
                  </h2>
                  <p className="text-justify">
                    "Discussion with the Changemakers" (DWC) is a youth-driven
                    platform that empowers young people to address real-world
                    urban challenges through innovation, dialogue, and
                    collaboration with city leaders. Specifically designed to
                    harness the potential of Chattogram's youth, DWC Chapter 02
                    offers a transformative opportunity for students to grow,
                    lead, and make a lasting impact.
                  </p>
                  <p className="mt-4 text-justify">
                    DWC provides a unique platform for youth to tackle
                    significant urban challenges in Chattogram, such as
                    infrastructure, sustainability, or public services.
                    Participants work in teams to identify city problems,
                    conduct fieldwork, and develop actionable solutions, with
                    the potential for 3-5 of these solutions to be selected by
                    city authorities for implementation.
                  </p>

                  <h3 className="text-2xl font-bold text-brand-primary mt-8 mb-4">
                    Key Benefits of Participating in DWC
                  </h3>
                  <div className="overflow-x-auto mt-4">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                      <thead>
                        <tr className="bg-brand-primary text-white">
                          <th className="py-3 px-4 text-left">Benefit</th>
                          <th className="py-3 px-4 text-left">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-gray-300">
                          <td className="py-3 px-4 font-medium">
                            Real-World Impact
                          </td>
                          <td className="py-3 px-4">
                            Develop solutions that may be implemented by city
                            authorities.
                          </td>
                        </tr>
                        <tr className="border-t border-gray-300 bg-gray-50">
                          <td className="py-3 px-4 font-medium">
                            Skill Development
                          </td>
                          <td className="py-3 px-4">
                            Gain expertise in research, project management, and
                            public speaking.
                          </td>
                        </tr>
                        <tr className="border-t border-gray-300">
                          <td className="py-3 px-4 font-medium">Networking</td>
                          <td className="py-3 px-4">
                            Connect with city leaders and peers from 30+
                            universities.
                          </td>
                        </tr>
                        <tr className="border-t border-gray-300 bg-gray-50">
                          <td className="py-3 px-4 font-medium">Recognition</td>
                          <td className="py-3 px-4">
                            Compete for prize money and gain media exposure.
                          </td>
                        </tr>
                        <tr className="border-t border-gray-300">
                          <td className="py-3 px-4 font-medium">Empowerment</td>
                          <td className="py-3 px-4">
                            Be inspired to lead change and shape your city's
                            future.
                          </td>
                        </tr>
                        <tr className="border-t border-gray-300 bg-gray-50">
                          <td className="py-3 px-4 font-medium">
                            Professional Experience
                          </td>
                          <td className="py-3 px-4">
                            Participate in a high-profile event with a
                            professional setting.
                          </td>
                        </tr>
                        <tr className="border-t border-gray-300">
                          <td className="py-3 px-4 font-medium">
                            Community Contribution
                          </td>
                          <td className="py-3 px-4">
                            Contribute to sustainable urban development in
                            Chattogram.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Contact />
        </Suspense>
      </main>
      <BackToTop />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Detailed Overview of Discussion with the Changemakers Chapter 02",
            image: "/images/dwc-event.jpg",
            datePublished: "2025-06-02",
            dateModified: "2025-06-02",
            author: {
              "@type": "Person",
              name: "Decor's Digital",
            },
            publisher: {
              "@type": "Organization",
              name: "Decor's Digital",
              logo: {
                "@type": "ImageObject",
                url: "/images/dwc-icon-192.svg",
              },
            },
            description:
              "A comprehensive overview of Discussion with the Changemakers Chapter 02, including event specifics, marketing strategies, and sustainability plans.",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://discussionwiththechangemakers.com/detailed-overview",
            },
          }),
        }}
      />
    </>
  );
}
