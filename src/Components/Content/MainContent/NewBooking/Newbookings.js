import React from "react";
import { TableChart } from "../Content/Content.style";
import RenderBarChart from "../MainContentCahrt/MainContainChart";
import { H1 } from "../MainContentHeader/MainHeader.style";
import BasicTable from "./NewbookingsTable";
const Newbookings = () => {
  return (
    <TableChart>
      <BasicTable />
      <RenderBarChart />
    </TableChart>
  );
};

export default Newbookings;
