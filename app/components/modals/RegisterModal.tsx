'use client'

import React from 'react'
import axios from 'axios'

import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

import { FieldValue, SubmitHandler, useForm } from 'react-hook-form'
import useRegisterModal from '@/app/hooks/useRegisterModal'

const RegisterModal = () => {
  const registerModal = useRegisterModal()

  return <div>RegisterModal</div>
}

export default RegisterModal
