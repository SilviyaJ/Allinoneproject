import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { onSubmitDelete, onSubmitList } from "./Bridge"

export const List=()=>{

    const navi=useNavigate()

    const[stocks,setStocks]=useState([])

    const onList=async()=>{
        const tmp=await onSubmitList()
        setStocks(tmp.data)

    }
    useEffect(()=>{
        onList()
    },[])
    
    return(
        <>
        <div className="container mt-5">
            <h1 className="text-danger text-center display-5">Available Stock</h1>
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-10 col-sm-12 p-3 shadow rounded-3"  style={{backgroundColor:'lightgreen'}}>
                    <div className="table-responsive">
                        <table className="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th>Stock Id</th>
                                    <th>Stock Brand</th>
                                    <th>Stock Model</th>
                                    <th>Stock Cost</th>
                                    <th>Stock Size</th>
                                    <th>Stock actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                 stocks.map((obj,pos)=>(
                                   <tr>
                                    <td><a className="btn btn-outline-info" href={`/#/open/${obj.lapID}`}>
                                        {obj.lapID}
                                        
                                        </a></td>
                                    <td>{obj.brand}</td>
                                    <td>{obj.model}</td>
                                    <td>{obj.cost}</td>
                                    <td>{obj.size}</td>
                                    <td>
                                    <a className="btn btn-outline-warning" href={`/#/modify/${obj.lapID}`}>
                                    <i class="bi bi-box-arrow-up-right"></i>Edit
                                    </a>
                                    <button className="btn btn-outline-danger ms-4" onClick={async()=>{
                                                        const tmp = await onSubmitDelete(obj.lapID)
                                                        alert(tmp.data)
                                                        navi("/view")
                                                    }}>
                                                        <i class="bi bi-eraser"></i>Delete
                                                    </button>
                                    </td>                      

                                   </tr> 
                                 ))
                                }
                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
        </>
    )
}

