import express from 'express';
import pg from 'pg';

const app = express();
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    select *
    from "grades"
    `;
    const params = [];
    const result = await db.query(sql, params);
    const grade = result.rows;
    res.status(200).json(grade);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error has occurred' });
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
    }
    const sql = `
    select *
    from "grades"
    where "gradeId" = $1
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      res
        .status(404)
        .json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }
    res.json(grade);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const grade = req.body;
    const score = Number(grade.score);
    const sql = `insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *`;
    const params = [grade.name, grade.course, score];
    if (!grade.name || !grade.course || !grade.score) {
      res.status(400).json({ error: 'Missing name, course, and score' });
    }
    if (grade.score < 1 || grade.score > 100) {
      res.status(400).json({ error: 'Score must be between 1 and 100' });
    }
    const result = await db.query(sql, params);
    const retGrade = result.rows[0];
    res.status(201).json(retGrade);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error has occurred' });
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const grade = req.body;
    const score = Number(grade.score);
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
    }
    if (!grade.name || !grade.course || !grade.score) {
      res.status(400).json({ error: 'Missing name, course, and score' });
    }
    if (grade.score < 1 || grade.score > 100) {
      res.status(400).json({ error: 'Score must be between 1 and 100' });
    }
    const sql = `update "grades"
    set "name" = $1,
      "course" = $2,
      "score" = $3
      where "gradeId" = $4
      returning *`;
    const params = [grade.name, grade.course, score, gradeId];
    const result = await db.query(sql, params);
    const updatedGrade = result.rows[0];
    if (updatedGrade) {
      res.status(200).json({ updatedGrade });
    } else {
      res
        .status(404)
        .json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error has occurred' });
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!gradeId || !Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({ error: '"gradeId" is missing or invalid' });
    }
    const sql = `delete
    from "grades"
    where "gradeId" = $1
    returning *`;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const deletedGrade = result.rows[0];
    if (deletedGrade) {
      res.status(204);
    } else {
      res
        .status(404)
        .json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error has occurred' });
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080!');
});
