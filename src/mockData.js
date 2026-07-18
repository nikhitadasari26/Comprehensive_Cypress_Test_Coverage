export const generateMockData = () => {
  const data = [];
  const statuses = ['Active', 'Pending', 'Resolved', 'Closed'];
  const regions = ['North America', 'Europe', 'Asia', 'South America'];
  
  for (let i = 1; i <= 100; i++) {
    data.push({
      id: i,
      name: `User ${i}`,
      email: `user${i}@example.com`,
      status: statuses[i % statuses.length],
      region: regions[i % regions.length],
      revenue: 1000 + (i * 37) % 4000,
      signupDate: `2026-01-${String((i % 28) + 1).padStart(2, '0')}`
    });
  }
  return data;
};

export const mockChartData = [
  { name: 'Jan', revenue: 4000, users: 2400 },
  { name: 'Feb', revenue: 3000, users: 1398 },
  { name: 'Mar', revenue: 2000, users: 9800 },
  { name: 'Apr', revenue: 2780, users: 3908 },
  { name: 'May', revenue: 1890, users: 4800 },
  { name: 'Jun', revenue: 2390, users: 3800 },
  { name: 'Jul', revenue: 3490, users: 4300 },
];
