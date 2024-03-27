"use client";
import React from "react";
import { HomeBtnProps } from "../mytupes/HomeBtnTypes";
export const HomeBtn: React.FC<HomeBtnProps> = ({
  materialUiIcon: Component,
  style: classNames,
  noIconText: text,
}: HomeBtnProps) => {
  return (
    <button className={classNames}>
      {Component ? (
        <Component className='w-9 h-9' />
      ) : (
        <span>{text ? text : "Add text or MUI Icon"}</span>
      )}
    </button>
  );
};
