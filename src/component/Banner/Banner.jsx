import React from "react";
import bannerImg from '../../assets/products/banner.png';
import playIcon from '../../assets/products/Play.png';

const Banner = () => {
    return (
        <section className="container w-11/12  mx-auto px-6 py-16 lg:py-24 ">
            <div className="flex flex-col lg:flex-row items-center gap-12">

                <div className="flex-1 text-center lg:text-left space-y-6">

                    <div className="inline-flex items-center gap-2 bg-purple-100 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        New: AI-Powered Tools Available
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                        Supercharge Your <br className="hidden md:block" />
                        <span >Digital Workflow</span>
                    </h1>

                    <p className="text-lg text-slate-500 max-w-xl mx-auto lg:mx-0">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        Explore Products
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                        <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]  btn btn-primary rounded-full px-8 text-white shadow-lg hover:shadow-primary/30 transition-all">
                            Explore Products
                        </button>
                        <button className="btn btn-outline border-primary text-primary hover:bg-primary/5 hover:border-primary rounded-full px-8 gap-2">
                            <img src={playIcon} alt="Play" className="w-4 h-4" />
                            Watch Demo
                        </button>
                    </div>
                </div>

                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                        <img
                            src={bannerImg}
                            alt="Digital Workflow"
                            className="relative h-130 w-auto  rounded-3xl "
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Banner;