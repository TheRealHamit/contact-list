const ContactRow = ({ contact }) => {
    return (
        <tr>
            <td>{contact.name}1</td>
            <td>{contact.email}2</td>
            <td>{contact.phone}3</td>
        </tr>
    );
}

export default ContactRow;