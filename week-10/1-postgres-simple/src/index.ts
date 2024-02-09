import { Client } from 'pg'
import { DB_URL } from './config';
import 'dotenv/config'

export const client = new Client({
    connectionString: DB_URL
});
