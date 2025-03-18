import React from "react";

export default function Tree() {
  const positions = [
    {
      name: "CEO",
      description: "Chief Executive Officer",
      parentId: null,
      id: "1",
    },
    {
      name: "CTO",
      description: "Chief Technology Officer",
      parentId: "1",
      id: "2",
    },
    {
      name: "Project Manager",
      description: "Manages projects",
      parentId: "2",
      id: "3",
    },
    {
      name: "Project Owner",
      description: "Owns the project",
      parentId: "3",
      id: "4",
    },
    {
      name: "CFO",
      description: "Chief Financial Officer",
      parentId: "1",
      id: "5",
    },
    { name: "HR", description: "Human Resources", parentId: "1", id: "6" },
    {
      name: "Tech Lead",
      description: "Leads the technical team",
      parentId: "4",
      id: "9",
    },
    {
      name: "Frontend",
      description: "Frontend Developer",
      parentId: "4",
      id: "12",
    },
    {
      name: "COO",
      description: "Chief Operating Officer",
      parentId: "1",
      id: "11",
    },
  ];

  const persons = [
    {
      name: "Naol Meseret",
      description: "This is our CEO",
      parentId: "3",
      id: "4",
    },
    {
      name: "Fuad Seid",
      description: "This is our CEO",
      parentId: null,
      id: "8",
    },
    {
      name: "Meron Nisar",
      description: "Our project manager",
      parentId: "3",
      id: "10",
    },
    {
      name: "Samuel Tale",
      description: "Our HR manager",
      parentId: null,
      id: "12",
    },
    {
      name: "Samuel Esubalew",
      description: "This is Samuel",
      parentId: "12",
      id: "13",
    },
    { name: "Biruk", description: "This is Biruk", parentId: "11", id: "15" },
    {
      name: "Getahun",
      description: "This is Getahun",
      parentId: "5",
      id: "17",
    },
    {
      name: "Abdela Nesredin Nasir",
      description: "CEO of company",
      parentId: "1",
      id: "18",
    },
  ];

  const recursiveRender = (parentId) => {
    const children = positions.filter((pos) => pos.parentId === parentId);
    const people = persons.filter((person) => person.parentId === parentId);

    if (children.length === 0 && people.length === 0) return null;

    return (
      <ul className="ml-4 border-l-2 border-gray-400 pl-4">
        {children.map((pos) => (
          <li key={pos.id} className="mb-2">
            <div className="font-bold text-light-primary dark:text-dark-primary">
              {pos.name}
            </div>
            <div className="text-sm text-light-secondary dark:text-dark-secondary">
              {pos.description}
            </div>
            {/* Recursive call for child positions */}
            {recursiveRender(pos.id)}
          </li>
        ))}
        {people.map((person) => (
          <li key={person.id} className="mb-2 ml-4">
            <div className="text-light-accent dark:text-dark-accent">
              {person.name}
            </div>
            <div className="text-xs text-gray-500">{person.description}</div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Employee Hierarchy
      </h2>
      {recursiveRender(null)}
    </div>
  );
}
