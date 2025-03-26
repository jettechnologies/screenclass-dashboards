"use client";

import * as React from "react";
import Table from "@mui/joy/Table";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DescriptionIcon from "@mui/icons-material/Description";
import Pagination from "@mui/material/Pagination";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function createData(file: string, amount: string, date: string) {
  return { file, amount, date };
}

const rows = [
  createData("Invoice_2025/02.pdf", "NGN500", "15th February, 2025."),
  createData("Invoice_2025/02.pdf", "NGN500", "15th February, 2025."),
  createData("Invoice_2025/02.pdf", "NGN500", "15th February, 2025."),
  createData("Invoice_2025/02.pdf", "NGN500", "15th February, 2025."),
  createData("Invoice_2025/02.pdf", "NGN500", "15th February, 2025."),
  createData("Invoice_2025/02.pdf", "NGN500", "15th February, 2025."),
  createData("Invoice_2025/02.pdf", "NGN500", "15th February, 2025."),
];

export function SubscriptionTable() {
  const [page, setPage] = React.useState(1);
  const totalPages = 10;
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:601px) and (max-width:960px)");

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Card view for mobile devices
  const MobileView = () => (
    <Box sx={{ width: "100%" }}>
      {rows.map((row, index) => (
        <Card
          key={index}
          sx={{ mb: 2, boxShadow: "none", border: "1px solid #e0e0e0" }}
        >
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
              <DescriptionIcon sx={{ color: "#9e9e9e", fontSize: 20, mr: 1 }} />
              <Typography variant="body1">{row.file}</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography variant="body2" color="text.secondary">
                Amount:
              </Typography>
              <Typography variant="body1">{row.amount}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body2" color="text.secondary">
                Date:
              </Typography>
              <Typography variant="body1">{row.date}</Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  return (
    <div
      style={{
        border: "1px solid #B3B3B3",
        borderRadius: "4px",
        padding: isMobile ? "12px" : "16px",
        width: "100%",
        overflow: "auto",
      }}
    >
      {isMobile ? (
        <MobileView />
      ) : (
        <Table
          sx={{
            "& thead th:nth-child(1)": { width: isTablet ? "40%" : "33%" },
            "& thead th:nth-child(2)": { width: isTablet ? "25%" : "33%" },
            "& thead th:nth-child(3)": { width: isTablet ? "35%" : "33%" },
            "& thead th": {
              borderBottom: "1px solid #e0e0e0",
              color: "#000",
              fontWeight: "normal",
              padding: isTablet ? "8px 12px" : "8px 16px",
              whiteSpace: "nowrap",
            },
            "& tbody td": {
              padding: isTablet ? "12px" : "16px",
              borderBottom: "none",
              whiteSpace: "nowrap",
            },
            "& tbody tr": {
              borderBottom: "none",
            },
            minWidth: isTablet ? "500px" : "600px",
          }}
        >
          <thead>
            <tr>
              <th>File</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <DescriptionIcon
                      style={{ color: "#9e9e9e", fontSize: "20px" }}
                    />
                    {row.file}
                  </div>
                </td>
                <td>{row.amount}</td>
                <td>{row.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "16px",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "12px" : "0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            width: isMobile ? "100%" : "auto",
            justifyContent: isMobile ? "center" : "flex-start",
          }}
        >
          <span>Page</span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #e0e0e0",
              borderRadius: "4px",
              padding: "4px 8px",
            }}
          >
            <span>{page}</span>
            <ArrowDropDownIcon style={{ color: "#9e9e9e" }} />
          </div>
          <span>of {totalPages}</span>
        </div>
        <div
          style={{
            marginLeft: isMobile ? "0" : "auto",
            width: isMobile ? "100%" : "auto",
            display: "flex",
            justifyContent: isMobile ? "center" : "flex-end",
          }}
        >
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChange}
            size={isMobile ? "small" : "medium"}
            hideNextButton
            hidePrevButton
          />
        </div>
      </div>
    </div>
  );
}
