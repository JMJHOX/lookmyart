import React, { useState } from "react";
import { COUNTRIES } from "./Countries/countries";
import { CountrySelector } from "./Countries/selector";
import { SelectMenuOption } from "./Countries/types";
type Props = {
  setCountry: any;
  country: string;
};

function SelectCountryComponent({ setCountry, country }: Props) {
  const myRef = React.createRef<HTMLDivElement>();
  const [isOpen, setIsOpen] = useState(false);
  // Default this to a country's code to preselect it

  return (
    <CountrySelector
      id={"countries"}
      ref={myRef}
      open={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
      onChange={(val) => setCountry(val)}
      // We use this type assertion because we are always sure this find will return a value but need to let TS know since it could technically return null
      selectedValue={
        COUNTRIES.find((option) => option.value === country) as SelectMenuOption
      }
    />
  );
}

export { SelectCountryComponent };
