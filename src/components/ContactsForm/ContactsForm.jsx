import { nanoid } from '@reduxjs/toolkit';
import { useMemo, useState } from 'react';
import { Form, FormButton, FormInput, FormLabel } from './ContactsForm.styled';

const initialValues = {
    name: '',
    number: '',
};

const ContactsForm = ({ onSubmit }) => {
    const [form, setForm] = useState({ ...initialValues });

    const nameId = useMemo(() => nanoid(), []);
    const numberId = useMemo(() => nanoid(), []);

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
            <FormLabel htmlFor={numberId}>
                Number
                <FormInput
                    type="tel"
                    id={numberId}
                    name="number"
                    value={form.number}
                    onChange={handleChange}
                    required
                />
            </FormLabel>

            <FormButton type="submit">Add contact</FormButton>
        </Form>
    );
};

export default ContactsForm;
