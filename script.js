// IPL Teams Data
const teams = [
  { name: "Mumbai Indians", matches: 14, wins: 9, losses: 5, points: 18 },
  { name: "Chennai Super Kings", matches: 14, wins: 8, losses: 6, points: 16 },
  { name: "Royal Challengers Bengaluru", matches: 14, wins: 7, losses: 7, points: 14 },
  { name: "Kolkata Knight Riders", matches: 14, wins: 6, losses: 8, points: 12 }
];

// Create Points Table
let table = "<tr><th>Team</th><th>Matches</th><th>Wins</th><th>Losses</th><th>Points</th></tr>";

teams.forEach(team => {
  table += `<tr>
    <td>${team.name}</td>
    <td>${team.matches}</td>
    <td>${team.wins}</td>
    <td>${team.losses}</td>
    <td>${team.points}</td>
  </tr>`;
});

document.getElementById("pointsTable").innerHTML = table;

// Create Chart
const ctx = document.getElementById("pointsChart");

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: teams.map(t => t.name),
    datasets: [{
      label: 'Points',
      data: teams.map(t => t.points),
      backgroundColor: ['#004080', '#ffcc00', '#cc0000', '#660066']
    }]
  }
});
