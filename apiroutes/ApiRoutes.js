const url = 'https://damp-reef-82590.herokuapp.com/';

//-----------Endpoints-----------------------------

//GET de favoritos, ya sea receta o producto.
export const allFavourites = async (data) =>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    try {
        const response = await fetch(url+'favorito/id/'+data,options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

//GET de historial, ya sea receta o producto.
export const history = async (data) =>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    try {
        const response = await fetch(url+'historial/id/'+data,options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

//GET de datos de perfil segun ID.
export const profile = async (data) =>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    try {
        const response = await fetch(url+'perfil/id/'+data,options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

//GET de todos los platos.
export const platos = async () =>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    try {
        const response = await fetch(url+'platos',options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}


//GET de un plato segun su id.
export const plato = async (data) =>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    try {
        const response = await fetch(url+'plato/id/'+data,options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

//GET de todos los productos.
export const productos = async () =>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    try {
        const response = await fetch(url+'productos',options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

export const producto = async (data) =>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    try {
        const response = await fetch(url+'producto/id/'+data,options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}


export const dummyCheckin = async()=>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    try {
        const response = await fetch(url+'Checking',options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}


export const searchPlatos = async(data)=>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    try {
        const response = await fetch(url+'SearchPlatos/name/'+data.name+'/c/'+data.c+'/d/'+data.d+'/o/'+data.o,options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

export const searchProductos = async(data)=>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    try {
        const response = await fetch(url+'SearchProductos/name/'+data.name+'/c/'+data.c+'/d/'+data.d+'/o/'+data.o,options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}
