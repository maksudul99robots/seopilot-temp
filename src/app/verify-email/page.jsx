'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { LoginRegistrationAPI } from "../services/API"
import { useEffect, useState } from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js';


const VerifyEmail = () => {
    const paramString = useSearchParams();
    const [param, setParam] = useState(paramString.get('token'));
    const router = useRouter();
    useEffect(() => {
        if (param.length > 8) {
            checkVerification(param);
        }

    }, [param])
    const checkVerification = (token) => {
        LoginRegistrationAPI.checkVerification({ token }).then(res => {
            if (res.status == 200) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Registration completed',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                }).then(res => {
                    router.push('/authentication/login')
                })
            }
        }).catch(err => {
            // console.log(err);
            Swal.fire({
                title: 'Error!',
                text: 'Registration failed',
                icon: 'error',
                confirmButtonText: 'Close',
            }).then(res => {
                router.push('/authentication/login')
            })
        })
    }

}

export default VerifyEmail