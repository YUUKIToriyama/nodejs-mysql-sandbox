import * as mysql from 'mysql2/promise';
import * as fs from 'fs/promises';

const connectionOptions = {
	user: 'root',
	password: 'root',
	database: 'school'
};

(async () => {
	const query = await fs.readFile('./query.sql', {
		encoding: 'utf8'
	});
	console.log(`Query: ${query}`)
	const connection = await mysql.createConnection(connectionOptions);
	const result = await connection.execute(query);
	await connection.end();
	console.log(result[0]);
})();