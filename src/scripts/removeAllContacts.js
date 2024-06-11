import { PATH_DB } from '../constants/contacts.js';
import fs from "node:fs/promises";

export const removeAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, "utf8");
        let contacts = [];
        await fs.writeFile(PATH_DB, JSON.stringify(contacts));
        console.log("All contacts have been removed successfully")

    } catch (err) {
                console.error('Error reading or writing db.json:', err);

    }
};

await removeAllContacts();
