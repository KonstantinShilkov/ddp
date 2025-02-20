import React, { useState } from "react";
import TrapsTable from "@/components/trapsComponents/TrapsTable";
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@mui/material";
import AddTrapDialog from "@/components/trapsComponents/TrapDialog";

const Traps: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <MainLayout>
      <div className="trap__container">
        <div className="addTrapButton">
          <Button
            sx={{
              color: "white",
              fontSize: "18px",
              backgroundColor: "black",
              width: "110px",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
            }}
            onClick={handleClickOpen}
          >
            Add Trap
          </Button>
        </div>
        <div className="trapsTable">
          <TrapsTable />
        </div>
      </div>
      <AddTrapDialog open={open} handleClose={handleClose} />
    </MainLayout>
  );
};

export default Traps;
