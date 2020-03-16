class Usuarios {

    constructor() {
        this.personas = [];
    }

    // Agregar una persona al chat
    agregarPersona(id, nombre, sala) {

        let persona = { id, nombre, sala }

        this.personas.push(persona);

        return this.personas;

    }

    // Obtener una persona por id
    getPersona(id) {
        let persona = this.personas.filter(persona => persona.id === id)[0];

        return persona;
    }

    // Obtener todas las personas
    getPersonas() {
        return this.personas;
    }

    // Obtener las personas de una sala
    getPersonasPorSala(sala)  {
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    // Eliminar una persona del arreglo (se desconectó, se fue...)
    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);

        this.personas = this.personas.filter(persona => persona.id != id);

        return personaBorrada;

    }

}



module.exports = {
    Usuarios
}