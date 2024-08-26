function SelectMenu({ value, name, onChange, options, defaultText, cls }) {
    return (
        <select className={cls} value={value} name={name} onChange={onChange}>
            <option value="">{defaultText}</option>
            {options?.map((option, idx) => (
                <option key={idx} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export default SelectMenu;
