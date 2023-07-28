import { pool as db } from '../../database/index.js'

// TODO: add try catch constructions
export class TasksController {
    async getTasks(req, res) {

        const page = req.query.page
        const limit = req.query.limit
        
        const offset = limit * (page - 1)



        const response = await db.query('SELECT * FROM tasks ORDER BY id DESC LIMIT ($1) OFFSET ($2)', [limit, offset])

        const tasksCount = (await db.query('SELECT COUNT(*) FROM tasks')).rows[0].count

        const tasks = response.rows 

        const pagesCount = Math.ceil(tasksCount / limit)

        res.status(200).json({
            tasks,
            pagesCount
        })
    }
    async createTask(req, res) {
        const {text} = req.body

        // TODO: change this query
        const response = await db.query('INSERT INTO tasks (text) VALUES ($1) RETURNING *', [text])

        const task = response.rows[0]

        res.status(200).json(task)
    }
    async toggleTask(req, res) {
        const id = req.params.id

        const response = await db.query('UPDATE tasks SET completed = NOT completed WHERE id = $1 RETURNING *', [id])

        const task = response.rows[0]

        res.status(200).json(task)
    }
    async editTask(req, res) {
        const id = req.params.id
        const {text} = req.body

        const task = await db.query('UPDATE tasks SET text = $1 WHERE id = $2 RETURNING *', [text, id])

        res.status(200).json(task)
    }
    async deleteTask(req, res) {
        const id = req.params.id
        
        const task = await db.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id])

        res.status(200).json(task)
    }
}