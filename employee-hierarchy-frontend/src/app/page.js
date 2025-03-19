import React from "react";
import Button from "./../../components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-[90vh] items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center max-w-2xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-200">
          Welcome to{" "}
          <span className="text-blue-600 dark:text-blue-400">Perago</span>
        </h1>

        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
          We are implementing an advanced employee structure management system
          to efficiently organize and visualize our company’s hierarchy.
        </p>

        <div className="mt-6">
          <Link href="/tree">
            <Button type="submit" className="w-full">
              View Employee Hierarchy
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
