enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
type DayOfWeekStatus = Record<DayOfWeek, boolean>;
const isWeekend = (): DayOfWeekStatus => {
  return {
    [DayOfWeek.Monday]: false,
    [DayOfWeek.Tuesday]: false,
    [DayOfWeek.Wednesday]: false,
    [DayOfWeek.Thursday]: false,
    [DayOfWeek.Friday]: false,
    [DayOfWeek.Saturday]: true,
    [DayOfWeek.Sunday]: true,
  };
};
