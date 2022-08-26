import { useState } from "react"
import { onSubmitCreate } from "./Bridge"

export const Create=()=>{

    const[pack,setPack]=useState({
        "model":"",
        "brand":"",
        "cost":0,
        "size":0.0
    })

    const gather=(eve)=>{
        const{name,value}=eve.target
        setPack((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const onAdd=async()=>{
        const tmp = await onSubmitCreate(pack)
        alert(JSON.stringify(tmp.data))
    }

    const onCancel=()=>{
        setPack(()=>{
            return{
                "model":"",
                "brand":"",
                "cost":0,
                "size":0.0
            }
        })
    }

    return(
        <>
            <div className="container mt-5" style={{backgroundColor:'beige'}}>
                <h1 className="text-center text-primary">Add new stock</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 col-sm-12 shadow p-4" style={{backgroundColor:'lightblue',borderRadius:'20px'}}>
                        <div className="row">
                            <label>Laptop Model</label>
                            <input value={pack.model} onChange={gather} type="text" name="model" placeholder="Model Name" className="form-control" />
                        </div>
                        <div className="row">
                            <label>Laptop Brand</label>
                            <input value={pack.brand} onChange={gather} type="text" name="brand" placeholder="Model Brand" className="form-control" />
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <label>Laptop Cost</label>
                                <input value={pack.cost} onChange={gather} type="text" name="cost" placeholder="Model Cost" className="form-control" />
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <label>Laptop Size</label>
                                <input value={pack.size} onChange={gather} type="text" name="size" placeholder="Model Inches" className="form-control" />
                            </div>
                        </div>
                        
                        <div className="row mt-3 justify-content-around">
                            <button className="btn btn-outline-light col-1" onClick={onAdd}>
                                <i class="bi bi-send-plus-fill"></i>
                            </button>
                            <button className="btn btn-outline-dark col-1" onClick={onCancel}>
                                <i class="bi bi-arrow-return-left"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
