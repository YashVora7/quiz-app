const quizModel = require('../models/quiz.model');

const addQuiz = async(req,res)=>{
    try {
        let {title,description,questions} = req.body
        let quiz = new quizModel({
            title,
            description,
            questions
        })
        await quiz.save()
        res.send(quiz)
    } catch (error) {
        res.send(error.message)
    }
}

const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await quizModel.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching quizzes', error });
  }
};

const getQuizById = async (req, res) => {
  try {
    const quiz = await quizModel.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching quiz', error });
  }
};

const submitQuiz = async (req, res) => {
  try {
    const { quizId, userAnswers } = req.body;
    const quiz = await quizModel.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (question.correctAnswer === userAnswers[index]) {
        score += 1;
        // score = score + 1
      }
    });

    res.status(200).json({ message: 'Quiz submitted', score });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting quiz', error });
  }
};

module.exports = {getAllQuizzes, getQuizById, submitQuiz, addQuiz}