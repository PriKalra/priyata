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
          background: rgba(153, 156, 255, 0.15);
          backdrop-filter: blur(20px);
          padding: 16px 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          border-radius: 28px;
          border: 1px solid rgba(180, 190, 255, 0.3);
          transition: transform 400ms, background 300ms, border 300ms;
          transform-style: preserve-3d;
          transform: rotateX(12deg) rotateY(-15deg);
          perspective: 500px;
          box-shadow: 0 8px 32px rgba(153, 156, 255, 0.2);
        }
        
        .input__container:hover {
          background: rgba(153, 156, 255, 0.25);
          border: 1px solid rgba(180, 190, 255, 0.5);
          transform: rotateX(8deg) rotateY(-10deg) translateY(-2px);
        }

        .shadow__input {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          bottom: 0;
          z-index: -1;
          filter: blur(40px);
          border-radius: 20px;
          background-color: #6366f1;
          background-image: radial-gradient(at 85% 51%, hsla(220,90%,65%,0.8) 0px, transparent 50%),
            radial-gradient(at 74% 68%, hsla(235,80%,70%,0.7) 0px, transparent 50%),
            radial-gradient(at 64% 79%, hsla(284,75%,68%,0.7) 0px, transparent 50%),
            radial-gradient(at 75% 16%, hsla(200,70%,65%,0.6) 0px, transparent 50%),
            radial-gradient(at 90% 65%, hsla(180,75%,60%,0.5) 0px, transparent 50%),
            radial-gradient(at 91% 83%, hsla(260,70%,65%,0.6) 0px, transparent 50%),
            radial-gradient(at 72% 91%, hsla(210,80%,70%,0.7) 0px, transparent 50%);
        }

        .input__button__shadow {
          cursor: pointer;
          border: none;
          background: none;
          transition: transform 400ms, background 400ms;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 14px;
          padding: 8px;
          color: #a5b4fc;
        }

        .input__button__shadow:hover {
          background: rgba(180, 190, 255, 0.3);
          transform: rotate(180deg);
        }

        .input__search {
          width: 100%;
          border-radius: 20px;
          outline: none;
          border: none;
          padding: 4px 12px;
          position: relative;
          background: transparent;
          text-align: center;
          font-weight: 600;
          color: #e0e7ff;
          font-size: 1.125rem;
          letter-spacing: 0.02em;
          text-shadow: 0 2px 8px rgba(99, 102, 241, 0.5);
        }
      `}</style>
    </div>
  );
};

export default FractalGlassCard;
