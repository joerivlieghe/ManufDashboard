import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { holidayRequests } from '../data/mockData';
import { HolidayRequest } from '../types';
import { useUser } from '../context/UserContext';

const HolidayRequests: React.FC = () => {
  const { user } = useUser();
  const [teamHolidays, setTeamHolidays] = useState<HolidayRequest[]>([]);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [calendarDays, setCalendarDays] = useState<Date[]>([]);

  useEffect(() => {
    if (user) {
      const filteredHolidays = holidayRequests.filter(
        request => request.teamId === user.team.id
      );
      setTeamHolidays(filteredHolidays);
    }
  }, [user]);

  useEffect(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // Get first day of the month
    const firstDay = new Date(year, month, 1);
    // Get last day of the month
    const lastDay = new Date(year, month + 1, 0);
    
    // Get the day of the week for the first day (0 = Sunday, 1 = Monday, etc.)
    const firstDayOfWeek = firstDay.getDay();
    // Adjust for Monday as first day of week
    const adjustedFirstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
    
    // Calculate days from previous month to show
    const daysFromPrevMonth = adjustedFirstDayOfWeek;
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    
    const days: Date[] = [];
    
    // Add days from previous month
    for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
      days.push(new Date(year, month - 1, prevMonthLastDay - i));
    }
    
    // Add days from current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }
    
    // Add days from next month to complete the grid (6 rows x 7 days = 42 cells)
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push(new Date(year, month + 1, i));
    }
    
    setCalendarDays(days);
  }, [currentMonth]);

  const isHolidayDate = (date: Date): HolidayRequest | undefined => {
    return teamHolidays.find(holiday => {
      const startDate = new Date(holiday.startDate);
      const endDate = new Date(holiday.endDate);
      return date >= startDate && date <= endDate;
    });
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout title="Holiday Requests">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handlePrevMonth}
            className="p-2 rounded-full bg-volvo-blue text-white"
          >
            &lt;
          </button>
          <h2 className="text-2xl font-volvo font-bold text-volvo-blue">
            {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <button
            onClick={handleNextMonth}
            className="p-2 rounded-full bg-volvo-blue text-white"
          >
            &gt;
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="text-center font-medium text-volvo-gray p-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) => {
            const isCurrentMonth = day.getMonth() === currentMonth.getMonth();
            const isToday = day.toDateString() === new Date().toDateString();
            const holiday = isHolidayDate(day);
            
            return (
              <div
                key={index}
                className={`
                  p-2 h-24 border rounded-md overflow-hidden
                  ${isCurrentMonth ? 'bg-white' : 'bg-gray-100 text-gray-400'}
                  ${isToday ? 'border-volvo-blue border-2' : 'border-gray-200'}
                `}
              >
                <div className="text-right mb-1">{day.getDate()}</div>
                {holiday && (
                  <div className={`text-xs p-1 rounded ${getStatusColor(holiday.status)}`}>
                    {holiday.employeeName}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-volvo font-semibold text-volvo-blue mb-3">Team Holiday Requests</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-volvo-lightgray">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-volvo-gray uppercase tracking-wider">
                    Employee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-volvo-gray uppercase tracking-wider">
                    Start Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-volvo-gray uppercase tracking-wider">
                    End Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-volvo-gray uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {teamHolidays.map((holiday) => (
                  <tr key={holiday.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-volvo-gray">
                      {holiday.employeeName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-volvo-gray">
                      {new Date(holiday.startDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-volvo-gray">
                      {new Date(holiday.endDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(holiday.status)}`}>
                        {holiday.status.charAt(0).toUpperCase() + holiday.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
                {teamHolidays.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-4 text-center text-sm text-volvo-gray">
                      No holiday requests found for your team.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HolidayRequests;