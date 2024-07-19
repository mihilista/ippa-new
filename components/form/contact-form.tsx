'use client';

import Input from "@/components/input";
import React, {useCallback, useEffect, useState} from "react";
import {DEFAULT_FORM_DATA} from "@/helpers/data";
import Button from "@/components/button";
import FormBotProtectionInput from "@/components/form/form-bot-protection-input";
import clsx from "clsx";

const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

export default function ContactForm() {
    const [data, setData] = useState(DEFAULT_FORM_DATA);

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
        } else if (data.message === '') {
            setErrorField('message');
            return;
        }

        setStatus('sending');

        const res = await fetch('/api/send-email', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        });

        if (res.status === 200) {
            setStatus('success');
            setData(DEFAULT_FORM_DATA);
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
            <form className={clsx('w-full flex flex-col gap-4 transition-all duration-500', {
                'opacity-0 pointer-events-none': status === 'success'
            })}
                  onSubmit={handleSubmit}
            >
                <Input label="Name"
                       id="cf-name"
                       name="name"
                       value={data.name}
                       onChange={handleInputChange}
                       error={errorField === 'name'}
                />

                <Input label="E-mail"
                       id="cf-email"
                       name="email"
                       value={data.email}
                       onChange={handleInputChange}
                       error={errorField === 'email'}
                />

                <Input label="Message"
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

                <Button className={clsx('')}
                        disabled={status === 'sending'}
                >
                    {status === 'sending' ? 'Sending...' : 'Submit'}
                </Button>
            </form>

            <div
                className={clsx('absolute top-0 left-0 w-full h-full flex items-center justify-center p-8 text-center transition-all duration-500', {
                    'opacity-0 pointer-events-none': status !== 'success'
                })}>
                <p className="max-w-[20ch]">
                    Thank you, I will get back to you soon!
                </p>
            </div>
        </div>
    )
}