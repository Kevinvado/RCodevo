import { Entity } from "../model/core/Entity.js";

class TblProductos extends Entity {
    
    constructor(props) {
        super();
        for (const prop in props) {
            this[prop] = props[prop];
        }
    }

    ApiMethods = {
        Get: "TblProducto",
    }
    
     codigo_Producto = 2
     codigo_Categoria = 6
     Nombre_producto = "Capo"
     Estado_Producto = true
     codigo_Marca = 2

}

export { TblProductos }