const team = [
    { name: "Công Phượng", country: "Việt Nam" },
    { name: "Ronaldo", country: "Portugal" },
    { name: "Quang Hải", country: "Việt Nam" },
    { name: "Messi", country: "Argentina" },
    { name: "Nani", country: "Portugal" },
  ];
  
  const groupedPlayers = {};
  team.forEach((player) => {
    if (!groupedPlayers[player.country]) {
      groupedPlayers[player.country] = [];
    }
    groupedPlayers[player.country].push(player);
  });
  
  console.log(groupedPlayers);
  