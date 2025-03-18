"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ImBrightnessContrast } from "react-icons/im";

export default function Appbar() {
  const [show, setShow] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <nav className="flex justify-between items-center bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text border-b border-light-border dark:border-dark-border shadow-md px-8 py-4 fixed w-full top-0 z-50">
      <div className="w-36">
        <img
          src="https://www.peragosystems.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperago2.793ab807.png&w=384&q=75"
          alt="Logo"
        />
      </div>

      <ul className="hidden sm:flex flex-row justify-center items-center space-x-8 font-semibold text-lg">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/addemploye">Add Employee</NavItem>
        <NavItem href="/addpostion">Add Position</NavItem>
        <NavItem href="/tree">Tree</NavItem>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-light-accent dark:bg-dark-accent transition hover:scale-110"
        >
          <ImBrightnessContrast className="text-light-text dark:text-dark-text w-5 h-5" />
        </button>
      </ul>

      <div className="cursor-pointer sm:hidden" onClick={() => setShow(!show)}>
        {show ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {show && (
        <ul className="fixed top-0 right-0 h-full w-2/3 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text shadow-xl flex flex-col items-center justify-center space-y-8 text-xl transition-transform transform translate-x-0">
          <NavItem href="/" onClick={() => setShow(false)}>
            Home
          </NavItem>
          <NavItem href="/about" onClick={() => setShow(false)}>
            About
          </NavItem>
          <NavItem href="/addemploye" onClick={() => setShow(false)}>
            Add Employee
          </NavItem>
          <NavItem href="/addpostion" onClick={() => setShow(false)}>
            Add Position
          </NavItem>
          <NavItem href="/tree" onClick={() => setShow(false)}>
            Tree
          </NavItem>

          <button
            onClick={toggleDarkMode}
            className="p-3 rounded-full bg-light-accent dark:bg-dark-accent transition hover:scale-110"
          >
            <ImBrightnessContrast className="text-light-text dark:text-dark-text w-6 h-6" />
          </button>
        </ul>
      )}
    </nav>
  );
}

const NavItem = ({ href, children, onClick }) => (
  <li>
    <Link
      href={href}
      className="relative hover:text-light-primary dark:hover:text-dark-primary transition duration-300"
      onClick={onClick}
    >
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-light-primary dark:bg-dark-primary transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>
);
