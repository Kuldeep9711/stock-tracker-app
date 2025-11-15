import { Controller } from "react-hook-form"
import { Label } from "../ui/label"


const SelectField= ({ name, label, placeholder, options, control, error, required = false}: SelectFieldProps) => {
  return (
    <div className="space-y-2">
    <Label htmlFor={name} className="form-label">{label}</Label>

    <Controller 
    name={name}
    control={control}
    rules={{
        required: required ? `Please select ${label.toLowerCase()}` : false,
    }}
    
    />
    </div>
  )
}

export default SelectField
