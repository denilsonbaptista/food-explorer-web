import { Routes, Route, Navigate } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Dish } from '../pages/Dish'
import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewDish />} />
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="/edit/:id" element={<EditDish />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
