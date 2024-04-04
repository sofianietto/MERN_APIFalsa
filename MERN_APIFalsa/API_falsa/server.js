const express = require("express");
const { faker } = require('@faker-js/faker')

const app = express();
const port = 8000;

class Usuario{
    constructor(){
        this.id = faker.string.uuid();
        this.name = faker.person.firstName();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        this.birthday = faker.date.past();
    };
};

class Empresa {
    constructor(){
        this.id = faker.string.uuid();
        this.name = faker.company.name();
        this.address = faker.location.street();
        this.city = faker.location.city();
        this.state = faker.location.state();
        this.zipCode = faker.location.zipCode();
        this.country = faker.location.country();
        
    };
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/user/new", (req, res) => {
    const newUser = new Usuario();
    console.log(newUser);
    res.json( {newUser: newUser} );
});

app.post("/api/company/new", (req, res) => {
    const newCompany = new Empresa();
    console.log(newCompany);
    res.json( {newCompany: newCompany} );
});

app.post("/api/user/company", (req, res) => {
    const newUser = new Usuario();
    const newCompany = new Empresa();
    res.json( {newUser, newCompany} );
});


app.listen(port, () => console.log(`Listening on port: ${port}`));
