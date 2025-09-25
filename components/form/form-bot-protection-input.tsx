import { TFormBotProtectionInput } from "@/helpers/types";

export default function FormBotProtectionInput({ value, onChange }: TFormBotProtectionInput) {
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