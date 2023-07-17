import { Router } from 'express';
import { getProductos, postProductos, putProductos, deleteProductos, getPedidos, postPedidos, 
  getClientes, postClientes, putClientes, deleteClientes, putPedidos, deletePedidos, getPedidosProductos, 
  postPedidosProductos, putPedidosProductos, deletePedidosProductos, getProducto } from '../Controllers/controller.js';


const router = Router();

//Definir Rutas
router.get("/",(req, res)=> {
  res.send("GET Pagina Principal Express")
});

//PRODUCTOS----------------------------------------------------
router.get("/productos", getProductos);
router.post("/productos",postProductos);
router.put("/productos/:idProducto",putProductos);
router.delete("/productos/:idProducto", deleteProductos);

//CLIENTES----------------------------------------------------
router.get("/clientes", getClientes);
router.post("/clientes",postClientes);
router.put("/clientes/:idCliente", putClientes);
router.delete("/clientes/:idCliente",deleteClientes);

//PEDIDOS----------------------------------------------------
router.get("/pedidos", getPedidos);
router.post("/pedidos",postPedidos)
router.put("/pedidos/:idPedido", putPedidos);
router.delete("/pedidos/:idPedido",deletePedidos);

//PEDIDOS - PRODUCTOS----------------------------------------------------
router.get("/pedido_producto", getPedidosProductos);
router.post("/pedido_producto",postPedidosProductos)
router.put("/pedido_producto/:idPedPro", putPedidosProductos);
router.delete("/pedido_producto/:idPedPro",deletePedidosProductos);

//----------------------------------------------------------------------
router.get("/productos/:idProducto", getProducto);

export default router;

