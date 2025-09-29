type FormBotProtectionInputProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormBotProtectionInput({ value, onChange }: FormBotProtectionInputProps) {
    return (
        <input type="text"
            name="gender"
            id="gender"
            value={value}
            onChange={onChange}
            className="absolute -top-[9999px] -left-[9999px]"
            autoComplete="off"
            tabIndex={-1}
        />
    )
}