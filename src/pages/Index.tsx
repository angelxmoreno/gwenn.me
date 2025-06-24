import {useState} from 'react';
import {Mail} from 'lucide-react';
import {socialLinks} from "@/lib/socialLinks";

const Index = () => {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);


    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div
                    className="absolute -bottom-40 -left-40 w-80 h-80 bg-lime-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
                <div
                    className="absolute top-40 left-1/2 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-8">
                {/* Header/Profile Section */}
                <div className="text-center mb-12 animate-fade-in">
                    <div className="relative inline-block mb-6">
                        <div
                            className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-emerald-400 to-green-600 p-1">
                            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                <div
                                    className="w-24 h-24 rounded-full bg-gradient-to-br from-lime-300 to-emerald-400 flex items-center justify-center text-4xl font-bold text-black">
                                    G
                                </div>
                            </div>
                        </div>
                        <div
                            className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full blur opacity-30 animate-pulse"></div>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
                        Gwenniviere
                    </h1>
                    <p className="text-xl text-gray-300 mb-2">Singer • Rapper • Performer • Creator</p>
                    <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
                        (っ◔◡◔)っ<br/>♥ Gwenniviere ♥<br/>Success is in my veins. <br/>
                        Connect with me on all platforms.
                    </p>
                </div>

                {/* Social Links Grid */}
                <div className="max-w-2xl mx-auto space-y-4">
                    {socialLinks.map((link, index) => {
                        const IconComponent = link.icon;
                        return (
                            <a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group"
                                onMouseEnter={() => setHoveredLink(link.id)}
                                onMouseLeave={() => setHoveredLink(null)}
                                style={{animationDelay: `${index * 100}ms`}}
                            >
                                <div
                                    className="relative p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-green-500/20 hover:bg-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-green-500/20">
                                    {/* Gradient background overlay */}
                                    <div
                                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                                    <div className="relative flex items-center space-x-4">
                                        <div
                                            className={`p-3 rounded-xl bg-gradient-to-r ${link.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent className="w-6 h-6 text-white"/>
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-lime-400 group-hover:to-emerald-400 transition-all duration-300">
                                                        {link.name}
                                                    </h3>
                                                    <p className="text-gray-400 text-sm">{link.handle}</p>
                                                </div>
                                                <div
                                                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <div
                                                        className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-white" fill="none"
                                                             viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  strokeWidth={2}
                                                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            {hoveredLink === link.id && (
                                                <p className="text-gray-300 text-sm mt-2 animate-fade-in">
                                                    {link.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="text-center mt-16 animate-fade-in">
                    <div
                        className="inline-flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors duration-300">
                        <Mail className="w-4 h-4"/>
                        <a href={'mailto:music@gwenn.me?subject=Hello, from a fan ♥'} target={'_blank'} className="text-sm">music@gwenn.me</a>
                    </div>
                    <p className="text-gray-500 text-xs mt-4">
                        © {(new Date()).getFullYear()} Gwenniviere. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Index;
