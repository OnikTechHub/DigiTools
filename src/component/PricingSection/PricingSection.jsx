import React from 'react';

const PricingSection = () => {
    return (
        <section className="bg-base-100 py-16 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-3">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-sm text-base-content/60 max-w-md mx-auto">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

               
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">

                    <div className="card bg-base-100 border border-base-200 shadow-sm p-6 rounded-2xl hover:shadow-md transition-all max-w-sm mx-auto w-full">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold">Starter</h3>
                            <p className="text-xs text-base-content/60">Perfect for getting started</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">$0</span>
                            <span className="text-sm text-base-content/40">/Month</span>
                        </div>

                        <ul className="space-y-3 mb-8 text-xs">
                            <li className="flex items-center gap-2"><span className="text-success font-bold">✓</span> 10 free tools</li>
                            <li className="flex items-center gap-2"><span className="text-success font-bold">✓</span> Basic templates</li>
                            <li className="flex items-center gap-2"><span className="text-success font-bold">✓</span> Community support</li>
                            <li className="flex items-center gap-2"><span className="text-success font-bold">✓</span> 1 project per month</li>
                        </ul>

                        <button className="w-full py-3 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:scale-105 transition">
                            Get Started Free
                        </button>
                    </div>

                    <div className="card bg-primary text-primary-content shadow-xl p-8 rounded-2xl scale-105 z-10 relative max-w-sm mx-auto w-full">

                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-warning text-warning-content text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-md">
                            Most Popular
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-white">Pro</h3>
                            <p className="text-xs text-white/80">Best for professionals</p>
                        </div>

                        <div className="mb-6 text-white">
                            <span className="text-4xl font-bold">$29</span>
                            <span className="text-sm text-white/60">/Month</span>
                        </div>

                        <ul className="space-y-3 mb-8 text-xs text-white/90">
                            <li className="flex items-center gap-2"><span>✓</span> Access to all premium tools</li>
                            <li className="flex items-center gap-2"><span>✓</span> Unlimited templates</li>
                            <li className="flex items-center gap-2"><span>✓</span> Priority support</li>
                            <li className="flex items-center gap-2"><span>✓</span> Cloud sync</li>
                            <li className="flex items-center gap-2"><span>✓</span> Advanced analytics</li>
                        </ul>

                        <button className="w-full py-3 rounded-full bg-white text-purple-600 font-semibold hover:scale-105 transition">
                            Start Pro Trial
                        </button>

                    </div>

                    <div className="card bg-base-100 border border-base-200 shadow-sm p-6 rounded-2xl hover:shadow-md transition-all max-w-sm mx-auto w-full">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold">Enterprise</h3>
                            <p className="text-xs text-base-content/60">For teams & businesses</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">$99</span>
                            <span className="text-sm text-base-content/40">/Month</span>
                        </div>

                        <ul className="space-y-3 mb-8 text-xs">
                            <li className="flex items-center gap-2"><span className="text-success font-bold">✓</span> Everything in Pro</li>
                            <li className="flex items-center gap-2"><span className="text-success font-bold">✓</span> Team collaboration</li>
                            <li className="flex items-center gap-2"><span className="text-success font-bold">✓</span> Custom integrations</li>
                            <li className="flex items-center gap-2"><span className="text-success font-bold">✓</span> Dedicated support</li>
                            <li className="flex items-center gap-2"><span className="text-success font-bold">✓</span> SLA guarantee</li>
                            <li className="flex items-center gap-2"><span className="text-success font-bold">✓</span> Custom branding</li>
                        </ul>

                        <button className="w-full py-3 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:scale-105 transition">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PricingSection;