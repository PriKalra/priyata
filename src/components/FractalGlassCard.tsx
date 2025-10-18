import React from 'react';

interface FractalGlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const FractalIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.8" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="0.5" opacity="0.6" fill="none" />
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="0.3" opacity="0.4" fill="none" />
    <path d="M12 4 L12 2 M12 22 L12 20 M20 12 L22 12 M2 12 L4 12" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    <path d="M17.5 6.5 L19 5 M5 19 L6.5 17.5 M17.5 17.5 L19 19 M5 5 L6.5 6.5" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
  </svg>
);

const FractalGlassCard: React.FC<FractalGlassCardProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="input__container">
        <div className="shadow__input" />
        <button className="input__button__shadow">
          <FractalIcon />
        </button>
        <div className="input__search">
          {children}
        </div>
      </div>
      
      <style>{`
        .input__container {
          position: relative;
          background: rgba(255, 255, 255, 0.664);
          padding: 10px 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
          border-radius: 22px;
          transition: transform 400ms;
          transform-style: preserve-3d;
          perspective: 500px;
        }

        .shadow__input {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          bottom: 0;
          z-index: -1;
          filter: blur(30px);
          border-radius: 20px;
          background-color: #999cff;
          background-image: radial-gradient(at 85% 51%, hsla(60,60%,61%,1) 0px, transparent 50%),
            radial-gradient(at 74% 68%, hsla(235,69%,77%,1) 0px, transparent 50%),
            radial-gradient(at 64% 79%, hsla(284,72%,73%,1) 0px, transparent 50%),
            radial-gradient(at 75% 16%, hsla(283,60%,72%,1) 0px, transparent 50%),
            radial-gradient(at 90% 65%, hsla(153,70%,64%,1) 0px, transparent 50%),
            radial-gradient(at 91% 83%, hsla(283,74%,69%,1) 0px, transparent 50%),
            radial-gradient(at 72% 91%, hsla(213,75%,75%,1) 0px, transparent 50%);
        }

        .input__button__shadow {
          cursor: pointer;
          border: none;
          background: none;
          transition: transform 400ms, background 400ms;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          padding: 5px;
        }

        .input__button__shadow:hover {
          background: rgba(255, 255, 255, 0.411);
        }

        .input__search {
          width: 100%;
          border-radius: 20px;
          outline: none;
          border: none;
          padding: 8px;
          position: relative;
          background: transparent;
          text-align: center;
          font-weight: 500;
          color: #1a1a1a;
        }
      `}</style>
    </div>
  );
};

export default FractalGlassCard;
