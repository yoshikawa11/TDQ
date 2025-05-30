const members = [
  { firstName: "Ichiro", lastName: "Suzuki" },
  { firstName: "Jiro", lastName: "Tanaka" },
  { firstName: "Saburo", lastName: "Sato" },
];

const getFullNames = (members) =>
  members.map(({ firstName, lastName }) => `${lastName} ${firstName}`);

getFullNames(members).forEach((fullName) => console.log(fullName));
