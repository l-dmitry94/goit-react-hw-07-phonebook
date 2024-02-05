import { FormInput } from 'components/ContactsForm/ContactsForm.styled';

const Filter = ({ onChange }) => {
    return (
        <div>
            <p>Find contacts by name</p>
            <FormInput type="text" name="filter" onChange={onChange} />
        </div>
    );
};

export default Filter;
