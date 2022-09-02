import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { onSubmitDelete, onSubmitList } from "./Bridge"

export const Results=(prop)=>{

    const navi=useNavigate()

    const[stocks,setStocks]=useState(prop.show)

    return(
        <>
            <div className="container mt-5">
                <h1 className="text-danger text-center display-5">Available Stock</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 col-sm-12 p-3 shadow rounded-3" >
                        {
                            (typeof(stocks[0])==="string")?
                            <>
                                <div className="d-flex flex-row flex-nowrap overflow-auto">
                                    {
                                        stocks.map((str)=>(
                                            <div className="card p-5 shadow rounded-5">
                                                <h1 className="card-title display-4">{str}</h1>
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
                            :
                            <>
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
                                                        <td>
                                                            <a className="btn btn-info" href={`/#/open/${obj.lapID}`}>
                                                                {obj.lapID}
                                                            </a>
                                                        </td>
                                                        <td>{obj.model}</td>
                                                        <td>{obj.brand}</td>
                                                        <td>{obj.size}</td>
                                                        <td>{obj.cost}</td>
                                                        <td>
                                                            <a className="btn btn-outline-warning" href={`/#/modify/${obj.lapID}`}>
                                                                <i class="bi bi-box-arrow-up-right"></i>
                                                            </a>
                                                            <button className="btn btn-outline-danger" onClick={async()=>{
                                                                const tmp = await onSubmitDelete(obj.lapID)
                                                                alert(tmp.data)
                                                                navi("/#/view")
                                                            }}>
                                                                <i class="bi bi-eraser"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}