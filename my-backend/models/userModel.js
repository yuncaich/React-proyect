// models/userModel.js
const db = require('../config/db');

const saveParentAndChildren = async (parent, children) => {
    const connection = await db.getConnection();
    try {
        await connection.beginTransaction();

        // Insert parent
        const [parentResult] = await connection.query(
            `INSERT INTO Parents (name, surname, lastname, email, phone, address, gender, document)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [parent.name, parent.surname, parent.lastname, parent.email, parent.phone, parent.address, parent.gender, parent.document]
        );
        const parentId = parentResult.insertId;

        // Insert children
        for (const child of children) {
            await connection.query(
                `INSERT INTO Children (name, surname, lastname, birthdate, parent_id)
                 VALUES (?, ?, ?, ?, ?)`,
                [child.name, child.surname, child.lastname, child.birthdate, parentId]
            );
        }

        await connection.commit();
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.release();
    }
};

module.exports = { saveParentAndChildren };
