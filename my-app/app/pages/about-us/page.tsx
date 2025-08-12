import React from 'react'

const page = () => {
  return (
   <div className="min-h-screen bg">
      <div className="bg-gradient-to-r from-blue-100 to-blue-100 text-gray-400 py-4 px-4">
       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 text-center md:text-left">
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        Learn to Code Websites And Apps
     </h1>
   <p className="mt-4 text-lg opacity-90">
       A Learning Management System (LMS) is a digital platform that simplifies the creation, delivery, and tracking of educational content.
        It enables instructors to design interactive courses with videos, documents, and quizzes.
        Learners can access materials anytime, anywhere, on any device.
        The system tracks progress, provides assessments, and generates performance reports.
        LMS improves efficiency, engagement, and accessibility in education and training.
          </p>
            <button className="mt-6 bg-blue-200 text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-300 transition">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">WHY LMS?</h3>
              <p className="text-gray-600 text-sm">
                Easy access to information, Efficient Management, Multimedia Learning
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">BENEFITS</h3>
              <p className="text-gray-600 text-sm">
              Offers consistent learning resources, 24/7 remote access, Tracking and Reporting
              </p>
            </div>
             <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">FEATURES</h3>
              <p className="text-gray-600 text-sm">
                Content Delivery, Assessment & Evaluation, Communication Tools
              </p>
            </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">ACHIEVEMENTS</h3>
              <p className="text-gray-600 text-sm">
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default page
