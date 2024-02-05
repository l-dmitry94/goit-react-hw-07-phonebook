import { nanoid } from '@reduxjs/toolkit';
import { useMemo, useState } from 'react';
import { Form, FormButton, FormInput, FormLabel } from './ContactsForm.styled';

const initialValues = {
    name: '',
    phone: '',
};

const ContactsForm = ({ onSubmit }) => {
    const [form, setForm] = useState({ ...initialValues });

    const nameId = useMemo(() => nanoid(), []);
    const phoneId = useMemo(() => nanoid(), []);

    const handleChange = event => {
        const { name, value } = event.currentTarget;

        setForm(prevForm => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(form);

        setForm({ ...initialValues });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormLabel htmlFor={nameId}>
                Name
                <FormInput
                    type="text"
                    id={nameId}
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
            </FormLabel>
            <FormLabel htmlFor={phoneId}>
                Number
                <FormInput
                    type="tel"
                    id={phoneId}
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                />
            </FormLabel>

            <FormButton type="submit">Add contact</FormButton>
        </Form>
    );
};

export default ContactsForm;
