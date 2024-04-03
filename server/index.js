const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();



app.use(cors());
app.use(express.json());



const port = process.env.PORT || 3001;
const localhostURL = `http://localhost:${port}`;



mongoose.connect('mongodb+srv://kiruppas:vNWlHPinUFUmS6z9@cluster0.cnw2syv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
{ useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("MongoDB is connected"));



const AskQuestionSchema = new mongoose.Schema({
  QuesTitle: String,
  QuesDescription: String,
  QuesExpectAns: String,
  QuesCode: String,
  QuesTags: String,
  answers: [{ text: String }],
  votes: { type: Number, default: 0 }
});

const AskQuestion = mongoose.model('AskQuestion', AskQuestionSchema);





// Route to insert a question
app.post('/insertques', async (req, res) => {
  const askQuestion = new AskQuestion({
    QuesTitle: req.body.QuesTitle,
    QuesDescription: req.body.QuesDescription,
    QuesExpectAns: req.body.QuesExpectAns,
    QuesCode: req.body.QuesCode,
    QuesTags: req.body.QuesTags,
  });

  try {
    const newAskQuestion = await askQuestion.save();
    res.status(201).json(newAskQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});





// Route to retrieve all questions
app.get('/retrieveques', async (req, res) => {
  try {
    const retrieveques = await AskQuestion.find();
    res.json(retrieveques);
  } catch (error) {
    res.status(500).send({ message: "An error occurred while fetching the questions", error: error.message });
  }
});





// Route to get a specific question by ID
app.get('/questiondetails/:id', async (req, res) => {
  try {
    const quesId = req.params.id;
    const question = await AskQuestion.findById(quesId);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json(question);
  } catch (error) {
    res.status(500).send({ message: "An error occurred while fetching the question details", error: error.message });
  }
});





// Route to post an answer to a question
app.post('/questions/:id/answers', async (req, res) => {
  try {
    const question = await AskQuestion.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    const { text } = req.body;
    question.answers.push({ text });
    await question.save();
    res.status(201).json({ message: 'Answer added successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server port is running on: ${port}`);
  console.log(`Server URL: ${localhostURL}`);
});
