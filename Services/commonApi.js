import axios from "axios"

const commonApi=async(reqmethod,apiurl,body)=>{
    const reqConfig={
        method:reqmethod,
        url:apiurl,
        data:body,
        headers:{'content-Type':'application/json'}



    }
    return await axios(reqConfig).then(res=>{
        return res

    }).catch(err=>{
        return err
    })
}

export default commonApi