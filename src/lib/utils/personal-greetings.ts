function greetingByHour(hour: number): string {
  if (hour >= 12 && hour < 16) return "צהריים טובים!";
  if (hour >= 16 && hour < 18) return `אחרה"צ טובים!`;
  if (hour >= 18 && hour < 21) return `ערב טוב!`;
  if (hour >= 21 && hour < 6) return `לילה טוב!`;
  if (hour >= 6 && hour < 12) return `בוקר טוב!`;
  else return "ברוכים הבאים!";
}

export { greetingByHour };
