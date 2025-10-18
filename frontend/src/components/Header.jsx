import { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/outline';
import ThemeToggleButton from "@/components/ThemeToggleButton";

function Header({user}){
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="py-4 px-8 flex justify-between items-center bg-[var(--color-bg)] text-[var(--color-text)] shadow-md relative z-20">
                {/* Left Side */}
                <div className="flex items-center space-x-4">
                    {user ? (
                        <>
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? (
                                    <Bars3Icon className="h-6 w-6 text-[var(--color-text)] rotate-90"/>
                                    ) : (
                                        <Bars3Icon className="h-6 w-6 text-[var(--color-text)] rotate-90"/>
                                    )
                                }
                            </button>
                            <span className="font-bold text-xl text-[var(--color-text)]">Smart-To-Do Planner</span> {/* Logo Text */}
                         </>
                        ) : (
                            <div className="flex items-center space-x-3">
                                {/* Logo Container */}
                                <div className="flex items-center justify-center w-10 h-10 bg-[#3C83F6] rounded-lg">
                                    <img
                                        src = '/target.png'
                                        alt = 'Logo'
                                        className="w-6 h-6 object-contain"
                                    />
                                </div>
                                <span className="font-bold text-2xl text-[var(--color-text)]">Smart-To-Do Planner</span> {/* Logo Text */}
                            </div>
                        )
                    }
                </div>

                {/* Right Side */}
                <div className="flex items-center space-x-4">
                    <ThemeToggleButton />
                    {!user ? (
                        <>
                            <button className="px-4 py-2 rounded-md border border-primary hover:bg-primary hover:text-primary-foreground transition">Login</button>
                            <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition"> Get Started</button>
                        </>
                    ) : (
                        // User Avatar Placeholder
                        <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-semibold">
                            {user.name.charAt(0).toUpperCase()}
                        </div>
                        )
                    }
                </div>
            </header>
             {/* Sidebar*/}
                {user && (
                    <Sidebar 
                    isOpen={menuOpen} 
                    onClose={() => setMenuOpen(false)} 
                    user={user} 
                    />
                )}
        </>
    );
}
export default Header;