const {Router} = require("express")
const quizRouter = Router()
const { getAllQuizzes, getQuizById, submitQuiz, addQuiz } = require("../controllers/quiz.controller");

quizRouter.post("/add",addQuiz)
quizRouter.get('/quizzes', getAllQuizzes);
quizRouter.get('/quizzes/:id', getQuizById);
quizRouter.post('/quizzes/submit', submitQuiz);

module.exports = quizRouter