import { FC, useState } from "react";
import { DefaultButton, DropdownFilterContainer, ResetButton, SelectContainer, SelectHeader, SelectListContainer } from "./styles"
import { RiArrowDropDownFill } from "react-icons/ri"
import { genderList, statusList } from "@/utils";
import { BiReset } from "react-icons/bi"
import { useTheme } from "styled-components";

interface DropdownFilterProps {
    isActive: boolean;
    handleSetCharactersFilter: (filters: FiltersType) => void;
}

type StatusTypes = "Alive" | "Dead" | "Unknown" | ""

type GenderTypes = "Male" | "Female" | "Genderless" | "Unknown" | ""

type FiltersType = {
    status: StatusTypes,
    gender: GenderTypes
}


export const DropdownFilter: FC<DropdownFilterProps> = ({ isActive, handleSetCharactersFilter }) => {
    const [currentGenderFilter, setCurrentGenderFilter] = useState<GenderTypes>("");
    const [currentStatusFilter, setCurrentStatusFilter] = useState<StatusTypes>("");

    const [statusSelect, setStatusSelect] = useState<boolean>(false);
    const [genderSelect, setGenderSelect] = useState<boolean>(false);

    const { white } = useTheme();

    function handleSetCurrentGender(gender: GenderTypes) {
        setCurrentGenderFilter(gender);
    }

    function handleSetCurrentStatus(status: StatusTypes) {
        setCurrentStatusFilter(status);
    }

    function handleToggleStatusSelect () {
        setStatusSelect(!statusSelect);
    }

    function handleToggleGenderSelect () {
        setGenderSelect(!genderSelect);
    }

    function handleSubmitFilters() {
        const filters = {
            status: currentStatusFilter,
            gender: currentGenderFilter,
        }
        
        handleSetCharactersFilter(filters)
    }

    function handleResetFilters() {
        setCurrentGenderFilter("")
        setCurrentStatusFilter("")

        const filters = {
            status: "" as const,
            gender: "" as const,
        }

        console.log(filters)

        handleSetCharactersFilter(filters)
    }

    return (
        <DropdownFilterContainer isActive={isActive}>
            <div className="wrapperFilters">
                <div className="filterValuesWrapper">
                    <span>Status</span>
                    <SelectContainer onClick={handleToggleStatusSelect}>
                        <SelectHeader selectIsActive={statusSelect}>
                            {currentStatusFilter ? currentStatusFilter : "select status"}
                            <RiArrowDropDownFill size={20}/>
                        </SelectHeader>
                        {statusSelect &&
                            <SelectListContainer>
                                <ul>
                                    {statusList.map((status) => 
                                        <li onClick={() => handleSetCurrentStatus(status as StatusTypes)} key={status}>
                                            {status}
                                        </li>
                                    )}
                                    
                                </ul>
                            </SelectListContainer>
                        }
                    </SelectContainer>
                </div>
            
                <div className="filterValuesWrapper">
                    <span>Gender</span>
                    <SelectContainer onClick={handleToggleGenderSelect}>
                        <SelectHeader  selectIsActive={genderSelect}>
                            {currentGenderFilter ? currentGenderFilter : "select gender"}
                            <RiArrowDropDownFill size={20}/>
                        </SelectHeader>
                        {genderSelect && 
                            <SelectListContainer>
                                <ul>
                                    {genderList.map((gender) => 
                                        <li onClick={() => handleSetCurrentGender(gender as GenderTypes)} key={gender}>
                                            {gender}
                                        </li>
                                    )}
                                </ul>
                            </SelectListContainer>
                        }
                    </SelectContainer>
                </div>

                <div className="filterActions">
                    <DefaultButton className="submitButton" onClick={handleSubmitFilters}>
                        Apply 
                    </DefaultButton>

                    <ResetButton className="resetButton" onClick={handleResetFilters}>
                        <BiReset color={white}/>
                    </ResetButton>
                </div>
            </div>
        </DropdownFilterContainer>
    )
    
}