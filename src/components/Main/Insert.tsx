import { useState,useEffect } from 'react';
import Swal from 'sweetalert2';
import { Item } from '../../models/Item';
import { url } from '../utilities/url';
import { useParams } from 'react-router-dom';



const initialState:Item={
    _id:'',
    color:'',
    gas:'',
    price:0,
    year:0,
    description:'',
    name:''
}
export const Insert = () => {
  
  const insertar=url+'items/';
  const {id}=useParams();
  const [item, setitem] = useState<Item>(initialState);
  useEffect(() => {
    if(id!==undefined){
      getItem();
    }
  })
  console.log(id);
 
  
  const getItem=async()=>{
    const respuesta=await fetch(insertar+'/'+id);
    const data=await respuesta.json();
    setitem(data);
  }
 
  
  const {color,gas,price,year,description,name}=item;
  const handleInput=(e:
    React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
       setitem({...item,[e.target.name]:e.target.value})
  }
  const reset=()=>{
    setitem(initialState);
  }
  const handleSubmit=(e: React.SyntheticEvent)=>{
    e.preventDefault();
    fetch(insertar,{method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({color,gas,price,year,description,name})
   }).then(resp=>{
       console.log(resp);
       Swal.fire(
           'Se inserto el item',
           name+" "+color,
           'success'
       )
       reset();
      }).catch(e=>{
        console.log(e);
      })    
   
  }
  const handleEdit=(e: React.SyntheticEvent)=>{
    e.preventDefault();
    console.log('editar');
    console.log(JSON.stringify(item));
    
    fetch(insertar+id,{method:"PUT",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(item)
   }).then(resp=>{
       console.log(resp);
       Swal.fire(
           'Se edito el item',
           name+" "+color,
           'success'
       )
       reset();
      }).catch(e=>{
        console.log(e);
      })    
   
  }
  
  return (
    <div>
    <form className="justify-content-center" >
        <div className="mb-3">
            <label htmlFor="color"
            className="form-label">Color </label>
            <input type="text"
            id="color"
            name="color"
            placeholder="Color del carro"
            value={color}
            onChange={handleInput}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="gas"
            className="form-label">Tipo </label>
            <input type="text"
            id="gas"
            name="gas"
            value={gas}
            placeholder="electrico/combustión"
            onChange={handleInput}
            />
            
        </div>
        <div className="mb-3">
            <label htmlFor="price"
            className="form-label">Precio </label>
            <input type="number"
            id="price"
            name="price"
            value={price}
            placeholder="precio"
            onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description"
            className="form-label">Descripción </label>
            <textarea
            id="description"
            name="description"
            value={description}
            placeholder="electrico/combustión"
            onChange={handleInput}
            />
            
        </div>
        <div className="mb-3">
            <label htmlFor="name"
            className="form-label">Nombre </label>
            <input type="text"
            id="name"
            name="name"
            value={name}
            placeholder="electrico/combustión"
            onChange={handleInput}
            />
            
        </div>
        <div className="mb-3">
            <label htmlFor="year"
            className="form-label">Año </label>
            <input type="number"
            id="year"
            name="year"
            value={year}
            placeholder="electrico/combustión"
            onChange={handleInput}
            />
            
        </div>
        <div className="mb-3">
        {id && <button
            type="submit"
            className="btn btn-primary"
            onClick={handleEdit}>Editar</button>}
        {!id && <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}>Guardar</button>}    
        </div>
    </form>
</div>
  )
}
