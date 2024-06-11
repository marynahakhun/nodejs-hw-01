import { PATH_DB } from '../constants/contacts.js';
import fs from "node:fs/promises";
import { createFakeContact } from '../utils/createFakeContact.js';
export const addOneContact = async () => {
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
        const newContact = createFakeContact();
        contacts.push(newContact);
              await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
        console.log('One contact added successfully');
}
} catch (err) {
    console.error('Error reading or writing db.json:', err);
}
};

await addOneContact();
