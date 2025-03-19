import React from "react";
import Button from "../../../components/Button";

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
      parentId: "1",
      id: "4",
    },
    {
      name: "Abdela Nesredin Nasir",
      description: " This is CTO of company",
      parentId: "2",
      id: "5",
    },
  ];

  const recursiveRender = (parentId) => {
    return (
      <ul className="ml-4 border-l-2 border-gray-400 pl-4">
        {positions
          .filter((pos) => pos.parentId === parentId)
          .map((pos) => (
            <div key={pos.id}>
              <li className="mb-2">
                <div className="font-bold text-light-primary dark:text-dark-primary">
                  {pos.name}
                </div>
                <div className="text-sm text-light-secondary dark:text-dark-secondary">
                  {pos.description}
                </div>
              </li>
              {persons
                .filter((person) => person.parentId === pos.id)
                .map((person) => (
                  <li key={person.id} className="mb-2 ml-4">
                    <div className="text-light-accent dark:text-dark-accent">
                      {person.name}
                      <div className="flex space-x-3 mt-1">
                        <Button type="update">update</Button>
                        <Button type="delete">delete</Button>
                      </div>
                    </div>
                    <div className="text-xs mt-1 text-gray-500">
                      {person.description}
                    </div>
                  </li>
                ))}
              {recursiveRender(pos.id)}
            </div>
          ))}
      </ul>
    );
  };

  return (
    <div className="p-6 mt-5 max-w-3xl mx-auto bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Employee Hierarchy
      </h2>
      {recursiveRender(null)}
    </div>
  );
}
