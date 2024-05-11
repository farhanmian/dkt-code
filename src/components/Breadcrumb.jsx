import React from "react";
import { VtmnBreadcrumb, VtmnBreadcrumbItem } from "@vtmn/react";

const Breadcrumb = () => {
    return (
        <div className="Breadcrumb" style={{ 
            width: "100vw",
            padding: "1rem",
            }}>
            <VtmnBreadcrumb aria-label="Breadcrumb">
                <VtmnBreadcrumbItem href="/">Decathlon</VtmnBreadcrumbItem>
                <VtmnBreadcrumbItem href="/">Tous les sports</VtmnBreadcrumbItem>
                <VtmnBreadcrumbItem href="/">Pilates, Gym Douce</VtmnBreadcrumbItem>
                <VtmnBreadcrumbItem href="/">Vêtements pilate</VtmnBreadcrumbItem>
            </VtmnBreadcrumb>
        </div>
    );
}

export default Breadcrumb;