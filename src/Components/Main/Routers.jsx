import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AccessibleTable from '../Admin/Reports'
import Exam from '../Exam/Exam'
import Quiz from '../Exam/Quiz'
import UserSignup from '../User/UserSignup'
export default function Routers() {
  return (
    <div>
      <Routes>
            <Route path="/" element={<UserSignup/>} />
            <Route path="/quiz" element={<Quiz/>} />
            <Route path="/results" element={<AccessibleTable/>} />
            <Route path="/dashboard" element={<Quiz/>} />
        </Routes>
    </div>
  )
}
