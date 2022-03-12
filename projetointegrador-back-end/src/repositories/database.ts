import sqlite3 from 'sqlite3'

const DBSOURCE = 'db.sqlite'

const SQL_CATEGORIAS_CREATE = `
	CREATE TABLE categorias (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		nome TEXT
		
	)`

	const SQL_Parceiros_CREATE = `
	CREATE TABLE Parceiros (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		nome TEXT 
		urlmg TEXT 
		local TEXT 
		estado TEXT 
		urlgoogleMaps TEXT 
		
	)`

	const SQL_ParceiroCategoria_CREATE = `
	CREATE TABLE ParceiroCategoria (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		
	)`

const database = new sqlite3.Database(DBSOURCE, (err) => {
	if (err) {
		console.error(err.message)
		throw err
	} else {
		console.log('Base de dados conectada com sucesso.')
		
		database.run(SQL_CATEGORIAS_CREATE, (err) => {
			
			if (err) {
				// Possivelmente a tabela já foi criada
			} else {
				console.log('Tabela categorias criada com sucesso.')
			}
		})

		database.run(SQL_Parceiros_CREATE, (err) => {
			
			if (err) {
				// Possivelmente a tabela já foi criada
			} else {
				console.log('Tabela Parceiros criada com sucesso.')
			}
		})

		database.run(SQL_ParceiroCategoria_CREATE, (err) => {
			
			if (err) {
				// Possivelmente a tabela já foi criada
			} else {
				console.log('TabelaParceiroCategoria criada com sucesso.')
			}
		})
	}
})

export default database