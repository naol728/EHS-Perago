import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-200 text-center mb-6">
          Who We Are
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          <span className="font-semibold">Perago Information Systems PLC</span>{" "}
          is a cutting-edge and innovative technology-based solution providing
          company with a focus on designing and developing multi-channel based
          software solutions using Web, SMS, WAP, IVR, Kiosk, social media, and
          mobile applications; custom software development and quality assurance
          services; E-services consulting, development, and implementation;
          design innovative public service delivery initiatives using technology
          solutions; research and training services; E-governance enablement;
          ICT consulting; and capacity building, in Ethiopia and beyond.
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
          Perago is established by highly qualified and experienced
          professionals in management, economics, business administration,
          software engineering, and information systems management. It also
          houses professionals who are internationally certified in leading-edge
          information and communication technologies. Perago provides strong
          technical support and knowledge transfer to sustain the competitive
          advantages gained by customers from their investments in Perago’s
          services.
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
          Beside the technical capacity, Perago’s management has commendable
          entrepreneurial flair with strong ethical and professional standards.
        </p>
      </div>
    </div>
  );
}
