


const Ticket = require('./ticket');


class Ticketist {

    constructor(){
        this.ultimoNumero = 0;

        this.pendientes = [];
        this.asignados = [];
    }

    get siguienteNumero(){
        this.ultimoNumero ++;
        return this.ultimoNumero;
    }

    // Retornar ultimos 13 Tickets
    get ultimos13(){
        return this.asignados.slice(0,13);
    }

    crearTicket(){
        const nuevoTicket = new Ticket( this.siguienteNumero );
        this.pendientes.push(nuevoTicket);
        return nuevoTicket;
    }

    asignarTicket(agente, escritorio){

        if(this.pendientes.length === 0) return null;

        // Optiene el primer item del arreglo
        const siguienteTicket = this.pendientes.shift();

        siguienteTicket.agente = agente;
        siguienteTicket.escritorio = escritorio;

        this.asignados.unshift( siguienteTicket );

        return siguienteTicket;
    }
}


module.exports = Ticketist;