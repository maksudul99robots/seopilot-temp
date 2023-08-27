"use client"

import { useRouter } from "next/router"

const VerifyEmail = ()=>{
    const router = useRouter();
    const { token } = router.query;

    console.log("token:", router.query)
    return(
        <>
            test
        </>
    )
}

export default VerifyEmail;