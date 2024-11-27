import { Field, ErrorMessage } from "formik"

interface inputField{
    labelName: string;
    fieldName:string;
    type: string;
    placeholder: string;
    isRequired:boolean;
    options?:string[];
}

const InputFeild = ({fieldName,placeholder,type,labelName,options =[],isRequired}:inputField) => {
  return (
    <div className="flex flex-col gap-1 text-start w-[100%] my-3">
        {/* Label */}
        <label htmlFor={fieldName} className="text-lg">
        {labelName} 
        {isRequired && <span className="text-red-500">*</span>}
        </label>

        {/* Conditional Field Rendering */}
        {type === "select" ? (
        <Field as="select" name={fieldName} className="p-4 border-2 focus:ring-0 focus:border-black rounded-md">
            <option value="" disabled>
            {placeholder || "Select an option"}
            </option>
            {options.map((option, index) => (
            <option key={index} value={option.value}>
                {option.label}
            </option>
            ))}
        </Field>
        ) : (
        <Field
            type={type}
            name={fieldName}
            placeholder={placeholder}
            className="p-4 border-2 focus:ring-0 focus:border-black rounded-md"
        />
        )}

        {/* Error Message */}
        <ErrorMessage className="text-red-500 text-lg" name={fieldName} component="div" />
    </div>
  )
}

export default InputFeild


