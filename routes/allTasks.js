const { Router } = require('express');
const router = Router();
const path = require('path');

const { tasks } = require('./addTask');

router.get('/', (req, res) => {
   res.render('handlebars/all-task', {
      title: 'Jami tasklar',
      tasks,
   });
});

exports.router = router;
