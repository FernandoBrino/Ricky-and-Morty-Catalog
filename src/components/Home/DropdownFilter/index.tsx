import { FC } from "react";
import { DropdownFilterContainer } from "./styles"

interface DropdownFilterProps {
    isActive: boolean;
}

export const DropdownFilter: FC<DropdownFilterProps> = ({ isActive }) => {
    return (
        <DropdownFilterContainer isActive={isActive}>
            <form>
                <span>Status</span>
                <ul>
                    <li>
                        <label>Alive</label>
                        <input type="checkbox" value={"Alive"}/>
                    </li>

                    <li>
                        <label>Dead</label>
                        <input type="checkbox" value={"Alive"}/>
                    </li>

                    <li>
                        <label>Unknown</label>
                        <input type="checkbox" value={"Alive"}/>
                    </li>
                </ul>
            </form>
        </DropdownFilterContainer>
    )
    
}