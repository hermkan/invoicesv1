import React from "react";
import { convertTime, convertPrice } from "../utils/utils";

const CardLarge = ({ id, clientName, paymentDue, items, status, total }) => {
  return (
    <div className="hidden tablet:grid tablet:grid-cols-5 tablet:grid-rows-1 h-full place-items-center">
      <div className="invoice-id">
        <span className="text-7E88C3">#</span>
        <span className="font-bold">{id}</span>
      </div>

      <p className="text-7E88C3 font-medium dark:text-DFE3FA">
        Due {convertTime(paymentDue)}
      </p>

      <p className="text-858BB2 dark:text-FFFF font-medium">{clientName}</p>

      <p className="font-bold tablet:text-heading-2">{convertPrice(total)}</p>

      <div
        className={`${
          status === "paid"
            ? "bg-33D69F"
            : status === "pending"
            ? "bg-FF8F00"
            : "bg-373B53"
        } flex justify-center items-center rounded-md w-104 h-10 mix-blend-normal bg-opacity-5`}
      >
        <div className="w-fit h-4 flex items-center gap-2">
          <span
            className={`${
              status === "paid"
                ? "bg-33D69F"
                : status === "pending"
                ? "bg-FF8F00"
                : "bg-373B53 dark:bg-DFE3FA"
            } rounded-full h-2 w-2`}
          ></span>
          <p
            className={`${
              status === "paid"
                ? "text-33D69F"
                : status === "pending"
                ? "text-FF8F00"
                : "text-373B53 dark:text-DFE3FA"
            } font-bold text-heading-4`}
          >
            {status ? status.toUpperCase() : "status"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardLarge;
