import { Chart } from 'chart.js/auto';

export function charts() {
  // Create line chart
  (async function () {
    const monthlyUserGrowth = [
      { month: 'January', users: 200 },
      { month: 'February', users: 300 },
      { month: 'March', users: 500 },
      { month: 'April', users: 700 },
      { month: 'May', users: 900 },
      { month: 'June', users: 1200 },
      { month: 'July', users: 1400 },
      { month: 'August', users: 1600 },
      { month: 'September', users: 1800 },
      { month: 'October', users: 2200 },
      { month: 'November', users: 2400 },
      { month: 'December', users: 2600 },
    ];

    const monthlyServerDowntime = [
      { month: 'January', downtime: 2000 },
      { month: 'February', downtime: 1500 },
      { month: 'March', downtime: 1300 },
      { month: 'April', downtime: 1200 },
      { month: 'May', downtime: 1000 },
      { month: 'June', downtime: 800 },
      { month: 'July', downtime: 700 },
      { month: 'August', downtime: 500 },
      { month: 'September', downtime: 450 },
      { month: 'October', downtime: 350 },
      { month: 'November', downtime: 300 },
      { month: 'December', downtime: 250 },
    ];

    const ctx1 = document.querySelector<HTMLCanvasElement>('[data-element="chart-1"]');
    if (!ctx1) return;

    new Chart(ctx1, {
      type: 'line',
      data: {
        labels: monthlyServerDowntime.map((row) => row.month),
        datasets: [
          {
            label: 'Server downtime per month',
            data: monthlyServerDowntime.map((row) => row.downtime),
            borderColor: '#1161a9',
          },
          {
            label: 'User growth per month',
            data: monthlyUserGrowth.map((row) => row.users),
            borderColor: '#0a9784',
          },
        ],
      },
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
      },
    });
  })();
}
