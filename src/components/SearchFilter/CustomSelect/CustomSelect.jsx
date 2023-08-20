import {SelectWrapper, StyledSelect, StyledArrowDown } from './StyledCustomSelect';

function CustomSelect({ value, onChange, options }) {
    return (
        <SelectWrapper>
            <StyledSelect value={value} onChange={onChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </StyledSelect>
            <StyledArrowDown size={20}/>
        </SelectWrapper>
        
    )
}

export default CustomSelect;