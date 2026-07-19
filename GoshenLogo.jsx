import React from 'react';

const GoshenLogo = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        {/* SVG Logo */}
        <svg
          viewBox="0 0 400 200"
          className="w-full h-auto mb-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Tooth Shape - Left Part (Dark Blue) */}
          <path
            d="M 80 60 Q 70 80 75 100 L 85 140 Q 90 160 110 170 L 120 170 Q 130 160 135 140 L 140 100 Q 145 80 135 60 Q 125 45 100 45 Q 85 45 80 60 Z"
            fill="#003d7a"
            className="transition-all duration-300 hover:opacity-80"
          />

          {/* Tooth Shape - Right Part (Teal/Cyan) */}
          <path
            d="M 140 60 Q 150 80 145 100 L 135 140 Q 130 160 110 170 L 100 170 Q 90 160 85 140 L 80 100 Q 75 80 85 60 Q 95 45 120 45 Q 135 45 140 60 Z"
            fill="#17a2b8"
            className="transition-all duration-300 hover:opacity-80"
          />

          {/* Inner Wave/Smile Curve */}
          <path
            d="M 90 100 Q 110 120 130 100"
            stroke="#ffffff"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            className="transition-all duration-300"
          />

          {/* Text: GOSHEN */}
          <text
            x="160"
            y="80"
            fontSize="28"
            fontWeight="bold"
            fill="#003d7a"
            fontFamily="Arial, sans-serif"
            className="transition-all duration-300"
          >
            GOSHEN
          </text>

          {/* Text: DENTAL */}
          <text
            x="160"
            y="110"
            fontSize="24"
            fontWeight="600"
            fill="#003d7a"
            fontFamily="Arial, sans-serif"
          >
            DENTAL
          </text>

          {/* Text: CARE */}
          <text
            x="160"
            y="135"
            fontSize="24"
            fontWeight="600"
            fill="#003d7a"
            fontFamily="Arial, sans-serif"
          >
            CARE
          </text>

          {/* Tagline: Capturing Perfect Smiles! */}
          <text
            x="160"
            y="160"
            fontSize="14"
            fill="#17a2b8"
            fontFamily="Arial, sans-serif"
            fontStyle="italic"
          >
            Capturing Perfect Smiles!
          </text>
        </svg>

        {/* Alternative: Pure CSS/Div Version */}
        <div className="mt-12 pt-8 border-t">
          <h2 className="text-center text-lg font-semibold text-gray-800 mb-4">
            React Component Version
          </h2>

          <div className="flex items-center justify-center gap-4">
            {/* Tooth Icon */}
            <div className="relative w-20 h-20">
              {/* Left Tooth (Dark Blue) */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-800 rounded-b-3xl rounded-t-2xl skew-y-2" />
              {/* Right Tooth (Teal) */}
              <div className="absolute inset-1 left-2 bg-gradient-to-bl from-cyan-500 to-teal-500 rounded-b-3xl rounded-t-2xl skew-y-1 opacity-90" />
            </div>

            {/* Text Section */}
            <div>
              <div className="text-2xl font-bold text-blue-900">GOSHEN</div>
              <div className="text-xl font-semibold text-blue-900">DENTAL</div>
              <div className="text-xl font-semibold text-blue-900">CARE</div>
              <div className="text-sm text-cyan-600 italic">Capturing Perfect Smiles!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoshenLogo;
