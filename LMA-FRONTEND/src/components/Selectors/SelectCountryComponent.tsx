import React, { useEffect, useState } from "react";
import { COUNTRIES } from "./Countries/countries";
import { CountrySelector } from "./Countries/selector";
import { SelectMenuOption } from "./Countries/types";
type Props = {
  setCountry: any;
  country: string;
  disabled?: boolean

};

function SelectCountryComponent({ setCountry, country, disabled }: Props) {
  const myRef = React.createRef<HTMLDivElement>();

  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    if (disabled) {
      setDisabled(disabled)
    }
  }, [disabled]);
  // Default this to a country's code to preselect it

  return (
    <CountrySelector
      id={"countries"}
      ref={myRef}
      open={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
      onChange={(val) => setCountry(val)}
      disableSelectButton={isDisabled}
      // We use this type assertion because we are always sure this find will return a value but need to let TS know since it could technically return null
      selectedValue={
        COUNTRIES.find((option) => option.value === country) as SelectMenuOption
      }
    />
  );
}

export { SelectCountryComponent };
