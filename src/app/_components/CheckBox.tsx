"use client";
import React, { useState } from "react";

const CheckBox = ({ fetchedInterests }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const interestsPerPage = 6;
  const maxPagesToShow = 7;

  // Calculate total pages
  const totalPages = Math.ceil(fetchedInterests.length / interestsPerPage);

  const indexOfLastInterest = currentPage * interestsPerPage;
  const indexOfFirstInterest = indexOfLastInterest - interestsPerPage;
  const currentInterests = fetchedInterests.slice(
    indexOfFirstInterest,
    indexOfLastInterest,
  );

  // Function to handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Function to handle previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToStartPage = () => {
    setCurrentPage(1);
  };

  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

  if (endPage - startPage < maxPagesToShow - 1) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  const goToEndPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <div className="w-1/3 rounded-2xl border border-gray-300 px-8 pb-24 pt-8">
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-semibold">
          Please mark your interests!
        </h2>
        <h2 className="mb-10 text-sm font-light">
          the next gen business marketplace
        </h2>
      </div>
      <h2 className="mb-5 font-normal">My saved interests!</h2>
      <ul>
        {currentInterests.map((interest) => (
          <li
            className="mt-4 flex cursor-pointer items-center"
            key={interest.id}
          >
            <input
              className="mr-3 h-4 w-4 cursor-pointer rounded accent-black"
              type="checkbox"
              id={interest.id.toString()}
            />
            <label
              className=" cursor-pointer text-sm font-light "
              htmlFor={interest.id.toString()}
            >
              {interest.name}
            </label>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex">
        <a
          onClick={goToStartPage}
          className="mx-1 cursor-pointer text-gray-300 hover:text-black"
        >
          {"<<"}
        </a>
        <a
          onClick={goToPreviousPage}
          className="mx-1 cursor-pointer text-gray-300 hover:text-black"
        >
          {"<"}
          {1 < startPage && <span className="text-gray-300">...</span>}
        </a>
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
          <a
            key={startPage + i}
            onClick={() => paginate(startPage + i)}
            className={`mx-1 cursor-pointer ${
              currentPage === startPage + i ? " text-black" : "text-gray-300"
            }`}
          >
            {startPage + i}
          </a>
        ))}
        {totalPages > endPage && <span className="text-gray-300">...</span>}
        <a
          onClick={goToNextPage}
          className="mx-1 cursor-pointer text-gray-300 hover:text-black"
        >
          {">"}
        </a>
        <a
          onClick={goToEndPage}
          className="mx-1 cursor-pointer text-gray-300 hover:text-black"
        >
          {">>"}
        </a>
      </div>
    </div>
  );
};

export default CheckBox;
