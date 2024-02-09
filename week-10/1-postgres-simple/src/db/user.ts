import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */


export async function createUser(username: string, password: string, name: string) {
    // await client.connect();
    const insertString = 'INSERT INTO users (username, password, name) VALUES ($1,$2,$3)'
    const values = [username, password, name]
    const res = await client.query(insertString, values)
    const newUser = res.rows[0];
    return newUser;
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    // await client.connect()
    const getQuery = 'SELECT * FROM users WHERE id = $1'
    const res = await client.query(getQuery, [userId])
    return res.rows[0]
}
