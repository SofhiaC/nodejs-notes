//essa é uma stream que lê dados 

import { Readable, Writable } from 'node:stream'

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

class MultiplyByTenStream extends Writable{
    _write(chunck, encoding, callback){ //método write obrigatório em streams de escrita 
    
    }
} 
new OneToHundredStream()
.pipe(process.stdout)