import React from 'react';
import expense from "../assets/expense.svg";
import user from "../assets/user.svg";

export default function Navbar() {
    return (
        <>
            <nav className="bg-slate-500 p-4 flex justify-between items-center">
                {/* Left Icon (Expense Icon) */}
                <div className="flex items-center space-x-2">
                    <img src={expense} alt="Expense Icon" className="w-6 h-6" />
                </div>

                {/* Search Bar */}
                <div className="flex-1 max-w-lg mx-auto">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full bg-gray-700 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-4.35-4.35m1.45-4.75a7 7 0 10-14 0 7 7 0 0014 0z"
                                />
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Right Icons */}
                <div className="flex items-center space-x-4">
                    {/* User Profile Image (User Icon) */}
                    <img src={user} alt="User Profile" className="w-8 h-8 rounded-full" />
                </div>
            </nav>
        </>
    );
}
