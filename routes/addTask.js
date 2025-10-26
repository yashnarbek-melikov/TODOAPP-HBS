const { Router } = require('express');
const router = Router();

let tasks = [];

router.get('/task/new', (req, res) => {
   res.render('handlebars/add-task', {
      title: `Yangi task qo'shish`,
   });
});

router.post('/task', (req, res) => {
   tasks.push({
      id: tasks ? tasks.length + 1 : 1,
      title: req.body.title,
      body: req.body.body,
      status: req.body.status,
   });
   res.redirect('/');
});

const filterTasks = id => {
   const index = tasks.findIndex(task => task.id.toString() === id.toString());
   tasks.splice(index, 1);
};

exports.router = router;
exports.tasks = tasks;
exports.filterTasks = filterTasks;
