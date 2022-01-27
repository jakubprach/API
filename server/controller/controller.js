var Userdb = require('../model/model');

exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({ message : "Brak danych"});
        return;
    }

    const user = new Userdb({
        name : req.body.name,
        email : req.body.email,
        gender: req.body.gender,
        status : req.body.status
    })

    user
        .save(user)
        .then(data => {
            res.redirect('/');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Error podczas tworzenia użytkownika"
            });
        });

}

exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Nie znaleziono użytkownika o id: "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error podczas znajdowania użytkownika o id " + id})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error podczas zbierania informacji o wszystkich użytkownikach" })
            })
    }

    
}

exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Brak danych"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Nie można edytować użytkownika o id ${id}`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error podczas edycji użytkownika"})
        })
}

exports.delete = (req, res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Error podczas usuwania użytkownika o id ${id}`})
            }else{
                res.send({
                    message : "Użytkownik pomyślnie usunięty!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Error podczas usuwania użytkownika o id" + id
            });
        });
}

exports.findemployee = (req, res) =>{
    Userdb.find({status: 'Pracownik'})
    .then(user => {
        res.send(user)
    })
    .catch(err => {
        res.status(500).send({ message : err.message || "Error podczas zbierania informacji o wszystkich pracownikach" })
    })
}

exports.findclient = (req, res) =>{
    Userdb.find({status: 'Klient'})
    .then(user => {
        res.send(user)
    })
    .catch(err => {
        res.status(500).send({ message : err.message || "Error podczas zbierania informacji o wszystkich klientach" })
    })
}