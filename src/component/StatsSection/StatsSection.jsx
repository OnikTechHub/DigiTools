import React from 'react';

const StatsSection = () => {
    return (
        <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-primary-content py-12 px-6">
            <div className="container mx-auto">

                <div className="stats stats-vertical  lg:stats-horizontal w-full bg-transparent shadow-none border-0 gap-6">


                    <div className="stat place-items-center text-center p-0 ">
                        <div className="stat-value text-5xl font-extrabold text-white tracking-tight">
                            50K+
                        </div>
                        <div className="stat-desc text-base text-white/90 font-medium mt-3">
                            Active Users
                        </div>
                    </div>


                    <div className="stat place-items-center text-center p-0">
                        <div className="stat-value text-5xl font-extrabold text-white tracking-tight">
                            200+
                        </div>
                        <div className="stat-desc text-base text-white/90 font-medium mt-3">
                            Premium Tools
                        </div>
                    </div>

                    <div className="stat place-items-center text-center p-0">
                        <div className="stat-value text-5xl font-extrabold text-white tracking-tight ">
                            4.9
                        </div>
                        <div className="stat-desc text-base text-white/90 font-medium mt-3">
                            Rating
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default StatsSection;