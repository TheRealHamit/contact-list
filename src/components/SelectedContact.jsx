import { useEffect, useState } from "react"

const SelectedContact = ({ API_URL, selectedContactId, setSelectedContactId }) => {
    const [contact, setContact] = useState(null)

    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(API_URL + "users/" + selectedContactId)
                const result = await response.json()
                setContact(result)
            } catch (error) {
                console.error(error)
            }
        }
        fetchContact()
    }, [])

    return (
        <>
        {contact && <div>
            <p>Name: {contact.name}</p>
            <p>Username: {contact.username}</p>
            <p>Email: {contact.email}</p>
            <p>Street: {contact.address.street}</p>
            <p>Phone: {contact.phone}</p>
            <p>Website: {contact.website}</p>
            <p>Company: {contact.company.name}</p>
            <button onClick={() => setSelectedContactId(null)}>Contact List</button>
        </div>}
        </>
    )
}

export default SelectedContact