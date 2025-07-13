import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImg from "./harshwardhan_profile.jpg"; // Replace with actual image

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-pink-50 to-blue-100 text-gray-800 font-sans">

      {/* Hero Section */}
      <section data-aos="fade-down" className="bg-gradient-to-br from-[#141e30] via-[#243b55] to-[#141e30] text-white py-20 px-6 text-center">
        <img src={profileImg} alt="Harshwardhan Patil" className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white shadow-2xl" />
        <h1 className="text-5xl font-extrabold mb-2 tracking-wider">Harshwardhan Patil</h1>
        <p className="text-xl font-medium">Cloud Engineer | AWS | DevOps | EC2 | S3 | Linux | Route 53</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
  {["summary", "technical-summary", "skills", "projects", "experience", "certifications", "education", "contact"].map(section => (
    <a
      key={section}
      href={`#${section}`}
      className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold shadow hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:text-white transition capitalize"
    >
      {section.replace("-", " ")}
    </a>
  ))}

  {/* ✅ Correct Placement of Resume Button */}
  <a
    href="/Harshwardhan_Patil_Resume.pdf"
    download
    className="mt-4 inline-block bg-white text-indigo-900 px-6 py-2 rounded-full font-bold shadow-md hover:bg-indigo-100 transition duration-300"
  >
    ⬇️ Download Resume
  </a>
