const filmesCollection = require('../model/filmesSchema')


const getAll = (request, response) => {
    filmesCollection.find((error, filme)=>{
        if(error){
            return response.status(500).send(error)
        }else{
            return response.status(200).send(filme)
        }
    })

}

const postFilme = (request, response) => {
    const filmeNome = request.body.nome;
    const filmeAno = request.body.ano;
    const filme = new filmesCollection({nome: filmeNome, ano: filmeAno})
    filme.save((error) => {
        if(error){
            return response.status(400).send(error)
        }else{
            return response.status(201).send(filme)
        }
    })
}

const patchFilme = (request, response) =>{
    const id = request.params.id
    const filmeDoBody = request.body
    const options = {new:true}

    filmesCollection.findByIdAndUpdate(id,filmeDoBody,options,(error,filme) =>{
        if(error){
            return response.status(500).send(error)

        }else{
            if(filme){
                return response.status(200).send(filme)
            }else{
                return response.status(404).send('filme não encontrado')
            }
        }
    })

}
const deleteFilme = (request, response) =>{
    const id = request.params.id
    filmesCollection.findByIdAndRemove(id,(error, filme) =>{
        if(error){
            return response.status(500).send(error)
        }else if(filme){
            return response.status(200).send("Filme deletado" )
        }
        else{
            return response.sendStatus(404)
        }
    })
}


module.exports = {
    getAll,
    postFilme,
    patchFilme,
    deleteFilme
    
}