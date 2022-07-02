import { Entity } from "./core/Entity";
import { TblProductos } from "./TblProducto";

class TblDetalleCompra extends Entity {
    constructor(obj = {}) {
        super();
        for (const prop in obj) {
            this[prop] = obj[prop];
        }
    }
    
    ApiMethods = {
        Get: "TblDetalleCompra",
    }

    codigo_DetalleCompra = 1;
    codigo_Compra = 1;
    codigo_Producto = 1;
    Precio_Compra = "0";
    Cantidad = "1";
    Sub_Total = "0";
    Estado_DetalleCompra = "true";

    TblCompra = {
        val: [],
        get: async ()=> {
            if (this.codigo_Compra != "") {
                const compra = new TblCompra();

                return await compra.GetByProps("codigo_Compra", this.codigo_Compra);
            }else{
                return this.TblCompra.val;
            }            
        }, set(newValue) {
            this.TblCompra.val = newValue;
        }
    }

    TblProducto = {
        val: [],
        get: async ()=> {
            if (this.codigo_Producto != "") {
                const producto = new TblProductos();

                return await producto.GetByProps("codigo_Producto", this.codigo_Producto);
            }else{
                return this.TblProducto.val;
            }            
        }, set(newValue) {
            this.TblProducto.val = newValue;
        }
    }

}

export { TblDetalleCompra }