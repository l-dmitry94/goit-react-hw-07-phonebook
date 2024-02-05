import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/operations';
import { ContactsItemStyled, DeleteButton } from './ContactsItem.styled';

const ContactsItem = ({ id, name, phone, type }) => {
    const dispatch = useDispatch();
    return (
        <ContactsItemStyled>
            {`${name}: ${phone}`}
            <DeleteButton type={type} onClick={() => dispatch(deleteContact({id}))}>
                Delete
            </DeleteButton>
        </ContactsItemStyled>
    );
};

export default ContactsItem;
