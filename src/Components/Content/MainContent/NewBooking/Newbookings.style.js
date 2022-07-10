import { TableContainer } from "@mui/material";
import styled from "styled-components";

export const TableCon = styled(TableContainer)`
  max-width: 65%;
  border-radius: "20px 20px 0 0 ";
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;
