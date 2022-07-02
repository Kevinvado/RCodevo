import { Entity } from "./core/Entity";

class TblCompra extends Entity {
    constructor(obj = {}) {
        super();
        for (const prop in obj) {
            this[prop] = obj[prop];
        }
    }
    
    ApiMethods = {
        Get: "TblCompra",
    }

    codigo_Compra = 1
    codigo_proveedor = 3
    codigo_Empleado = 2
    Descuento = "5.0000"
    Fecha_Compra = "2021-08-27T00:00:00"
    Total = "3600.0000"
    Iva_Compra = "15.0000"
    Estado_Compra = "true"

}

export { TblCompra }