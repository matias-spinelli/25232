import "./Login.css"
import { useState } from "react"
import { useAuthContext } from "../../context/AuthContext/useAuthContext"
import { Navigate, useNavigate } from "react-router-dom"
import { useChuletuteAlertContext } from "../UI/ChuletuteAlert/useChuletuteAlertContext";

export const Login = () => {
    const [userForm, setUserForm] = useState({ name: "", password: "" })
    const { user, login } = useAuthContext()
    const { showToast } = useChuletuteAlertContext();

    const navigate = useNavigate()

    if(user) {
        return <Navigate to="/admin/alta-productos" />
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserForm({...userForm, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const sucess = login(userForm.name, userForm.password)

        if(sucess) {
            navigate("/admin/alta-productos")
        } else {
            showToast(`${item.name} agregado al carrito`, "error");
            setUserForm({ name: "", password: "" })
        }
    }

return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Iniciar Sesión</h2>

        <div>
          <label>Usuario:</label>
          <input
            type="text"
            name="name"
            value={userForm.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userForm.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  )
}
