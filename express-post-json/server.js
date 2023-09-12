import express from 'express';
const app = express();
let nextId = 1;
const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const retArray = [];
  for (const student in grades) {
    retArray.push(grades[student]);
  }
  res.json(retArray);
});

app.post('/api/grades', (req, res) => {
  const grade = req.body;
  grade.id = nextId;
  grades[nextId] = grade;
  nextId++;
  res.status(201).send(grade);
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
