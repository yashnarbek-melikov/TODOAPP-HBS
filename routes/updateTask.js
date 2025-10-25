const { Router } = require('express');
const router = Router();

const { tasks } = require('./addTask');

router.get('/task/:id/edit', (req, res) => {
   const task = tasks[req.params.id - 1];
   res.render('handlebars/edit-task', {
      title: `Taskni yangilash`,
      task,
   });
});

router.post('/task/:id/update', (req, res) => {
   const task = {
      id: req.params.id,
      title: req.body.title,
      body: req.body.body,
      status: req.body.status,
   };
   tasks[parseInt(req.params.id.split(':')[1]) - 1] = task;
   res.redirect('/');
});

router.post('/task/:id/delete', (req, res) => {
   const task = {
      id: req.params.id,
      title: req.body.title,
      body: req.body.body,
      status: req.body.status,
   };
   const filtered = tasks.filter(
      atask => atask.id.toString() !== task.id.toString()
   );
   tasks.length = 0;
   filtered.forEach((task, index) => {
      tasks.push({
         ...task,
         id: (parseInt(index) + 1).toString(),
      });
   });
   res.redirect('/');
});

exports.router = router;
