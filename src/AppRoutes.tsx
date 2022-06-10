import { Component } from "react";
import { Container } from "react-bootstrap";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from './App';
import Home from "./pages/home/home";
import Navigation from './components/shared/navbar/navigation';
import AgendaContacto from './pages/Contacto/agendaContactos';
import FormularioAgenda from './pages/Formulario/formularioAgenda';
import TablaAgenda from './pages/Agenda/tablaAgenda';

class AppRoutes extends Component {
    render() {
        return(
            <>
            <Navigation></Navigation>
            <Container>
                <Routes>
                    <Route path="/" element={<App/>} />
                    <Route path="/agenda" element={<AgendaContacto/>} />
                    <Route path="/formulario" element={<FormularioAgenda/>} />
                    <Route path="/tabla" element={<TablaAgenda/>} />
                </Routes>
            </Container>
            </>
        )
    }
}

export default AppRoutes;