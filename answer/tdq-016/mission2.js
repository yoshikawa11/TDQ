const members = [
  { firstName: "Ichiro", lastName: "Suzuki" },
  { firstName: "Jiro", lastName: "Tanaka" },
  { firstName: "Saburo", lastName: "Sato" },
];

const displayMembers = members.map(
  ({ firstName, lastName }) =>
    `${firstName.toLowerCase()}-${lastName.toLowerCase()}`,
);

console.log(displayMembers);
