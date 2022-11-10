import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} -Mountain Adventure`;
    },[title])
}

export default useTitle;