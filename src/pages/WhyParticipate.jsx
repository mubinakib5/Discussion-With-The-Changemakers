// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Contact from "../components/sections/Contact";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import StructuredData from "../components/common/StructuredData";

const WhyParticipate = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="pt-24">
      <SEO 
        title="Why Participate"
        description="Discover why youth and students should participate in Discussion with the Changemakers, including opportunities for skill development, networking, and creating real-world impact."
        keywords="youth participation, student opportunities, DWC benefits, skill development, networking, urban solutions, Chattogram youth, changemakers"
        ogType="article"
      />
      <StructuredData 
        type="article"
        data={{
          headline: "Why Youth and Students Should Participate in DWC",
          image: "/images/dwc-youth.jpg",
          datePublished: "2025-06-02",
          dateModified: "2025-06-02",
          author: {
            name: "Decor's Digital"
          },
          publisher: {
            name: "Decor's Digital",
            logo: "/images/dwc-icon-192.svg"
          },
          description: "Discover why youth and students should participate in Discussion with the Changemakers, including opportunities for skill development, networking, and creating real-world impact.",
          url: window.location.href
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">
            Why Youth/Students Should Participate
          </h1>
          <p className="text-xl text-neutral-gray mb-8">Join Discussion with the Changemakers</p>
          <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="prose prose-lg max-w-none text-neutral-gray"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold text-brand-primary mb-4 text-justify">
              Introduction
            </h2>
            <p className="text-justify">
              "Discussion with the Changemakers" (DWC) is a youth-driven platform that empowers young people to address real-world urban challenges through innovation, dialogue, and collaboration with city leaders. Specifically designed to harness the potential of Chattogram's youth, DWC Chapter 02, scheduled for July 1-17, 2025, at Hotel Agrabad, offers a transformative opportunity for students to grow, lead, and make a lasting impact.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold text-brand-primary mb-4 text-justify">
              Opportunity to Drive Meaningful Change
            </h2>
            <p className="text-justify">
              DWC provides a unique platform for youth to tackle significant urban challenges in Chattogram, such as infrastructure, sustainability, or public services. Participants work in teams to identify city problems, conduct fieldwork, and develop actionable solutions, with the potential for 3-5 of these solutions to be selected by city authorities for implementation. This direct connection to policy makers, including the CDA Chairman, City Mayor, Ward Councilors, and Members of Parliament (MPs), ensures that your ideas can lead to tangible improvements in your community. By participating, you're not just theorizing but actively contributing to sustainable urban development, making DWC a powerful avenue for creating real-world impact.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold text-brand-primary mb-4 text-justify">
              Skill Development and Professional Growth
            </h2>
            <p className="text-justify">
              DWC's structured program offers a hands-on learning experience that equips participants with critical skills for personal and professional growth. The event involves multiple stages, including:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong>Problem Identification:</strong> Conducting research and surveys to understand city challenges.
              </li>
              <li>
                <strong>Roadmap Development:</strong> Creating detailed plans to address identified issues.
              </li>
              <li>
                <strong>Plan Execution:</strong> Testing solutions through trial implementations and fieldwork.
              </li>
              <li>
                <strong>Presentation and Competition:</strong> Showcasing solutions in elimination rounds and a final presentation to a panel of judges.
              </li>
            </ul>
            <p className="mt-4 text-justify">
              These stages foster skills in research, analysis, project management, teamwork, and public speaking. Whether you're studying engineering, social sciences, or business, these skills are transferable and highly valued in academic and professional settings, preparing you for future leadership roles.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold text-brand-primary mb-4 text-justify">
              Networking and Collaboration Opportunities
            </h2>
            <p className="text-justify">
              DWC brings together students from over 30 universities, creating a vibrant community of young innovators. This diversity allows you to collaborate with peers from different backgrounds, fostering teamwork and broadening your perspectives. Additionally, the event facilitates direct interaction with high-profile city leaders, such as the City Mayor, CDA Chairman, and MPs, providing a rare opportunity to build connections with decision-makers. These relationships can lead to mentorship, future collaborations, or career opportunities, making DWC a valuable networking platform.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold text-brand-primary mb-4 text-justify">
              Recognition and Competitive Advantage
            </h2>
            <p className="text-justify">
              Participating in DWC offers the chance to gain recognition on a large stage. Approximately 30 teams compete, with 5 advancing to the final showcase, where they present to a panel of city officials. The winning team receives a prize of 100,000 BDT (subject to sponsorship), adding a financial incentive. Moreover, the event's extensive media coverage, including live broadcasts, highlight videos, and press releases, ensures that participants gain public visibility. This recognition can enhance your resume, showcase your leadership potential, and set you apart in academic or job applications.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold text-brand-primary mb-4 text-justify">
              Empowerment and Inspiration
            </h2>
            <p className="text-justify">
              DWC is more than an event; it's a movement that empowers youth to take an active role in shaping their city's future. By giving you a voice in policy discussions and a platform to present your ideas to influential leaders, DWC fosters a sense of purpose and civic responsibility. The opportunity to see your solutions potentially implemented can be incredibly motivating, inspiring you to continue driving positive change in your community and beyond. The event's high-profile setting at Hotel Agrabad and its focus on youth-led innovation create an inspiring environment that validates your potential as a changemaker.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold text-brand-primary mb-4 text-justify">
              Professional Event Experience
            </h2>
            <p className="text-justify">
              Held at Hotel Agrabad, a prestigious venue in Chattogram, DWC Chapter 02 offers a professional setting that mirrors real-world competitive and collaborative environments. The structured competition, with elimination rounds and a final showcase judged by city officials, provides a taste of professional presentations and high-stakes decision-making. This experience prepares you for future challenges in your career, whether in public policy, urban planning, or other fields.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold text-brand-primary mb-4 text-justify">
              Contribution to Sustainable Communities
            </h2>
            <p className="text-justify">
              DWC aligns with broader goals of sustainable community development, as highlighted by its corporate social responsibility (CSR) focus on education, youth empowerment, and sustainable communities. By participating, you contribute to creating a more inclusive, fair, and sustainable Chattogram. Your solutions address real urban issues, potentially improving the quality of life for residents and leaving a lasting legacy in your city.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold text-brand-primary mb-4 text-justify">
              Why DWC Stands Out
            </h2>
            <p className="text-justify">
              Unlike other programs that may focus solely on theoretical discussions, DWC emphasizes actionable outcomes. The collaboration with the City Corporation and the involvement of city leaders ensure that your work has a direct pathway to implementation. Additionally, DWC's scale—engaging thousands of youths, 30+ universities, and a massive audience—makes it a high-impact platform that amplifies your contributions. The event's marketing strategy, including pre-event promotions, live coverage, and post-event highlight videos, ensures that your efforts are seen and celebrated widely.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold text-brand-primary mb-4 text-justify">
              How to Get Involved
            </h2>
            <p className="text-justify">
              To participate, students can form teams through their universities and register for DWC Chapter 02. The process involves submitting team proposals, competing in elimination rounds, and presenting solutions to a panel of judges. For specific registration details, check the official DWC website or contact the organizers. Joining DWC is an opportunity to step into a leadership role, collaborate with like-minded peers, and make a difference in your community.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold text-brand-primary mb-4 text-justify">
              Conclusion
            </h2>
            <p className="text-justify">
              DWC is a transformative platform that empowers youth to become changemakers. By participating, you'll develop critical skills, build valuable connections, gain recognition, and contribute to sustainable urban solutions. Whether you're passionate about urban development, eager to network with leaders, or looking to enhance your professional profile, DWC offers a unique opportunity to grow, lead, and inspire. Join DWC Chapter 02 to take the first step toward shaping a better future for Chattogram and beyond.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold text-brand-primary mb-4 text-justify">
              Key Benefits of Participating in DWC
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-brand-primary text-white">
                    <th className="py-3 px-4 text-left">Benefit</th>
                    <th className="py-3 px-4 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-300">
                    <td className="py-3 px-4 font-medium">Real-World Impact</td>
                    <td className="py-3 px-4">Develop solutions that may be implemented by city authorities.</td>
                  </tr>
                  <tr className="border-t border-gray-300 bg-gray-50">
                    <td className="py-3 px-4 font-medium">Skill Development</td>
                    <td className="py-3 px-4">Gain expertise in research, project management, and public speaking.</td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td className="py-3 px-4 font-medium">Networking</td>
                    <td className="py-3 px-4">Connect with city leaders and peers from 30+ universities.</td>
                  </tr>
                  <tr className="border-t border-gray-300 bg-gray-50">
                    <td className="py-3 px-4 font-medium">Recognition</td>
                    <td className="py-3 px-4">Compete for prize money and gain media exposure.</td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td className="py-3 px-4 font-medium">Empowerment</td>
                    <td className="py-3 px-4">Be inspired to lead change and shape your city's future.</td>
                  </tr>
                  <tr className="border-t border-gray-300 bg-gray-50">
                    <td className="py-3 px-4 font-medium">Professional Experience</td>
                    <td className="py-3 px-4">Participate in a high-profile event with a professional setting.</td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td className="py-3 px-4 font-medium">Community Contribution</td>
                    <td className="py-3 px-4">Contribute to sustainable urban development in Chattogram.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Contact />
    </div>
  );
};

export default WhyParticipate;
