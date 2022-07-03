import { Entity } from "./core/Entity";
import { TblDetalleCompra } from "./TblDetalleCompra";
import { TblEmpleado } from "./TblEmpleado";
import { TblProveedor } from "./TblProveedor";

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

    codigo_Compra = 1;
    codigo_proveedor = 3;
    codigo_Empleado = 2;
    Descuento = "5.0000";
    Fecha_Compra = "2021-08-27T00:00:00";
    Total = "3600.0000";
    Iva_Compra = "15.0000";
    Estado_Compra = "true";

    TblProveedor = {
        val: [],
        get: async ()=> {
            if (this.codigo_proveedor != "") {
                const proveedor = new TblProveedor();

                return await proveedor.GetByProps("codigo_Proveedor", this.codigo_proveedor);
            }else{
                return this.TblProveedor.val;
            }            
        }, set(newValue) {
            this.TblProveedor.val = newValue;
        }
    }

    TblEmpleado = {
        val: [],
        get: async ()=> {
            if (this.codigo_Empleado != "") {
                const empleado = new TblEmpleado();

                return await empleado.GetByProps("codigo_Empleado", this.codigo_Empleado);
            }else{
                return this.TblEmpleado.val;
            }            
        }, set(newValue) {
            this.TblEmpleado.val = newValue;
        }
    }

    TblDetalleCompra = {
        val: [],
        get: async ()=> {
            if (this.codigo_Compra != "") {
                const detalle_compra = new TblDetalleCompra();

                return await detalle_compra.GetByProps("codigo_Compra", this.codigo_Compra);
            }else{
                return this.TblDetalleCompra.val;
            }            
        }, set(newValue) {
            this.TblDetalleCompra.val = newValue;
        }
    }

}

export { TblCompra }