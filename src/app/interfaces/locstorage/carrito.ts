import { ProductoInterface } from 'src/app/interfaces/productos/producto-interface';


export interface Carrito {
    "quantity": number,
    "product": ProductoInterface,
    "subtotal": number
}
