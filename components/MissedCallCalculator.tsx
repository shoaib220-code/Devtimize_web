'use client';

import React, { useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { trackCTAClick } from '@/utils/analytics';

const INDUSTRY_DEFAULTS: Record<string, { avgJobValue: number; missedCallsPerWeek: number }> = {
  HVAC: { avgJobValue: 350, missedCallsPerWeek: 6 },
  Dentists: { avgJobValue: 500, missedCallsPerWeek: 5 },
  Lawyers: { avgJobValue: 750, missedCallsPerWeek: 4 },
  Medspas: { avgJobValue: 300, missedCallsPerWeek: 5 },
  Roofing: { avgJobValue: 4000, missedCallsPerWeek: 5 },
  Plumbers: { avgJobValue: 250, missedCallsPerWeek: 6 },
  Restaurants: { avgJobValue: 60, missedCallsPerWeek: 10 },
  'Real Estate': { avgJobValue: 5000, missedCallsPerWeek: 4 },
};

const INDUSTRIES = Object.keys(INDUSTRY_DEFAULTS);

// Based on the on-page stat: roughly 1 in 3 missed calls becomes a competitor's client.
const BOOKING_RATE = 1 / 3;

export const MissedCallCalculator = () => {
  const [industry, setIndustry] = useState('HVAC');
  const [avgJobValue, setAvgJobValue] = useState(INDUSTRY_DEFAULTS.HVAC.avgJobValue);
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState(INDUSTRY_DEFAULTS.HVAC.missedCallsPerWeek);

  const handleIndustryChange = (next: string) => {
    setIndustry(next);
    setAvgJobValue(INDUSTRY_DEFAULTS[next].avgJobValue);
    setMissedCallsPerWeek(INDUSTRY_DEFAULTS[next].missedCallsPerWeek);
  };

  const monthlyLoss = useMemo(() => {
    const missedCallsPerMonth = missedCallsPerWeek * 4.33;
    const lostJobs = missedCallsPerMonth * BOOKING_RATE;
    return Math.round(lostJobs * avgJobValue);
  }, [avgJobValue, missedCallsPerWeek]);

  return (
    <div className="bg-bg-surface border border-bg-stroke rounded-3xl p-8 md:p-12">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-2 text-center">
        Missed Call Cost Calculator
      </h2>
      <p className="text-text-secondary text-center max-w-xl mx-auto mb-10">
        See what missed calls are estimated to cost your business every month.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div>
          <label className="text-xs font-mono text-text-muted uppercase tracking-widest block mb-2">
            Industry
          </label>
          <select
            value={industry}
            onChange={(e) => handleIndustryChange(e.target.value)}
            className="w-full bg-bg-raised border border-bg-stroke rounded-xl px-4 py-3 text-text-primary outline-none focus:border-acid-cyan transition-all appearance-none"
          >
            {INDUSTRIES.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs font-mono text-text-muted uppercase tracking-widest block mb-2">
            Average job value ($)
          </label>
          <input
            type="number"
            min={0}
            value={avgJobValue}
            onChange={(e) => setAvgJobValue(Math.max(0, Number(e.target.value)))}
            className="w-full bg-bg-raised border border-bg-stroke rounded-xl px-4 py-3 text-text-primary outline-none focus:border-acid-cyan transition-all"
          />
        </div>

        <div>
          <label className="text-xs font-mono text-text-muted uppercase tracking-widest block mb-2">
            Missed calls per week
          </label>
          <input
            type="number"
            min={0}
            value={missedCallsPerWeek}
            onChange={(e) => setMissedCallsPerWeek(Math.max(0, Number(e.target.value)))}
            className="w-full bg-bg-raised border border-bg-stroke rounded-xl px-4 py-3 text-text-primary outline-none focus:border-acid-cyan transition-all"
          />
        </div>
      </div>

      <div className="text-center mb-8">
        <p className="text-sm font-mono text-text-muted uppercase tracking-widest mb-2">
          Estimated monthly revenue lost to missed calls
        </p>
        <p className="font-display text-5xl md:text-6xl font-bold text-ember">
          ${monthlyLoss.toLocaleString()}
        </p>
        <p className="text-xs text-text-muted mt-3 max-w-md mx-auto">
          Estimate assumes roughly 1 in 3 missed calls would have booked — edit the numbers above to match your business.
        </p>
      </div>

      <div className="text-center">
        <a
          href="#pricing"
          onClick={() => trackCTAClick('Calculator Stop Losing Revenue', 'missed_call_calculator')}
          className="inline-flex items-center gap-3 px-8 py-4 bg-acid-cyan text-bg-base font-bold rounded-xl hover:gap-5 transition-all"
        >
          Stop Losing This Revenue <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
};
