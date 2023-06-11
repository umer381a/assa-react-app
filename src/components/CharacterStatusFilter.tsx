import { useEffect, useState } from "react";
import { CharacterStatus } from "../types";
import { StatusButton } from "./StatusButton";

type Props = {
  onChange?: (status?: CharacterStatus) => void;
};

export const CharacterStatusFilter = ({ onChange }: Props) => {
  const [status, setStatus] = useState<CharacterStatus | undefined>(undefined);

  const handleClick = (selectedStatus: CharacterStatus) => {
    setStatus((prevStatus) =>
      // deselect when clicked on already selected status
      prevStatus === selectedStatus ? undefined : selectedStatus
    );
  };
  useEffect(() => {
    onChange?.(status);
  }, [status, onChange]);

  const statusList: CharacterStatus[] = ["Dead", "Alive", "unknown"];

  return (
    <>
      <p>Filter by status:</p>
      <div className="status-btns">
        {statusList.map((currentStatus) => (
          <StatusButton
            key={currentStatus}
            status={currentStatus}
            isActive={status === currentStatus}
            onClick={() => handleClick(currentStatus)}
          />
        ))}
      </div>
    </>
  );
};
