
import React from "react";

const Page = () => {
  const courses = [
    {
      title: "Full-Stack Web Development",
      description:
        "Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB to build modern websites and apps.",
      duration: "12 Weeks",
      level: "Beginner - Intermediate",
    },
    {
      title: "Data Science & Machine Learning",
      description:
        "Master Python, Pandas, NumPy, Scikit-learn, and AI models for real-world analytics.",
      duration: "14 Weeks",
      level: "Intermediate",
    },
    {
      title: "Cloud Computing with AWS",
      description:
        "Understand AWS services, deployment, and cloud security to manage scalable apps.",
      duration: "10 Weeks",
      level: "Intermediate",
    },
  ];

  return (
    <div className="min-h-1 bg-gray-50">
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">COURSES</h1>
          <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
            Explore our variety of courses designed to help you learn and grow
            in your career.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <p className="text-gray-700">
                <strong>Duration:</strong> {course.duration}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Level:</strong> {course.level}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
