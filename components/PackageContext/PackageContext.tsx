"use client";

import { createContext, FC, useState } from "react";

import { Package as IPackage, WithChildren } from "@/types";

import { PackageContext as IPackageContext } from "./types";

export const PackageContext = createContext<IPackageContext>({
  selectedPackage: {} as IPackage,
  setSelectedPackage: () => {
    console.error("PackageContext.Provider is not defined");
  },
});

const PackageProvider: FC<WithChildren> = ({ children }) => {
  const [selectedPackage, setSelectedPackage] = useState<IPackage>({} as IPackage);

  return (
    <PackageContext.Provider value={{ selectedPackage, setSelectedPackage }}>
      {children}
    </PackageContext.Provider>
  );
};

export default PackageProvider;
