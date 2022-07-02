import { Entity } from "../model/core/Entity";

class TblEmpleado extends Entity {
    
    constructor(props) {
        super();
        for (const prop in props) {
            this[prop] = props[prop];
        }
    }
    
    ApiMethods = {
        Get: "TblEmpleados",
    }

    codigo_Empleado = 1;
    Nombre_Empleado = "Kevin";
    Direccion_Empleado = "k62 carretera a la boquita";
    Telefono_Empleado = "57162050";
    Email_Empleado = "kevinvado2000@gmail.com";
    Password_Empleado = "16082000";

}

export { TblEmpleado }