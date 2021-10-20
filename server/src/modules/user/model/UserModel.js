import db from '../../../database/connection.js';

export const post = async (user) => {
	const { username, email, password } = user;
	const sql = `INSERT INTO user (username, email, password, isAdmin) VALUES (?, ?, ?, false)`;

	return await db.promise().query(sql, [username, email, password]);
};

export const getOne = async (params) => {
	const buildConditions = () => {
		var conditions = [];
		var values = [];

		if (params.id) {
			conditions.push('u.id = ?');
			values.push(parseInt(params.id));
		}

		if (params.username) {
			conditions.push('u.username = ?');
			values.push(params.username);
		}

		if (params.email) {
			conditions.push('u.email = ?');
			values.push(params.email);
		}

		return {
			where: conditions.length ? conditions.join(' AND ') : '1',
			values: values
		};
	};

	var conditions = buildConditions();

	const sql = 'SELECT * FROM user u WHERE ' + conditions.where;
	const [row] = await db.promise().query(sql, conditions.values);

	return row;
};
