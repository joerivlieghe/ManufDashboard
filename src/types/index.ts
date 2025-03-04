export interface Area {
  id: number;
  name: string;
}

export interface Team {
  id: number;
  name: string;
  areaId: number;
}

export interface User {
  area: Area;
  team: Team;
}

export interface MenuItem {
  day: string;
  date: string;
  mainCourse: string;
  sideDish: string;
  vegetarianOption: string;
}

export interface WeeklyMenu {
  weekNumber: number;
  year: number;
  items: MenuItem[];
}

export interface HolidayRequest {
  id: number;
  teamId: number;
  employeeName: string;
  startDate: string;
  endDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface ImprovementProposal {
  id: number;
  teamId: number;
  title: string;
  description: string;
  submittedBy: string;
  submittedDate: string;
  status: 'new' | 'in-review' | 'approved' | 'implemented' | 'rejected';
}

export interface KPI {
  id: number;
  category: 'safety' | 'quality' | 'delivery' | 'cost' | 'environment' | 'people';
  name: string;
  value: number;
  target: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
}