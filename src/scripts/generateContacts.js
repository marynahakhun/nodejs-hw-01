import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from "node:fs/promises";
 
const generateContacts = async (number) => {
    try {
        let data = await fs.readFile(PATH_DB, 'utf8');
        let contacts = [];

        if (data) {
            try {
                contacts = JSON.parse(data);
            } catch (err) {
                console.error('Error parsing JSON from db.json:', err);
                return;
            }
        }

        const newContacts = [];
        for (let i = 0; i < number; i += 1) {
            newContacts.push(createFakeContact());
        }

        contacts = contacts.concat(newContacts);

        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
        console.log('Contacts added successfully');
    } catch (err) {
        console.error('Error reading or writing db.json:', err);
    }
};

await generateContacts(2);