
import { PATH_DB } from '../constants/contacts.js';
import fs from "node:fs/promises";

export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, "utf8");
        const contacts = JSON.parse(data);
     
        if (contacts.length === 0) {
            console.log("No contacts to remove");
            return;
        }
        
        contacts.pop();
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
        console.log("Last contact removed successfully");
    } catch (err) {
        console.error('Error reading or writing db.json:', err);
    }
};

await removeLastContact();
 