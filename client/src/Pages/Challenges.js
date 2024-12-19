import React from "react";
import seventfivehard from "../Assets/75hard.jpeg";
import winter from "../Assets/winter.jpeg";
import running from "../Assets/running.jpeg";

const ChallengesPage = () => {
  const challenges = [
    {
      title: "75 Hard",
      description:
        "A mental toughness program designed to challenge your limits with strict rules and daily tasks.",
      image: seventfivehard,
      link: "/seventyfive",
      category: "Mental Toughness",
    },
    {
      title: "100 km in a Week",
      description:
        "A challenge to run or walk 100 km in a week, pushing your endurance and consistency.",
      image: running,
      link: "/running",
      category: "Endurance",
    },
    {
      title: "Winter Arc",
      description:
        "Stay active and fit during the cold winter months with this seasonal challenge.",
      image: winter,
      link: "/challenges",
      category: "Seasonal",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Challenges Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Pick Your Challenge
          </h2>
          <p className="text-gray-600 mt-2">
            Each challenge is designed to keep you motivated and test your
            limits.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Image */}
              <img
                src={challenge.image}
                alt={challenge.title}
                className="w-full h-64 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block bg-orange-100 text-orange-500 text-xs font-semibold px-3 py-1 rounded-full">
                    {challenge.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {challenge.description}
                </p>
                <div className="flex justify-center">
                  <a
                    href={challenge.link}
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition"
                  >
                    Start Challenge
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Ready to Take on a Challenge?
          </h2>
          <p className="text-gray-600 mt-4">
            Don’t wait! Select a challenge, commit, and start your journey to a
            healthier, stronger you.
          </p>
          <a
            href="/"
            className="mt-6 inline-block bg-orange-500 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-orange-600 transition"
          >
            Explore More Challenges
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChallengesPage;
