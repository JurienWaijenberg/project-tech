const express = ('express');
const { engine } = ('express-handlebars');
// const PORT = process.env.PORT || 1337;

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000);

// app.listen(PORT, () => {
//     console.log('Server running on port: ${PORT)')
// })