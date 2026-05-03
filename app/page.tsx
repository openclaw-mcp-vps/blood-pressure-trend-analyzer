export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Health Tracking
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Understand Your Blood Pressure Trends
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Log BP readings with context — stress, diet, exercise — and let smart analysis reveal your personal triggers before they become a crisis.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $6/mo
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">Cancel anytime. No hidden fees.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-white mb-1">Trend Visualization</h3>
            <p className="text-sm text-[#8b949e]">Interactive charts show systolic and diastolic trends over days, weeks, and months.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="font-semibold text-white mb-1">Trigger Detection</h3>
            <p className="text-sm text-[#8b949e]">Correlates readings with logged context to surface your personal BP triggers automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🚨</div>
            <h3 className="font-semibold text-white mb-1">Smart Alerts</h3>
            <p className="text-sm text-[#8b949e]">Get notified when readings enter concerning ranges so you can act before it escalates.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$6</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited BP readings</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Contextual logging (stress, diet, exercise)</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Trend charts &amp; pattern analysis</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Smart alerts for high readings</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Export data as CSV</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="font-semibold text-white mb-2">Is my health data private and secure?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Your data is encrypted at rest and in transit. We never sell or share your health information with third parties.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="font-semibold text-white mb-2">Can I use this alongside my doctor's advice?</h3>
            <p className="text-sm text-[#8b949e]">Absolutely. The app is designed to complement medical care — you can export your data to share with your physician at any appointment.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="font-semibold text-white mb-2">How do I cancel my subscription?</h3>
            <p className="text-sm text-[#8b949e]">Cancel anytime from your account settings or by emailing support. You keep access until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Blood Pressure Trend Analyzer. Not a substitute for medical advice.
      </footer>
    </main>
  );
}
