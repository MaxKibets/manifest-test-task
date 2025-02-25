import { FC } from "react";

import Package from "@/components/Package";
import { getPackages } from "@/utils";

import PackagesLayout from "./PackagesLayout";

const Packages: FC = () => {
  // In prod here should be a promise to fetch data from the server...
  // With error handling, loading states, etc.
  const packages = getPackages();

  return (
    <PackagesLayout>
      {packages.map((packageData, index) => (
        <Package
          key={packageData.id}
          packageData={packageData}
          preSelected={index === 1}
        />
      ))}
    </PackagesLayout>
  );
};

export default Packages;
