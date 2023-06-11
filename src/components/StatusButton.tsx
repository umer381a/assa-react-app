import { MouseEventHandler } from "react";
import { startCase } from "../lib/helpers";
import { CharacterStatus } from "../types";

type Props = {
  status: CharacterStatus;
  isActive?: boolean;
  onClick?: MouseEventHandler;
};

export const StatusButton = ({ status, isActive, onClick }: Props) => {
  const statusClass = status.toLowerCase();
  return (
    <button
      className={`status-btn-${statusClass} ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <span className={`status-${statusClass}`}></span> {startCase(status)}
    </button>
  );
};
