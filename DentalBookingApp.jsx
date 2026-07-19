import React, { useState } from 'react';
import { ChevronLeft, Bell, Calendar, List, ChevronRight, Home, Sliders, CalendarCheck, MoreHorizontal, Wifi, Zap } from 'lucide-react';

const DentalBookingApp = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeNav, setActiveNav] = useState(2);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDateModal, setShowDateModal] = useState(false);

  // Generate next 7 days
  const getUpcomingDates = () => {
    const dates = [];
    for (let i = 1; i <= 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }));
    }
    return dates;
  };

  const upcomingDates = getUpcomingDates();

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowDateModal(false);
  };

  const handleSubmit = () => {
    alert('Booking submitted!');
  };

  const handleBack = () => {
    alert('Back button clicked');
  };

  const handleNotification = () => {
    alert('You have 2 new notifications');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4">
      {/* Phone Container */}
      <div className="relative w-96 h-screen max-h-screen bg-slate-900 rounded-5xl border-8 border-slate-700 shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-8 bg-slate-900 rounded-b-3xl z-50"></div>

        {/* Status Bar */}
        <div className="flex justify-between items-center px-5 pt-2 pb-3 bg-slate-900 text-white text-xs">
          <div className="flex gap-1 items-center">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-0.5 h-1 bg-white rounded-full"></div>
              ))}
            </div>
            <Wifi size={14} />
          </div>
          <span className="font-semibold text-sm">11:30</span>
          <div className="flex gap-1 items-center">
            <span>95%</span>
            <Zap size={14} />
          </div>
        </div>

        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 bg-slate-900 border-b border-slate-700">
          <button
            onClick={handleBack}
            className="flex items-center gap-1 text-blue-400 text-sm font-medium hover:opacity-80 transition"
          >
            <ChevronLeft size={18} />
            Back
          </button>
          <div className="text-center">
            <div className="text-blue-400 font-bold text-sm flex items-center justify-center gap-1">
              <span>🦷 GOSHEN</span>
            </div>
            <div className="text-slate-400 text-xs">DENTAL CARE</div>
          </div>
          <button
            onClick={handleNotification}
            className="relative text-slate-400 hover:text-blue-400 transition"
          >
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
              2
            </span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto h-[calc(100%-280px)] bg-slate-900 pb-16">
          <div className="px-5 py-6">
            {/* Page Title */}
            <h1 className="text-white text-3xl font-bold mb-8">Bookings & Reviews</h1>

            {/* Tabs */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setActiveTab(0)}
                className={`flex flex-col items-center gap-2 transition-all ${
                  activeTab === 0 ? 'opacity-100' : 'opacity-50'
                }`}
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-2xl border-2 transition-all ${
                    activeTab === 0
                      ? 'border-blue-400 bg-blue-400 bg-opacity-10'
                      : 'border-slate-600 bg-slate-800 bg-opacity-50'
                  }`}
                >
                  <Calendar
                    size={20}
                    className={activeTab === 0 ? 'text-blue-400' : 'text-slate-400'}
                  />
                </div>
                <span
                  className={`text-xs font-medium ${
                    activeTab === 0 ? 'text-blue-400' : 'text-slate-400'
                  }`}
                >
                  Bookings
                </span>
              </button>

              <button
                onClick={() => setActiveTab(1)}
                className={`flex flex-col items-center gap-2 transition-all ${
                  activeTab === 1 ? 'opacity-100' : 'opacity-50'
                }`}
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-2xl border-2 transition-all ${
                    activeTab === 1
                      ? 'border-blue-400 bg-blue-400 bg-opacity-10'
                      : 'border-slate-600 bg-slate-800 bg-opacity-50'
                  }`}
                >
                  <span
                    className={`text-xl ${activeTab === 1 ? 'text-blue-400' : 'text-slate-400'}`}
                  >
                    ⭐
                  </span>
                </div>
                <span
                  className={`text-xs font-medium ${
                    activeTab === 1 ? 'text-blue-400' : 'text-slate-400'
                  }`}
                >
                  Reviews
                </span>
              </button>
            </div>

            {/* Section Title */}
            <h2 className="text-white text-lg font-semibold mb-5">Booking & set appointment</h2>

            {/* Reason Input Card */}
            <div className="bg-slate-800 bg-opacity-60 border border-slate-700 rounded-2xl p-4 mb-4 flex gap-4">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <List size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-slate-400 mb-2">Reason</div>
                <div className="space-y-2">
                  <div className="h-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded animate-pulse w-full"></div>
                  <div className="h-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded animate-pulse w-full"></div>
                  <div className="h-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded animate-pulse w-2/3"></div>
                </div>
              </div>
            </div>

            {/* Date Input Card */}
            <button
              onClick={() => setShowDateModal(true)}
              className="w-full bg-slate-800 bg-opacity-60 border border-slate-700 rounded-2xl p-4 mb-6 flex items-center justify-between gap-4 hover:border-slate-600 transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar size={20} className="text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-medium text-slate-400">Date</div>
                  <div className="text-sm font-medium text-slate-200">
                    {selectedDate || 'Select Date'}
                  </div>
                </div>
              </div>
              <ChevronRight size={20} className="text-blue-400" />
            </button>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all active:translate-y-0"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 w-full h-20 bg-slate-900 bg-opacity-95 border-t border-slate-700 backdrop-blur-sm flex justify-around items-center">
          <button
            onClick={() => setActiveNav(0)}
            className={`flex flex-col items-center gap-1 px-3 py-2 transition-all ${
              activeNav === 0 ? 'opacity-100' : 'opacity-60'
            }`}
          >
            <Home
              size={24}
              className={activeNav === 0 ? 'text-blue-400' : 'text-slate-400'}
            />
            <span
              className={`text-xs font-medium ${
                activeNav === 0 ? 'text-blue-400' : 'text-slate-400'
              }`}
            >
              Home
            </span>
          </button>

          <button
            onClick={() => setActiveNav(1)}
            className={`flex flex-col items-center gap-1 px-3 py-2 transition-all ${
              activeNav === 1 ? 'opacity-100' : 'opacity-60'
            }`}
          >
            <Sliders
              size={24}
              className={activeNav === 1 ? 'text-blue-400' : 'text-slate-400'}
            />
            <span
              className={`text-xs font-medium ${
                activeNav === 1 ? 'text-blue-400' : 'text-slate-400'
              }`}
            >
              Services
            </span>
          </button>

          <button
            onClick={() => setActiveNav(2)}
            className={`flex flex-col items-center gap-1 px-3 py-2 transition-all ${
              activeNav === 2 ? 'opacity-100' : 'opacity-60'
            }`}
          >
            <CalendarCheck
              size={24}
              className={activeNav === 2 ? 'text-blue-400' : 'text-slate-400'}
            />
            <span
              className={`text-xs font-medium ${
                activeNav === 2 ? 'text-blue-400' : 'text-slate-400'
              }`}
            >
              Bookings
            </span>
          </button>

          <button
            onClick={() => setActiveNav(3)}
            className={`flex flex-col items-center gap-1 px-3 py-2 transition-all ${
              activeNav === 3 ? 'opacity-100' : 'opacity-60'
            }`}
          >
            <MoreHorizontal
              size={24}
              className={activeNav === 3 ? 'text-blue-400' : 'text-slate-400'}
            />
            <span
              className={`text-xs font-medium ${
                activeNav === 3 ? 'text-blue-400' : 'text-slate-400'
              }`}
            >
              More
            </span>
          </button>
        </div>

        {/* Date Modal */}
        {showDateModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowDateModal(false)}
          >
            <div
              className="bg-slate-800 rounded-3xl p-6 max-w-xs w-full border border-slate-700 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-white text-lg font-semibold mb-4">Select Date</h3>
              <div className="space-y-2">
                {upcomingDates.map((date, index) => (
                  <button
                    key={index}
                    onClick={() => handleDateSelect(date)}
                    className="w-full py-3 bg-blue-400 bg-opacity-10 border border-blue-400 text-blue-400 rounded-lg font-medium hover:bg-opacity-20 transition"
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DentalBookingApp;
