import { Entity } from "../model/core/Entity";

class TblProveedor extends Entity {
    
    constructor(props) {
        super();
        for (const prop in props) {
            this[prop] = props[prop];
        }
    }

    ApiMethods = {
        Get: "TblProveedor",
    }
    
    codigo_Proveedor = 1;
    Nombre_Proveedor = "Marcos";
    Telefono_Proveedor = "88442331";
    Direccion_Proveedor = "managua";
    Email_Proveedor = "marco45@gmail.com";
    Estado_proveedor = "true";

}

export { TblProveedor }