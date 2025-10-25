const { Router } = require('express');
const router = Router();

let tasks = [
   {
      id: '1',
      title: `Harry Potter ko'rish`,
      body: `Bu kinoni ko'rishni anchadan beri xohlab yurgandim o'zi.`,
      status: 'tugallangan',
   },
   {
      id: '2',
      title: `Shaxmat o'ynash`,
      body: 'Kuzning noyabr oyi kelgandan shaxmatga borish',
      status: 'kutilmoqda',
   },
];

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

exports.router = router;
exports.tasks = tasks;
