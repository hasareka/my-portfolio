import React, { useState } from 'react';
import aboutPic2 from "../assets/about2.jpg";
import zebrapic from "../assets/zebra.jpg";
import uomImg from '../assets/uom.jpg';
import taxilaImg from '../assets/taxila.png';
import prajapathiImg from '../assets/prajapathi.png';

function About() {
  const [previewImg, setPreviewImg] = useState(null);

  return (
    <section id="about" className="py-20 px-6 md:px-10 lg:px-24 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto">

        {/* Image Modal */}
        {previewImg && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setPreviewImg(null)}
          >
            <img
              src={previewImg}
              alt="Preview"
              className="max-w-[90%] max-h-[90%] rounded shadow-lg"
            />
          </div>
        )}

        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-400" data-aos="fade-right">
          About Me
        </h2>

        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
          <div className="md:w-2/3" data-aos="fade-right" data-aos-duration="1000">
            <p className="text-lg leading-relaxed text-gray-300 mb-4">
              I'm a final-year IT undergraduate at the University of Moratuwa, specializing in Software Engineering. I enjoy full-stack development and building impactful software.
            </p>
            {/* <p className="text-md text-gray-400">
              Skilled in React, Java, and modern tools like Tailwind CSS, I thrive in collaborative and creative environments.
            </p> */}
          </div>
          <div className="md:w-1/3 flex justify-center" data-aos="fade-left" data-aos-duration="1000">
            <img
              src={aboutPic2}
              alt="About"
              className="rounded-lg border-2 border-blue-400 shadow-lg w-64 h-64 object-cover"
            />
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-16" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-white mb-6">💼 Work Experience</h3>

          <div className="flex flex-col md:flex-row items-center gap-8" data-aos="fade-up">
            <img
              src={zebrapic}
              alt="Zebra Technologies"
              onClick={() => setPreviewImg(zebrapic)}
              className="rounded-lg shadow-lg w-70 h-72 object-cover shadow-md cursor-pointer hover:opacity-90 transition"
            />
            <div>
              <p className="text-gray-300 text-lg mb-2 font-semibold">
                Software Engineering Intern – Zebra Technologies Lanka
                <span className="text-gray-400 text-sm block">(Jan 2024 – Jul 2024)</span>
              </p>
              <p className="text-gray-400 leading-relaxed">
                During my six-month internship, I worked on Android-based enterprise solutions including DataWedge configurations and barcode scanning applications. I gained hands-on experience with Android and Java contributing to real-world tools used across Zebra's global teams. I also improved my technical documentation and agile collaboration skills.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-white mb-8">🎓 Education</h3>

          <div className="space-y-10">
            {/* UoM – image on right */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-6 mb-8" data-aos="fade-up">
              <img
                src={uomImg}
                alt="University of Moratuwa"
                onClick={() => setPreviewImg(uomImg)}
                className="w-60 h-52 rounded-lg object-cover shadow-md cursor-pointer hover:opacity-90 transition"
              />
              <div>
                <h4 className="text-xl font-semibold text-white">University of Moratuwa</h4>
                <p className="text-gray-300">BSc (Hons) in Information Technology (Expected 2025)</p>
                <p className="text-gray-400 mt-2 leading-relaxed">
                  Currently I am reading for my B.Sc. in Information Technology and Management at the Faculty of IT, University of Moratuwa, Sri Lanka.
                </p>
              </div>
            </div>

            {/* Taxila – image on left */}
            <div className="flex flex-col md:flex-row items-center gap-6" data-aos="fade-up">
              <img
                src={taxilaImg}
                alt="Taxila Central College"
                onClick={() => setPreviewImg(taxilaImg)}
                className="w-60 h-52 rounded-lg object-cover shadow-md cursor-pointer hover:opacity-90 transition"
              />
              <div>
                <h4 className="text-xl font-semibold text-white">Taxila Central College, Horana</h4>
                <p className="text-gray-300">G.C.E. A/L – Commerce Stream</p>
                <p className="text-gray-400 mt-2 leading-relaxed">
                  I completed my Advanced Level studies in the Commerce stream at Taxila Central College, Horana. I was able to secure 2A's and 1B pass and was placed 31<sup>st</sup> in Kalutara district.
                </p>
              </div>
            </div>

            {/* Prajapathi – image on right */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-6" data-aos="fade-up">
              <img
                src={prajapathiImg}
                alt="Prajapathi Balika Vidyalaya"
                onClick={() => setPreviewImg(prajapathiImg)}
                className="w-60 h-52 rounded-lg object-cover shadow-md cursor-pointer hover:opacity-90 transition"
              />
              <div>
                <h4 className="text-xl font-semibold text-white">Prajapathi Balika Vidyalaya, Horana</h4>
                <p className="text-gray-300">G.C.E. O/L</p>
                <p className="text-gray-400 mt-2 leading-relaxed">
                  I successfully completed my Ordinary Level examinations with 9 A's at Prajapathi Balika Vidyalaya, Horana.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hobbies */}
        {/* <div data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-white mb-4">🎯 Hobbies & Interests</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Photography & Creative Design</li>
            <li>Exploring new tech & building mini-projects</li>
            <li>Watching K-Dramas & Reading</li>
            <li>Travelling & Nature Walks</li>
          </ul>
        </div> */}
      </div>
    </section>
  );
}

export default About;
