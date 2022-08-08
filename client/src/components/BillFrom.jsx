import React, { useState } from "react";
import { Input } from "../components";

import { useGlobalContext } from "../context/context";
import { addDays } from "../utils/utils";

const inputfields = [
  {
    id: 1,
    name: "street",
    type: "text",
    required: true,
    label: "Street Address",
    errorMessage: "can't be empty",
  },
  {
    id: 2,
    name: "city",
    type: "text",
    required: true,
    label: "City",
    errorMessage: "can't be empty",
  },
  {
    id: 3,
    name: "postCode",
    type: "text",
    required: true,
    label: "Post Code",
    errorMessage: "can't be empty",
  },
  {
    id: 4,
    name: "country",
    type: "text",
    required: true,
    label: "Country",
    errorMessage: "can't be empty",
  },
];

const BillFrom = () => {
  const { senderAddress, handleChange } = useGlobalContext();

  return (
    <div>
      <h4 className="text-7C5DFA text-body-1 font-bold mb-6">Bill from</h4>
      <div className="bill-from-input-container grid grid-cols-3 grid-rows-2 gap-6">
        {inputfields.map((field) => {
          return (
            <Input
              key={field.id}
              errorMessage={field.errorMessage}
              {...field}
              value={senderAddress[field.name]}
              handleChange={(e) => handleChange(e, "senderAddress")}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BillFrom;
