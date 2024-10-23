import { createFakeContact } from "../utils/createFakeContact";
import { readContacts } from "../utils/readContacts";
import { writeContacts } from "../utils/writeContacts";

const generateContacts = async (number) => {
    const contacts = await readContacts();
    for (let i = 0; i < number; i++) {
        contacts.push(createFakeContact());
    }
    await writeContacts(contacts);
};

generateContacts(5);
