import { Link } from "react-router-dom"
import { Navigate } from "react-router-dom"
import Swal from "sweetalert2"
import { Item } from "../../models/Item"
import { url } from "../utilities/url"
interface Childer{
    item:Item
}
export const Car = ({item}:Childer) => {
  const borrar=async(id:string)=>{
    const delete1=url+'items/'+id;
    
    Swal.fire({
        title: 'Estas seguro',
        text: "No puedes desahcer esto",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(delete1,{method:"Delete",
          headers:{'Content-Type':'application/json'}
        }).then(
            response=>{
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                  console.log(response);
                  
                  {
                    return (<Navigate to="/home" replace={true} />)
                  }
                 
            }
        ).catch(err => console.log(err))
          
        }
      })
  }
  return (
    <>
    <div className="card">
    <img width="180px"
    src="https://assets.bridgestonetire.com/content/dam/consumer/bst/la/co/tips/2022/tecnologia-de-llantas/deportivo.jpg"  
    alt={item.description} />
    <div className="card-body">
        <h2 className="card-title">{ item.name}</h2>
        <h4 className="card-title">{ item.price}</h4>
        <h4 className="card-title">Modelo: { item.year}</h4>
        <p className="card-text">{item.description} </p>
        <Link to={'/editar/'+item._id} className="btn btn-primary">Editar</Link>
        <button onClick={()=>borrar(item._id)} 
        className="btn btn-danger">Borrar</button>
    </div>
    </div>
    </>
  )
}
