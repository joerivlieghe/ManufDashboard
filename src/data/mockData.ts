import { Area, Team, WeeklyMenu, HolidayRequest, ImprovementProposal, KPI } from '../types';

export const areas: Area[] = [
  { id: 1, name: 'Assembly' },
  { id: 2, name: 'Logistics' },
  { id: 3, name: 'Paint Shop' },
  { id: 4, name: 'Body Shop' },
  { id: 5, name: 'Quality' }
];

export const teams: Team[] = [
  { id: 1, name: 'Team A', areaId: 1 },
  { id: 2, name: 'Team B', areaId: 1 },
  { id: 3, name: 'Team C', areaId: 2 },
  { id: 4, name: 'Team D', areaId: 2 },
  { id: 5, name: 'Team E', areaId: 3 },
  { id: 6, name: 'Team F', areaId: 3 },
  { id: 7, name: 'Team G', areaId: 4 },
  { id: 8, name: 'Team H', areaId: 4 },
  { id: 9, name: 'Team I', areaId: 5 },
  { id: 10, name: 'Team J', areaId: 5 }
];

export const weeklyMenus: WeeklyMenu[] = [
  {
    weekNumber: 22,
    year: 2025,
    items: [
      {
        day: 'Monday',
        date: '2025-05-26',
        mainCourse: 'Beef Stroganoff',
        sideDish: 'Rice and Steamed Vegetables',
        vegetarianOption: 'Mushroom Stroganoff'
      },
      {
        day: 'Tuesday',
        date: '2025-05-27',
        mainCourse: 'Grilled Chicken',
        sideDish: 'Roasted Potatoes and Salad',
        vegetarianOption: 'Grilled Halloumi'
      },
      {
        day: 'Wednesday',
        date: '2025-05-28',
        mainCourse: 'Fish and Chips',
        sideDish: 'Tartar Sauce and Peas',
        vegetarianOption: 'Vegetable Tempura'
      },
      {
        day: 'Thursday',
        date: '2025-05-29',
        mainCourse: 'Pork Schnitzel',
        sideDish: 'Mashed Potatoes and Gravy',
        vegetarianOption: 'Eggplant Schnitzel'
      },
      {
        day: 'Friday',
        date: '2025-05-30',
        mainCourse: 'Pasta Bolognese',
        sideDish: 'Garlic Bread and Salad',
        vegetarianOption: 'Pasta Napolitana'
      }
    ]
  },
  {
    weekNumber: 23,
    year: 2025,
    items: [
      {
        day: 'Monday',
        date: '2025-06-02',
        mainCourse: 'Swedish Meatballs',
        sideDish: 'Mashed Potatoes and Lingonberry Jam',
        vegetarianOption: 'Vegetable Balls'
      },
      {
        day: 'Tuesday',
        date: '2025-06-03',
        mainCourse: 'Beef Tacos',
        sideDish: 'Mexican Rice and Beans',
        vegetarianOption: 'Bean Tacos'
      },
      {
        day: 'Wednesday',
        date: '2025-06-04',
        mainCourse: 'Salmon Fillet',
        sideDish: 'Steamed Vegetables and Dill Sauce',
        vegetarianOption: 'Vegetable Stir Fry'
      },
      {
        day: 'Thursday',
        date: '2025-06-05',
        mainCourse: 'Chicken Curry',
        sideDish: 'Basmati Rice and Naan Bread',
        vegetarianOption: 'Vegetable Curry'
      },
      {
        day: 'Friday',
        date: '2025-06-06',
        mainCourse: 'Beef Burger',
        sideDish: 'French Fries and Coleslaw',
        vegetarianOption: 'Veggie Burger'
      }
    ]
  }
];

export const holidayRequests: HolidayRequest[] = [
  {
    id: 1,
    teamId: 1,
    employeeName: 'John Smith',
    startDate: '2025-06-15',
    endDate: '2025-06-22',
    status: 'approved'
  },
  {
    id: 2,
    teamId: 1,
    employeeName: 'Jane Doe',
    startDate: '2025-07-10',
    endDate: '2025-07-24',
    status: 'approved'
  },
  {
    id: 3,
    teamId: 1,
    employeeName: 'Mike Johnson',
    startDate: '2025-08-05',
    endDate: '2025-08-19',
    status: 'pending'
  },
  {
    id: 4,
    teamId: 2,
    employeeName: 'Sarah Williams',
    startDate: '2025-06-01',
    endDate: '2025-06-14',
    status: 'approved'
  },
  {
    id: 5,
    teamId: 2,
    employeeName: 'Robert Brown',
    startDate: '2025-07-20',
    endDate: '2025-08-03',
    status: 'rejected'
  }
];

export const improvementProposals: ImprovementProposal[] = [
  {
    id: 1,
    teamId: 1,
    title: 'Optimize Assembly Line Layout',
    description: 'Rearranging the workstations to reduce walking distance and improve ergonomics.',
    submittedBy: 'John Smith',
    submittedDate: '2025-04-15',
    status: 'approved'
  },
  {
    id: 2,
    teamId: 1,
    title: 'Tool Organization System',
    description: 'Implementing a shadow board system for tools to reduce search time and missing tools.',
    submittedBy: 'Jane Doe',
    submittedDate: '2025-04-20',
    status: 'implemented'
  },
  {
    id: 3,
    teamId: 2,
    title: 'Digital Checklist for Quality Inspection',
    description: 'Replace paper checklists with digital tablets to reduce errors and improve data collection.',
    submittedBy: 'Mike Johnson',
    submittedDate: '2025-05-05',
    status: 'in-review'
  },
  {
    id: 4,
    teamId: 3,
    title: 'Improved Material Handling',
    description: 'New carts designed specifically for our components to reduce damage during transport.',
    submittedBy: 'Sarah Williams',
    submittedDate: '2025-05-10',
    status: 'new'
  }
];

export const kpis: KPI[] = [
  {
    id: 1,
    category: 'safety',
    name: 'Days Without Accidents',
    value: 145,
    target: 365,
    unit: 'days',
    trend: 'up'
  },
  {
    id: 2,
    category: 'quality',
    name: 'First Time Through',
    value: 92.5,
    target: 95,
    unit: '%',
    trend: 'up'
  },
  {
    id: 3,
    category: 'quality',
    name: 'Customer Complaints',
    value: 3,
    target: 0,
    unit: 'per month',
    trend: 'down'
  },
  {
    id: 4,
    category: 'delivery',
    name: 'On-Time Delivery',
    value: 98.2,
    target: 100,
    unit: '%',
    trend: 'stable'
  },
  {
    id: 5,
    category: 'cost',
    name: 'Cost per Unit',
    value: 12500,
    target: 12000,
    unit: 'SEK',
    trend: 'down'
  },
  {
    id: 6,
    category: 'environment',
    name: 'Energy Consumption',
    value: 85,
    target: 80,
    unit: 'kWh/unit',
    trend: 'down'
  },
  {
    id: 7,
    category: 'people',
    name: 'Employee Satisfaction',
    value: 4.2,
    target: 4.5,
    unit: 'out of 5',
    trend: 'up'
  }
];