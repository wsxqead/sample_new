const Koa    = require("koa");
const Router = require("koa-router");
const app    = new Koa();
const router = new Router();
const Person = require('./Person');

router.get('/', async ctx => {

    ctx.body = `<h1>Root page</h1>
  
                <br>
  
                <p>Todolist - Root page</p>`;

});

router.get('/login', async ctx => {

    ctx.body = `<h1>Login page</h1>
  
                <br>
  
                <p>Todolist - Login page</p>`;
    
});
  
  
router.get('/about', async ctx => {
    
    ctx.body = `<h1>About page</h1>
  
                <br>
  
                <p>Todolist - About page</p>`;
  
});
  

router.get('/todolist', async ctx => {
  
    ctx.body = `<h1>Todolist page</h1>
  
                <br>
  
                <p>Todolist - Todolist page</p>`;
  
  
});
  
  
router.get('/register', async ctx => {
  
    ctx.body = `<h1>Register page</h1>
  
                <br>
  
                <p>Todolist - Register page</p>`;
  
});  

router.get('/persons', async ctx => {
  
    ctx.body = `<h1>Persons page</h1>
  
                <br>
  
                <p>Todolist - Persons page</p>`;
  
});  

router.get('/persons/:id', async ctx => {
    
    Person.query().findById(ctx.params.id).then((a) => {
        console.log(a);
    })

    ctx.body = `<h1>Persons page</h1>
  
                <br>
  
                <p>Todolist - Persons page</p>`;
  
}); 

app.use(router.routes());

app.use(router.allowedMethods());

app.on('error', error => {

    console.error(error);

});
  
app.listen(3000);