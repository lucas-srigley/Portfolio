export const QRateLogo = () => {
  return (
    <div className="inline-flex items-center space-x-0.5 font-sans">
      {/* q with checkmark */}
      <div className="relative text-xl font-extrabold text-[#00205B] leading-none">
        <span className="block lowercase">q</span>
        {/* Yellow checkmark */}
        <svg
          className="absolute top-[-0.25rem] left-[0.35rem] w-[0.75rem] h-[0.75rem]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FDB913"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 10 18 4 12" />
        </svg>
      </div>

      {/* "Rate" text in red */}
      <div
        className="text-xl font-extrabold text-[#d82929] leading-none tracking-tight"
        style={{ fontFamily: "'Quicksand', sans-serif" }}
      >
        Rate
      </div>
    </div>
  );
};
