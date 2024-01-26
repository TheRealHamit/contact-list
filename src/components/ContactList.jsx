import { useState, useEffect } from "react";
import ContactRow from "./ContactRow.jsx"


const ContactList = ({ API_URL, setSelectedContactId }) => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        async function fetchContacts() {
            try {
                const response = await fetch(API_URL + "users")
                const result = await response.json()
                setContacts(result)
            } catch (error) {
                console.error(error)
            }
        }
        fetchContacts()
    }, [])

    return (
        <>
        <p>Test</p>
        <table>
            <thead>
                <tr>
                    <th colSpan={3}>Contact List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                {
                    contacts.map((contact) => {
                        return <ContactRow setSelectedContactId={setSelectedContactId} key={contact.id} contact={contact} />
                    })
                }
            </tbody>
        </table>
        </>
    )
}

export default ContactList;