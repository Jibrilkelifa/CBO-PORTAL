export interface DashboardV {
  newUsers: Array<number>;
  allUsers: number;
  activeAuth: number;
  allAuth: number;
  recentUsers: Array<{ name: string, lastlogin: string, role: string }>;
  roleVisit: { admin: number, director: number, nuser: number };
  todayLogin: number;
  pageViewToday: number;
  maleUsers: number;
  femaleUsers: number;
  allEmployee: number;
  allDivision: number;
}
