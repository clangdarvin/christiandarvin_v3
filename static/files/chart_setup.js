document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("langChart");

  if (ctx) {
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["C++20", "Python", "Bash"],
        datasets: [
          {
            data: [10, 6, 4],
            backgroundColor: ["#5C78B7", "#D58A55", "#C65B5B"],
            borderRadius: 4,
            barThickness: 12,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
        scales: {
          x: {
            display: false,
            grid: { display: false },
            max: 10,
          },
          y: {
            grid: { display: false },
            border: { display: false },
            ticks: {
              font: {
                family: "system-ui, -apple-system, sans-serif",
                size: 13,
              },
              color: "#4b5563",
            },
          },
        },
      },
    });
  }
});
