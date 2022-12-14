import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { onSubmitRead, onSubmitUpdate } from "./Bridge"

export const Update=()=>{

    const {primary}=useParams()

    const[pack,setPack]=useState({})
    
    const onRead=async()=>{
       const tmp=await onSubmitRead(primary)
       setPack(tmp.data)
    }

    useEffect(()=>{
        onRead()
    },[])

    const gather=(eve)=>{
        const{name,value}=eve.target
        setPack((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }


    const onUpdate=async()=>{
        const tmp=await onSubmitUpdate(pack)
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
        <div className="container mt-5">
                <h1 className="text-center text-primary">Update stock details</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 col-sm-12 shadow p-4" style={{backgroundColor:'lightgreen',borderRadius:'20px'}}>
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
                                <input value={pack.size} onChange={gather} type="text" name="size" placeholder="Model size" className="form-control" />
                            </div>
                        </div>
                        
                        <div className="row mt-3 justify-content-around">
                            <button className="btn btn-outline-light col-1" onClick={onUpdate}>
                                <i class="bi bi-chevron-double-up"></i>
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