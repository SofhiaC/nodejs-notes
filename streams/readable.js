//não é possível ler formatos primitivos na stream, então deve se trabalhar com o formato buffer, e o buffer não aceita números
//essa é uma stream de escrita, processa dados e não lê

import { Readable } from 'node:stream'
import { buffer } from 'node:stream/consumers'

class OneToHundredStream extends Readable { 
    index = 1
    _read() { //toda stream tem obrigatóriamente o método read, stream de leitura
        const i = this.index++

        setTimeout( () => {
            if (i > 100){
                this.push(null) //push é o método pra stream fornecer as informações pra quem tá consumindo ela, null diz que não há nada pra ser enviado dessa stream
            } else {
                const buf = Buffer.from(String(i))
                this.push(buf)
            }
        }, 1000) 
    }
}

new OneToHundredStream()
    .pipe(process.stdout)

//é possível trabalhar com arquivos grandes, ler eles e mostrar como simualdo mas isso poderiam ser arquivos reais
//OU SEJA, trabalhar com dados mesmo que eles estejam incompletos 

