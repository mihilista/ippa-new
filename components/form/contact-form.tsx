'use client';

import Button from "@/components/button";
import Checkbox from '@/components/form/checkbox';
import FormBotProtectionInput from "@/components/form/form-bot-protection-input";
import Input from "@/components/form/input";
import { validateEmail } from '@/helpers/validation';
import clsx from "clsx";
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from "react";

export const DEFAULT_DATA = {
    name: '',
    email: '',
    phone: '',
    message: '',
    agree: false,
    gender: ''
};

export default function ContactForm() {
    const [data, setData] = useState(DEFAULT_DATA);
    const [status, setStatus] = useState('');
    const [errorField, setErrorField] = useState('');

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (errorField === e.target.name && e.target.value !== '') {
            setErrorField('');
        }

        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }, [data, errorField]);

    const handleCheckboxChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (errorField === e.target.name && e.target.checked) {
            setErrorField('');
        }

        setData({
            ...data,
            [e.target.name]: e.target.checked
        });
    }, [data, errorField]);

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (data.gender !== '') {
            // Do nothing if the gender is filled (likely a bot submission)
            return;
        }

        if (data.name === '') {
            setErrorField('name');
            return;
        } else if (data.email === '' || !validateEmail(data.email)) {
            setErrorField('email');
            return;
        } else if (data.phone === '') {
            setErrorField('phone');
            return;
        } else if (data.message === '') {
            setErrorField('message');
            return;
        }

        setStatus('sending');

        const res = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (res.status === 200) {
            setStatus('success');
            setData(DEFAULT_DATA);

            // Trigger the custom event for GTM
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'lead'
            });
        } else {
            setStatus('error');
        }
    }, [data]);

    useEffect(() => {
        if (errorField) {
            const el = document.querySelector(`[name="${errorField}"]`) as HTMLElement;

            if (el) {
                el.focus();
            }
        }
    }, [errorField]);


    return (
        <div className="w-full relative">
            <form className={clsx('w-full flex flex-col gap-5 transition-all duration-500', {
                'opacity-0 pointer-events-none': status === 'success'
            })}
                onSubmit={handleSubmit}
            >
                <Input label="Jméno a příjmení"
                    id="cf-name"
                    name="name"
                    value={data.name}
                    onChange={handleInputChange}
                    error={errorField === 'name'}
                />

                <div className="flex flex-col md:flex-row gap-5">
                    <Input label="E-mail"
                        id="cf-email"
                        name="email"
                        value={data.email}
                        onChange={handleInputChange}
                        error={errorField === 'email'}
                    />

                    <Input label="Telefon"
                        id="cf-phone"
                        name="phone"
                        value={data.phone}
                        onChange={handleInputChange}
                        error={errorField === 'phone'}
                    />
                </div>

                <Input label="Zpráva (volitelné)"
                    type="textarea"
                    id="cf-message"
                    name="message"
                    value={data.message}
                    onChange={handleInputChange}
                    error={errorField === 'message'}
                />

                {/* Hidden input for bot protection */}
                <FormBotProtectionInput value={data.gender}
                    onChange={handleInputChange}
                />

                <Checkbox name="agree"
                    id="cf-agree"
                    checked={data.agree === true}
                    onChange={handleCheckboxChange}
                    error={errorField === 'agree'}
                >
                    Souhlasím se <Link href="/gdpr" target="_blank" className="underline hover:no-underline">zpracováním osobních údajů</Link>.
                </Checkbox>

                <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                    <Button
                        className="md:ml-auto w-full md:max-w-[270px]"
                        disabled={status === 'sending'}
                    >
                        {status === 'sending' ? 'Odesílám...' : 'Odeslat'}
                    </Button>
                </div>
            </form>

            <div
                className={clsx('absolute top-0 left-0 w-full h-full flex items-center justify-center p-8 text-center transition-all duration-500', {
                    'opacity-0 pointer-events-none': status !== 'success'
                })}>
                <p className="text-xl leading-[1.2] font-bold text-blue-600 max-w-[24ch]">
                    Děkujeme za váš zájem! Ozveme se vám co nejdříve.
                </p>
            </div>
        </div>
    )
}