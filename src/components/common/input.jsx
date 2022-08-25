import React from "react";

export function InputRoundedLabel({
  labelFor,
  label,
  id,
  type,
  name,
  placeholder,
  onChange,
  requerided = true,
}) {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <label htmlFor={labelFor} className="text-sm text-gray-600">
          {label}
        </label>
      </div>
      <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
        {requerided ? (
          <input
            id={id}
            className="bg-transparent pl-2 w-full outline-none border-none"
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            required
          />
        ) : (
          <input
            id={id}
            className="bg-transparent pl-2 w-full outline-none border-none"
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
}

export function TextArea({ labelFor, label, id, name, placeholder, onChange }) {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between mb-2">
        <label htmlFor={labelFor} className="text-sm text-gray-600">
          {label}
        </label>
      </div>
      <div className=" w-full h-full flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
        <textarea
          className="w-full h-full bg-transparent pl-2 outline-none border-none resize-none"
          id={id}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          required
        ></textarea>
      </div>
    </div>
  );
}
