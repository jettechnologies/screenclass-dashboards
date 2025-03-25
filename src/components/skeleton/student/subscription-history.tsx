"use client";

import * as React from "react";
import { Skeleton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export function SubscriptionTableSkeleton() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:601px) and (max-width:960px)");
  const skeletonRows = Array(5).fill(null);

  // Mobile view skeleton
  const MobileSkeleton = () => (
    <Box sx={{ width: "100%" }}>
      {skeletonRows.map((_, index) => (
        <Card
          key={index}
          sx={{ mb: 2, boxShadow: "none", border: "1px solid #e0e0e0" }}
        >
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
              <Skeleton
                variant="circular"
                width={20}
                height={20}
                sx={{ mr: 1 }}
              />
              <Skeleton variant="text" width={150} height={24} />
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Skeleton variant="text" width={60} height={20} />
              <Skeleton variant="text" width={80} height={20} />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Skeleton variant="text" width={60} height={20} />
              <Skeleton variant="text" width={120} height={20} />
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  // Desktop view skeleton
  const DesktopSkeleton = () => (
    <Box sx={{ minWidth: isTablet ? "500px" : "600px" }}>
      <Box sx={{ display: "flex", mb: 2 }}>
        <Skeleton variant="text" width="33%" height={40} />
        <Skeleton variant="text" width="33%" height={40} />
        <Skeleton variant="text" width="33%" height={40} />
      </Box>
      {skeletonRows.map((_, index) => (
        <Box key={index} sx={{ display: "flex", mb: 1 }}>
          <Box
            sx={{ width: "33%", display: "flex", alignItems: "center", gap: 1 }}
          >
            <Skeleton variant="circular" width={20} height={20} />
            <Skeleton variant="text" width="80%" height={24} />
          </Box>
          <Skeleton variant="text" width="33%" height={24} />
          <Skeleton variant="text" width="33%" height={24} />
        </Box>
      ))}
    </Box>
  );

  return (
    <Box
      sx={{
        border: "1px solid #B3B3B3",
        borderRadius: "4px",
        padding: isMobile ? "12px" : "16px",
        width: "100%",
        overflow: "auto",
      }}
    >
      {isMobile ? <MobileSkeleton /> : <DesktopSkeleton />}

      {/* Pagination skeleton */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 2,
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "12px" : "0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            width: isMobile ? "100%" : "auto",
            justifyContent: isMobile ? "center" : "flex-start",
          }}
        >
          <Skeleton variant="text" width={40} height={20} />
          <Skeleton variant="rectangular" width={60} height={32} />
          <Skeleton variant="text" width={40} height={20} />
        </Box>
        <Box
          sx={{
            ml: isMobile ? 0 : "auto",
            width: isMobile ? "100%" : "auto",
            display: "flex",
            justifyContent: isMobile ? "center" : "flex-end",
          }}
        >
          <Skeleton variant="rectangular" width={200} height={32} />
        </Box>
      </Box>
    </Box>
  );
}
