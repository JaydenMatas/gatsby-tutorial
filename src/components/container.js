import React from "react"
import containerStyles from "./container.module.css"

export const Container = ({ children }) => (
  <div className={containerStyles.container}>{children}</div>
)