</div>

      </section>

      {/* Summary */}
      <section id="summary" data-aos="fade-left" className="p-8 max-w-5xl mx-auto bg-white rounded-xl shadow-lg hover:bg-indigo-50 transition duration-300">
        <h2 className="text-3xl font-bold mb-4 text-indigo-800 border-b-4 border-indigo-300 pb-2 text-center">🧾 Summary</h2>
        <p className="text-lg leading-relaxed text-gray-800">
          Enthusiastic and quick learner with a strong foundation in cloud infrastructure, automation, and development. Excellent problem-solving skills, passion for AWS technologies, and the ability to adapt quickly to new tools and environments. Looking for Cloud Engineer roles.
        </p>
      </section>

      {/* Education */}
      <section id="education" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12 border-b-4 border-blue-400 pb-2">🎓 Education</h2>
        {[{
          title: "BE in Electronics & Telecommunication Engineering",
          desc: "Sinhgad Institute of Technology & Science, Pune (2020–2024) — SGPA: 6.55",
          color: "from-blue-100 via-white to-blue-50"
        }, {
          title: "Diploma in Electronics & Telecommunication Engineering",
          desc: "Sou Venutai Chavan Polytechnic, Pune (2018–2021) — Percentage: 85.12%",
          color: "from-green-100 via-white to-green-50"
        }].map((edu, i) => (
          <div key={i} data-aos="fade-up" className={`bg-gradient-to-br ${edu.color} rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition`}>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">{edu.title}</h3>
            <p className="text-gray-700">{edu.desc}</p>
          </div>
        ))}
      </section>


      {/* Technical Summary */}
      <section id="technical-summary" data-aos="zoom-in" className="p-8 max-w-5xl mx-auto bg-gradient-to-r from-teal-100 via-white to-purple-100 rounded-xl shadow hover:shadow-2xl transition duration-300">
        <h2 className="text-3xl font-bold mb-4 text-teal-800 border-b-4 border-teal-400 pb-2 text-center">📘 Technical Summary</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>Designed scalable AWS solutions using EC2, S3, VPC, and CloudFront</li>
          <li>Managed secure IAM roles, policies, and implemented MFA</li>
          <li>Configured EBS volumes and created snapshots for backup</li>
          <li>Worked with Linux servers and automated provisioning with cloud tools</li>
          <li>Used Route 53 and CloudFront for DNS and global content delivery</li>
        </ul>
      </section>

      {/* Skills */}
     {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-12 border-b-4 border-purple-400 pb-2">🧠 Technical Skills</h2>

        {/* AWS Section */}
        <div data-aos="fade-up" className="bg-gradient-to-r from-purple-100 via-white to-indigo-100 rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition">
          <h3 className="text-3xl font-bold text-purple-800 mb-6 text-center">☁️ AWS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {["EC2", "S3", "IAM", "VPC", "CloudFront", "EBS", "Elastic IP", "Route 53", "AMI & Snapshots", "MFA"].map((skill, index) => (
              <div key={index}>
                <h4 className="text-lg font-bold text-white bg-purple-700 inline-block px-3 py-1 rounded-lg shadow mb-1">{skill}</h4>
                <p className="text-gray-700">
                  {{
                    EC2: "Launched and managed virtual servers for scalable cloud applications. Handled key pairs, security groups, AMI creation, and instance monitoring.",
                    S3: "Configured buckets for object storage, enabled versioning, lifecycle rules, static website hosting, and secured access using bucket policies.",
                    IAM: "Created and managed users, groups, roles, and custom policies to control AWS access using best practices and least privilege principles.",
                    VPC: "Designed custom VPCs with public/private subnets, route tables, NAT Gateways, and network ACLs for secure networking.",
                    CloudFront: "Configured CDN distributions for faster global delivery and HTTPS-secured static content.",
                    EBS: "Attached persistent block storage to EC2 instances. Created and managed volumes, snapshots, and performance tuning.",
                    "Elastic IP": "Allocated and associated static IPs with EC2 instances to maintain consistent addressing across reboots.",
                    "Route 53": "Configured DNS records for domain routing and integrated health checks and failover policies.",
                    "AMI & Snapshots": "Created reusable Amazon Machine Images (AMIs) and periodic EBS snapshots for system backup and disaster recovery.",
                    MFA: "Enabled Multi-Factor Authentication for root and IAM users to enhance security on AWS accounts."
                  }[skill]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud Infra & Security */}
        <div data-aos="fade-up" className="bg-gradient-to-r from-pink-100 via-white to-rose-100 rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition">
          <h3 className="text-3xl font-bold text-pink-800 mb-6 text-center">🔐 Cloud Infrastructure & Security</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li><span className="font-bold text-pink-700">Multi-AZ Architectures:</span> Designed high availability environments across availability zones.</li>
            <li><span className="font-bold text-pink-700">IAM Roles & Policies:</span> Enforced role-based security with least-privilege access.</li>
            <li><span className="font-bold text-pink-700">Monitoring:</span> Set up CloudTrail and CloudWatch for logging and insights.</li>
            <li><span className="font-bold text-pink-700">Backup:</span> Scheduled automatic EBS snapshots for disaster recovery.</li>
          </ul>
        </div>

        {/* Programming & Tools */}
        <div data-aos="fade-up" className="bg-gradient-to-r from-teal-100 via-white to-green-100 rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition">
          <h3 className="text-3xl font-bold text-green-800 mb-6 text-center">💻 Programming, Tools & Databases</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li><span className="font-bold text-green-700">Linux:</span> Performed server management, bash scripting, and permission control.</li>
            <li><span className="font-bold text-green-700">MySQL:</span> Managed schemas, joined tables, and created queries for relational databases.</li>
            <li><span className="font-bold text-green-700">API Gateway:</span> Designed and secured RESTful APIs for serverless integrations.</li>
            <li><span className="font-bold text-green-700">Lambda:</span> Built and deployed Python-based serverless functions.</li>
            <li><span className="font-bold text-green-700">SageMaker:</span> Conducted basic machine learning experiments using managed notebooks.</li>
          </ul>
        </div>
      </section>
      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-yellow-700 mb-12 border-b-4 border-yellow-400 pb-2">🚀 Projects</h2>
        {[{
          title: "Data Visualization in Power BI",
          desc: `• Designed Zomato dashboards using Power BI for data insights\n• Integrated Zomato API for dynamic data fetching\n• Created geo-maps to highlight restaurant locations and cuisines\n• Delivered visual KPIs on ratings, customer behavior, and trends`
        }, {
          title: "Ultrasonic Glasses for Blind",
          desc: `• Designed a wearable sensor system for visually impaired\n• Used ultrasonic sensors for obstacle detection and vibration feedback\n• Selected for demonstration in NAAC accreditation committee\n• Demonstrated practical application of electronics for accessibility`
        }, {
          title: "Smart Dustbin using AI Audio Classifier",
          desc: `• Developed AI model to classify materials via sound recognition\n• Deployed AWS services (S3, Lambda, API Gateway) for real-time use\n• Used S3 for dataset storage and Gateway for smart bin hardware\n• Built responsive feedback and dashboard for waste sorting`
        }].map((project, i) => (
          <div key={i} data-aos="fade-up" className="bg-gradient-to-br from-yellow-100 via-white to-yellow-50 rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">📌 {project.title}</h3>
            <p className="text-gray-700 whitespace-pre-line">{project.desc}</p>
          </div>
        ))}
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-red-700 mb-12 border-b-4 border-red-400 pb-2">💼 Work Experience</h2>
        <div data-aos="fade-up" className="bg-gradient-to-br from-red-100 via-white to-red-50 rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold text-red-800 mb-2">Intern - Bharat Forge Limited</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Learned about PLC SCADA systems and automation</li>
            <li>Deployed and tested PLC programs in live circuits</li>
            <li>Resolved hardware/software faults in automated machines</li>
            <li>Performed preventive maintenance on industrial machines</li>
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-12 border-b-4 border-teal-400 pb-2">📜 Certifications</h2>
        {[
          "AWS Architecture – Edubridge",
          "Workshop on Arduino and IoT – Trinity",
          "Winner – Microproject Competition – Techonic Karandak",
          "Mini Militia – Technofest – Govt Polytechnic Pune"
        ].map((cert, i) => (
          <div key={i} data-aos="fade-up" className="bg-gradient-to-br from-blue-100 via-white to-indigo-100 rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition">
            <h3 className="text-lg font-semibold">{cert}</h3>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section id="contact" data-aos="fade-up" className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">📬 Get in Touch</h2>
        <p className="mb-2">📧 <a href="mailto:hkpatil49680@gmail.com" className="hover:underline text-blue-300">hkpatil49680@gmail.com</a></p>
        <p className="mb-2">📞 <a href="tel:+919270037185" className="hover:underline text-blue-300">+91 92700 37185</a></p>
        <p>📍 Pune, Maharashtra, India</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition"><FaGithub size={30} /></a>
          <a href="https://linkedin.com/in/harshwardhan-patil-1a70621" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition"><FaLinkedin size={30} /></a>
          <a href="mailto:hkpatil49680@gmail.com" className="hover:text-yellow-300 transition"><MdEmail size={30} /></a>
          <a href="tel:9270037185" className="hover:text-yellow-300 transition"><MdPhone size={30} /></a>
        </div>
      </section>
    </main>
  );
}
