import React, { useState } from "react";
import "./index.css";

export function Card({ src, title }) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <span>{title}</span>
    </div>
  );
}
