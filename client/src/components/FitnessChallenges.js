import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import seventfivehard from "../Assets/75hard.jpeg";

import winter from "../Assets/winter.jpeg";
import running from "../Assets/running.jpeg";

const FitnessChallenges = () => {
  const challenges = [
    {
      title: "75 Hard",
      description:
        "A mental toughness program designed to challenge your limits.",
      image: seventfivehard,
      link: "/seventyfive",
    },
    {
      title: "100 km in a Week",
      description: "Run or walk 100 km in one week to test your endurance.",
      image: running,
      link: "/running",
    },
    {
      title: "Winter Arc",
      description: "Stay active and fit during the cold winter months.",
      image: winter,
      link: "/challenges",
    },
  ];

  return (
    <div className="min-h-screen py-8 lg:mx-48">
      <div>
        <div>
          <h2 className="text-3xl font-bold text-center mb-6">
            Fitness Challenges
          </h2>
          <p className="text-center text-gray-700 text-sm mb-6 tracking-widest">
            A collection of fitness challenges to help you push your limits and
            stay motivated.
          </p>
        </div>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
            className="px-4"
          >
            {challenges.map((challenge, index) => (
              <SwiperSlide key={index}>
                <div className="shadow-md overflow-hidden pb-10">
                  {/* Image Wrapper */}
                  <div className="flex items-center justify-center ">
                    <img
                      src={challenge.image}
                      alt={challenge.title}
                      className="w-full max-w-md h-80 object-cover shadow-lg "
                    />
                  </div>
                  {/* Challenge Content */}
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 tracking-widest">
                      {challenge.description}
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition duration-300">
                      <a href={challenge.link}>Start Now</a>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-button-next  text-3xl !text-gray-400 hover:!text-gray-600 absolute top-1/2 right-4 z-10 cursor-pointer">
              &rarr;
            </div>
            <div className="swiper-button-prev text-3xl !text-gray-400 hover:!text-gray-600 absolute top-1/2 left-4 z-10 cursor-pointer">
              &larr;
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FitnessChallenges;
