import { useState } from 'react';
import Swal from 'sweetalert2';
import { Item } from '../../models/Item';
import { url } from '../utilities/url';



const initialState:Item={
    color:'',
    gas:'',
    price:0,
    year:0,
    description:'',
    name:''
}
export const Insert = () => {
  const insertar:string=url+'items';
  
  const [item, setitem] = useState<Item>(initialState);
  const {color,gas,price,year,description,name}=item;
  const handleInput=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
       setitem({...item,[e.target.name]:e.target.value})
  }
  const reset=()=>{
    setitem(initialState);
  }
  const handleSubmit=(e: React.SyntheticEvent)=>{
    e.preventDefault();
    console.log(JSON.stringify(item));
    
    fetch(insertar,{method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(item)
   }).then(resp=>{
       console.log(resp);
       Swal.fire(
           'Se inserto el estudiante',
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
    <form className="justify-content-center" onSubmit={handleSubmit}>
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
            
            <button
            type="submit"
            className="btn btn-primary"
            >Guardar</button>
        </div>
    </form>
</div>
  )
}
