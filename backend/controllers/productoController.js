const Producto = require("../models/Producto");



exports.crearProducto = async (req, res) => {
    
    try {
        console.log(req.body)
        // Creamos nuestro producto
        let producto = new Producto(req.body);

        await producto.save();
        res.send(producto);



    } catch (err) {
        console.log(err)
        res.status(500).send('Hubo un error')
    }

}

exports.obtenerProductos = async (req, res) => {

    try{

        const productos = await Producto.find();
        res.json(productos)


    } catch(err){
        console.log(err)
        res.status(500).send('Hubo un error')
    }

}

exports.actualizarProducto = async (req, res) => {

    try{

        const { productName, category, location, price } = req.body;
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({ msg: 'No existe el producto' })
        }

        producto.productName = productName;
        producto.category = category;
        producto.location = location;
        producto.price = price;

        producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, { new: true });
        res.json(producto);


    }catch(err) {
        console.log(err)
        res.status(500).send('Hubo un error')
    }

}


exports.obtenerProducto = async (req, res) => {

    try{

        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({ msg: 'No existe el producto' })
        }

        res.json(producto);


    }catch(err) {
        console.log(err)
        res.status(500).send('Hubo un error')
    }

}


exports.eliminarProducto = async (req, res) => {

    try{

        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({ msg: 'No existe el producto' })
        }

        await Producto.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Producto eliminado con éxito' });

        res.json(producto);


    }catch(err) {
        console.log(err)
        res.status(500).send('Hubo un error')
    }

}