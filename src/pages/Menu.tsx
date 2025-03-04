import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';
import { weeklyMenus } from '../data/mockData';
import { WeeklyMenu } from '../types';

const Menu: React.FC = () => {
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const currentMenu = weeklyMenus[currentWeekIndex];

  const handlePreviousWeek = () => {
    if (currentWeekIndex > 0) {
      setCurrentWeekIndex(currentWeekIndex - 1);
    }
  };

  const handleNextWeek = () => {
    if (currentWeekIndex < weeklyMenus.length - 1) {
      setCurrentWeekIndex(currentWeekIndex + 1);
    }
  };

  return (
    <Layout title="Weekly Menu">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handlePreviousWeek}
            disabled={currentWeekIndex === 0}
            className="p-2 rounded-full bg-volvo-blue text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-2xl font-volvo font-bold text-volvo-blue">
            Week {currentMenu.weekNumber}, {currentMenu.year}
          </h2>
          <button
            onClick={handleNextWeek}
            disabled={currentWeekIndex === weeklyMenus.length - 1}
            className="p-2 rounded-full bg-volvo-blue text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-volvo-lightgray">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-volvo-gray uppercase tracking-wider">
                  Day
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-volvo-gray uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-volvo-gray uppercase tracking-wider">
                  Main Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-volvo-gray uppercase tracking-wider">
                  Side Dish
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-volvo-gray uppercase tracking-wider">
                  Vegetarian Option
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentMenu.items.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-volvo-lightgray'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-volvo-gray">
                    {item.day}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-volvo-gray">
                    {new Date(item.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-volvo-gray">
                    {item.mainCourse}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-volvo-gray">
                    {item.sideDish}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-volvo-gray">
                    {item.vegetarianOption}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Menu;