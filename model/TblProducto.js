import { Entity } from "../model/core/Entity";

import { TblCategoria } from "./TblCategoria";
import { TblMarca } from "./TblMarca";

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
     Estado_Producto = "true"
     codigo_Marca = 2;

     TblCategoria = {
        val: [],
        get: async ()=> {
            if (this.codigo_Categoria != "") {
                const categoria = new TblCategoria();

                return await categoria.GetByProps("codigo_Categoria", this.codigo_Categoria);
            }else{
                return this.TblCategoria.val;
            }            
        }, set(newValue) {
            this.TblCategoria.val = newValue;
        }
    }

    TblMarca = {
        val: [],
        get: async ()=> {
            if (this.codigo_Marca != "") {
                const marca = new TblMarca();

                return await marca.GetByProps("codigo_MarcaProducto", this.codigo_Marca);
            }else{
                return this.TblMarca.val;
            }            
        }, set(newValue) {
            this.TblMarca.val = newValue;
        }
    }

}

export { TblProductos }