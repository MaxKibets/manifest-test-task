import { Package } from "@/types";
import { Dispatch, SetStateAction } from "react";

export interface PackageContext {
  selectedPackage: Package;
  setSelectedPackage: Dispatch<SetStateAction<Package>>;
}
