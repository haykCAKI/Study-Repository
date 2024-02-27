try{
    let num = parseInt(prompt('Informe um número: '))
    if(isNaN(num)){
        throw Error('Is not a number')
    }
    let quadrado = num * num;
    console.log(quadrado)
}catch (err){
    console.log(err.message)
}finally{
    console.log('Bloco Finally foi acionado ')
}