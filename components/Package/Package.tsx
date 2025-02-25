"use client";

import { FC, useEffect } from "react";

import Card from "@/components/Card";
import PackageSelector from "@/components/PackageSelector";
import Price from "@/components/Price";
import TagsGroup from "@/components/TagsGroup";
import { getPackagePricing } from "@/utils";
import { usePackage } from "@/hooks";
import Timer from "@/components/Timer";

import { PackageProps } from "./types";

const Package: FC<PackageProps> = ({ packageData, preSelected }) => {
  const { selectedPackage, setSelectedPackage } = usePackage();
  const isSelected = selectedPackage?.id === packageData.id;

  useEffect(() => {
    if (preSelected) {
      setSelectedPackage(packageData);
    }
  }, []);

  const handleClick = () => {
    setSelectedPackage(packageData);
  };

  return (
    <div onClick={handleClick}>
      <Card active={isSelected}>
        <TagsGroup tags={packageData.tags} />
        <Timer mediaQuery={"(min-width: 1025px)"} />
        <PackageSelector active={isSelected}>{packageData.name}</PackageSelector>
        <Price {...getPackagePricing(packageData)} />
      </Card>
    </div>
  );
};

export default Package;
