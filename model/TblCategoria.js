import { Entity } from "../model/core/Entity";

class TblCategoria extends Entity {
    
    constructor(props) {
        super();
        for (const prop in props) {
            this[prop] = props[prop];
        }
    }

    ApiMethods = {
        Get: "TblCategoria",
    }
    
    codigo_Categoria = 1;
    Nombre_Categoria = "Sistema Electrico";
    Descripcion = "Faros, direccionales, alternadores, arrancadores, focos";
    Estado_Categoria = true;

}

export { TblCategoria }