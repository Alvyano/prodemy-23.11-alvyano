import React from "react";

export default function InputText({
    placeholder,
    className = "w-[30rem]",
    id,
    type,
    register,
    onChange,
}) {
    return (
        <input
            {...register(id)}
            className={`border-[2px] border-amber-400 rounded-xl px-2 py-2 ${className}`}
            placeholder={placeholder}
            id={id}
            type={type}
            onChange={onChange}
        />
    );
}
