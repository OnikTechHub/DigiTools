import React from 'react';

const PricingSection = () => {
  return (
    <section className="bg-base-100 py-16 px-4">
      <div className="container mx-auto">
        {/* Header - আরও ছোট মার্জিন */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-sm text-base-content/60 max-w-md mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards Grid - max-w-5xl দিয়ে কন্টেইনার ছোট করা হয়েছে */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
          
          {/* Starter Plan */}
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
              <li className="flex items-center gap-2"><span className="text-success font-bold">✓</span> Access to 10 free tools</li>
              <li className="flex items-center gap-2"><span className="text-success font-bold">✓</span> Basic templates</li>
              <li className="flex items-center gap-2"><span className="text-success font-bold">✓</span> Community support</li>
              <li className="flex items-center gap-2"><span className="text-success font-bold">✓</span> 1 project per month</li>
            </ul>
            <button className="btn btn-primary btn-outline btn-sm w-full rounded-full border-2">Get Started</button>
          </div>

          {/* Pro Plan (Highlighted but Compact) */}
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
              <li className="flex items-center gap-2"><span>✓</span> All premium tools</li>
              <li className="flex items-center gap-2"><span>✓</span> Unlimited templates</li>
              <li className="flex items-center gap-2"><span>✓</span> Priority support</li>
              <li className="flex items-center gap-2"><span>✓</span> Unlimited projects</li>
              <li className="flex items-center gap-2"><span>✓</span> Cloud sync</li>
              <li className="flex items-center gap-2"><span>✓</span> Advanced analytics</li>
            </ul>
            <button className="btn bg-white text-primary btn-sm border-none hover:bg-slate-100 w-full rounded-full shadow-md">Start Pro Trial</button>
          </div>

          {/* Enterprise Plan */}
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
            <button className="btn btn-primary btn-outline btn-sm w-full rounded-full border-2">Contact Sales</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;