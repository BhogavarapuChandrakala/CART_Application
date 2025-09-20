import React from "react";
import "./Breadcrumbs.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from '@mui/icons-material/NavigateNext'; 

export default function BreadcrumbsBar({ 
  items = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "Product Detail", to: "/products/hair-bows" },
    { label: "Cart" }
  ] 
}) {
  return (
    <div className="breadcrumbs-wrapper">
      <Breadcrumbs 
        aria-label="breadcrumb" 
        separator={<NavigateNextIcon fontSize="small" />}
      >
        {items.map(({ label, to }, index) => (
          index < items.length - 1 && to ? (
            <Link 
              key={label} 
              color="inherit" 
              href={to} 
              className="breadcrumb-link"
              underline="none" 
            >
              {label}
            </Link>
          ) : (
            <Typography key={label} color="text.primary">
              {label}
            </Typography>
          )
        ))}
      </Breadcrumbs>
    </div>
  );
}
