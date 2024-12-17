import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">
            About BurnMetrics
          </h2>
          <p className="text-sm leading-relaxed">
            BurnMetrics is your ultimate fitness tracking app. Track workouts,
            monitor progress, and achieve your fitness goals faster and smarter.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-orange-400 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className="hover:text-orange-400 transition duration-300"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/workouts"
                className="hover:text-orange-400 transition duration-300"
              >
                Workouts
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-orange-400 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">Follow Us</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition duration-300"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition duration-300"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition duration-300"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">Contact Us</h2>
          <ul className="space-y-2 text-sm">
            <li>Email: support@burnmetrics.com</li>
            <li>Phone: +91 7017502703</li>
            <li>Address: Adarsh Nagar, Jaipur</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} BurnMetrics. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
