var express     = require('express');
var bodyParser  = require('body-parser');
const user      = require('./src/router/user');
const admin     = require('./src/router/admin');
const truck     = require('./src/router/truck');
const profile = require('./src/router/getprofile')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res) => {
    res.send('Food Truck');
})

app.use('/profile', express.static('F:\\GITHUB\\refinah\\Food-Truck-Finder\\src\\uploads\\profile\\'))
app.use('/truck_proof', express.static('F:\\GITHUB\\refinah\\Food-Truck-Finder\\src\\uploads\\truck_proof\\'))
app.use('/truck_logo', express.static('F:\\GITHUB\\refinah\\Food-Truck-Finder\\src\\uploads\\truck_logo\\'))
app.use('/menu_image', express.static('F:\\GITHUB\\refinah\\Food-Truck-Finder\\src\\uploads\\main_menu_image\\'))
app.use('/food_image', express.static('F:\\GITHUB\\refinah\\Food-Truck-Finder\\src\\uploads\\food_images\\'))

app.use('/user', user);
app.use('/admin', admin);
app.use('/truck', truck);
app.use('/get_profile',profile)

app.listen(3000, () => {
    console.log('Running on port 3000..');
});
