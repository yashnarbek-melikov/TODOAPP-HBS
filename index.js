const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

app.engine(
   '.hbs',
   engine({
      extname: '.hbs',
      helpers: {
         eq: (a, b, options) =>
            a === b ? options.fn(this) : options.inverse(this),
      },
   })
);
app.set('view engine', '.hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const allTasksRoutes = require('./routes/allTasks');
const addTaskRoutes = require('./routes/addTask');
const updateTaskRoutes = require('./routes/updateTask');

app.use(allTasksRoutes.router);
app.use(addTaskRoutes.router);
app.use(updateTaskRoutes.router);

// app.use((req, res, next) => {
//    res.status(404).render('404', { title: 'Page not found' });
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
   console.log('Server shu PORT da ishga tushdi: ', PORT);
});
