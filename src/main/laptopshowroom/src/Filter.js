import { useState } from "react"
import { onSubmitShortList } from "./Bridge"
import { Results } from "./Result"

export const Filter=()=>{

    const[result,setResult]=useState(false)
    const[tmpresult,setTmpresult]=useState([])

    const[short,setShort]=useState({
        "brand":"",
        "size":0.0,
        "model":""
    })

    const collect=(eve)=>{
        const{name,value}=eve.target
        setShort((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const doFilter=async()=>{
        const t = await onSubmitShortList(short)
        if(t.data){
            if(t.data!="err"){
               setResult(true)
                setTmpresult(t.data)
            }
            else{
                alert(t.data)
               setResult(false)
            }
        }
        else{
           setResult(false)
        }
    }

    return(
        <>
            {
                (result)?
                <>
                    <Results show={tmpresult} />
                </>:
                <>
                    <div className="container mt-4">
                        <h1 className="text-center display-4 text-danger">ShortList</h1>
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8 col-sm-12 p-3 shadow rounded-2"  style={{backgroundColor:'lightgreen'}}>
                                <div className="form group">
                                    <label>Filter By model</label>
                                    <input onChange={collect} value={short.model} type="text" name="model" placeholder="Model to filter" className="form-control" />
                                </div>
                                <h1 className="text-center display-5">OR</h1>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <label>Brand Name</label>
                                        <input onChange={collect} value={short.brand} type="text" name="brand" placeholder="Brand to filter" className="form-control" />
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <label>Size of laptop</label>
                                        <input onChange={collect} value={short.size} type="text" name="size" placeholder="Size to filter" className="form-control" />
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-3">
                                    <button className="btn btn-outline-info col-1" onClick={doFilter}>
                                    <i class="bi bi-funnel-fill"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}