import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    // await client.connect()
    const createTodoQuery = 'INSERT INTO todos(user_id, title, description) VALUES ($1, $2, $3) RETURNING *'
    const values = [userId, title, description]
    const res = await client.query(createTodoQuery, values)
    const newUser = res.rows[0];
    return newUser
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    // await client.connect();
    const updateTodoQuery = 'UPDATE todos SET done = true WHERE id = $1 RETURNING *'
    const res = await client.query(updateTodoQuery, [todoId])
    const todo = res.rows[0];
    return todo;
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {    
    // await client.connect()
    const getTodosQuery = 'SELECT * FROM todos WHERE user_id = $1';
    const res = await client.query(getTodosQuery, [userId])
    console.log('Received Todos:', res.rows);

    return res.rows
}