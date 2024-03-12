import React from "react";

export default function InputText({
    placeholder,
    className = "w-[30rem] ",
    id,
    type,
    register,
    onChange,
    defaultValue
}) {
    return (
        <textarea
            {...register(id)}
            className={`border-[2px] border-amber-400 rounded-xl px-2 py-2 ${className} resize-none overflow-hidden`}
            placeholder={placeholder}
            id={id}
            type={type}
            onChange={onChange}
            defaultValue={defaultValue}
            rows={1}
            cols={50}
        />
    );
}
