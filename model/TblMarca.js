import { Entity } from "../model/core/Entity";

class TblMarca extends Entity {
    
    constructor(props) {
        super();
        for (const prop in props) {
            this[prop] = props[prop];
        }
    }

    
    ApiMethods = {
        Get: "TblMarca",
    }
    
    codigo_MarcaProducto = 1;
    Nombre_Marca = "TOYOTA";
    Estado_Marca = "true";

}

export { TblMarca }