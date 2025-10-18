import React from "react";

function Footer() {
    return (
        <footer className="bg-[#020817] text-gray-300 py-12 px-6 md:px-16 text-center">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
                {/* Left side */}
                <div className="flex items-center space-x-2">
                   <div className="flex items-center justify-center w-10 h-10 bg-[#3C83F6] rounded-lg">
                        <img
                            src = '/target.png'
                            alt = 'Logo'
                            className="w-6 h-6 object-contain"
                        />
                    </div>
                    <span className="font-semibold text-white text-sm sm:text-base">
                        Smart-To-Do Planner
                    </span>
                </div>

                {/* Middle */}
                <div className="flex space-x-4 mt-4 sm:mt-0 text-sm">
                    <a href="#" className="hover:text-white">Terms</a>
                    <a href="#" className="hover:text-white">Privacy</a>
                    <a href="#" className="hover:text-white">Contact</a>
                </div>

                {/* Right */}
                <p className="text-xs sm:text-sm mt-4 sm:mt-0">© 2025 Smart-To-Do Planner.
                    <br></br>All rights reserved
                </p>
                
            </div>
        </footer>
    );
}
export default Footer;