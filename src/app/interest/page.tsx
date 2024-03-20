import React from "react";
import Header from "../_components/Header";
import { api } from "~/trpc/server";
import CheckBox from "../_components/CheckBox";

const InterestPage = async () => {

  const fetchedInterests = await api.category.getAll();
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="mt-14 flex justify-center">
        <CheckBox fetchedInterests={fetchedInterests} />
      </div>
    </div>
  );
};

export default InterestPage;
