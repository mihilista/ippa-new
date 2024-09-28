import React from "react";

export type TContainer = {
    Element?: React.ElementType;
    narrow?: boolean;
    className?: string;
    children?: React.ReactNode;
    [rest: string]: any;
};

export type TButton = {
    theme?: 'blue';
    href?: string;
    className?: string;
    children?: React.ReactNode;
    [rest: string]: any;
}

export type TTypo = {
    Element?: React.ElementType;
    className?: string;
    children?: React.ReactNode;
    [rest: string]: any;
}

export type TInput = {
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    error: boolean;
    [rest: string]: any;
}

export type TFormBotProtectionInput = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TBox = {
    theme?: 'blue' | 'gray';
    className?: string;
    children?: React.ReactNode;
    [rest: string]: any;
}