export default function Marquee() {
  const items = [
    "Privacy-First Products",
    "Built in Chennai",
    "Android Native",
    "Offline-First Architecture",
    "Zero Server Dependency",
    "India-Focused Design",
    "SMS-Powered Intelligence",
    "Open to Feedback",
    "Small Team. Big Impact.",
    "Built to Last",
    "Real Problems. Real Solutions."
  ];

  const fullText = items.join(" ✦ ") + " ✦ ";

  return (
    <div className="w-full bg-navy-darkest border-y border-border-red h-[44px] overflow-hidden relative flex items-center z-10">
      <div 
        className="whitespace-nowrap flex items-center absolute"
        style={{
          animation: "marquee 20s linear infinite",
        }}
      >
        <span className="font-rajdhani uppercase text-gold-primary text-[0.85rem] tracking-[0.1em] font-bold mx-2">
          {fullText}
        </span>
        <span className="font-rajdhani uppercase text-gold-primary text-[0.85rem] tracking-[0.1em] font-bold mx-2">
          {fullText}
        </span>
        <span className="font-rajdhani uppercase text-gold-primary text-[0.85rem] tracking-[0.1em] font-bold mx-2">
          {fullText}
        </span>
      </div>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
        `}
      </style>
    </div>
  );
}
