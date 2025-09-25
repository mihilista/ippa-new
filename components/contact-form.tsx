'use client';

import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import Input from "@/components/input";
import { validateEmail } from "@/helpers/validation";
import { useTranslations } from 'next-intl';
import React, { useCallback, useEffect, useState } from "react";

const DEFAULT_DATA = {
    name: '',
    phone: '',
    email: '',
    message: '',
    agree: false,
    gender: '' // Hidden field for bot protection
};

export default function ContactForm() {
    const [data, setData] = useState(DEFAULT_DATA);
    const [status, setStatus] = useState('');
    const [errorField, setErrorField] = useState('');
    const t = useTranslations('form');

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

        setErrorField('');

        if (data.name === '') {
            setErrorField('name');
            return;
        } else if (data.phone === '') {
            setErrorField('phone');
            return;
        } else if (data.email === '' || !validateEmail(data.email)) {
            setErrorField('email');
            return;
        } else if (data.agree === false) {
            setErrorField('agree');
            return;
        }

        setStatus('sending');

        const res = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
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

    const resetForm = useCallback(() => {
        setErrorField('');
        setStatus('');
        setData(DEFAULT_DATA);
    }, []);

    useEffect(() => {
        if (errorField) {
            const el = document.querySelector(`[name="${errorField}"]`) as HTMLInputElement;

            if (el) {
                el.focus();
            }
        }
    }, [errorField])

    return (
        <div className="flex-1 w-full flex flex-col">
            <form action=""
                className="flex-1 w-full flex flex-col gap-5"
                onSubmit={handleSubmit}
            >
                <Input
                    type="text"
                    name="name"
                    id="cf-name"
                    label={t('fields.name')}
                    value={data.name}
                    onChange={handleInputChange}
                    error={errorField === 'name'}
                    autoComplete="given-name"
                />



                <Input type="text"
                    name="phone"
                    id="cf-phone"
                    label={t('fields.phone')}
                    value={data.phone}
                    onChange={handleInputChange}
                    error={errorField === 'phone'}
                    autoComplete="tel"
                />

                <Input type="text"
                    name="email"
                    id="cf-email"
                    label={t('fields.email')}
                    value={data.email}
                    onChange={handleInputChange}
                    error={errorField === 'email'}
                    autoComplete="email"
                />

                <Input type="textarea"
                    name="message"
                    id="cf-message"
                    label={t('fields.message')}
                    value={data.message}
                    onChange={handleInputChange}
                    error={errorField === 'message'}
                    className="h-full"

                />

                <Checkbox name="agree"
                    id="cf-agree"
                    checked={data.agree === true}
                    onChange={handleCheckboxChange}
                    error={errorField === 'agree'}
                >
                    <span dangerouslySetInnerHTML={{ __html: t.raw('fields.agree') }} />
                </Checkbox>



                {/* Hidden input for bot protection */}
                <input type="text"
                    name="gender"
                    id="cf-gender"
                    value={data.gender}
                    onChange={handleInputChange}
                    className="absolute -top-[9999px] -left-[9999px]"
                    autoComplete="off"
                    tabIndex={-1}
                />



                <div className="flex justify-between items-center">
                    {status === 'error' && (
                        <p className="text-b2 text-error">
                            {t('errors.general')}
                        </p>
                    )}

                    {errorField && (
                        <p className="text-b2 text-error">
                            {t('errors.fields')}
                        </p>
                    )}

                    {status === 'success' && (
                        <p className="text-b2 text-success">
                            {t('success')}
                        </p>
                    )}

                    <Button
                        theme="pink"
                        disabled={status === 'sending'}
                        className="ml-auto shrink-0"
                        type={status === 'success' ? 'button' : 'submit'}
                        onClick={status === 'success' ? resetForm : undefined}
                    >
                        {status === 'sending' && t('button.sending')}
                        {status === 'success' && t('button.sent')}
                        {(status === '' || status === 'error') && t('button.send')}
                    </Button>
                </div>
            </form>
        </div>
    )
}
