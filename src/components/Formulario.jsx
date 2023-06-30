import {useState} from 'react';
import Error from './Error';

const Formulario = ({pacientes, setPacientes}) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    const generarId = () => {
        const random= Math.random().toString(36).substr(2,9);
        const fecha= new Date().getTime().toString(36);
        return random+fecha;
    };


    const handleSumit = (e) => {
        e.preventDefault();

        //validar
        if ([nombre,propietario,email,fecha,sintomas].includes('')) {
            console.log('Hay campos vacios');
            setError(true);
            return;
        }
        setError(false);

        // crear objeto
        const ObjetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
            id: generarId()
        }

        // agregar al state
        setPacientes([...pacientes, ObjetoPaciente]);

        // reiniciar el form
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
                
    };

    return(
        <div className="md:w-1/2 lg:w-2/5">
            <h1 className="font-black text-3xl text-center ">Seguimiento de Pacientes</h1>
            <p className=" mt-5 mb-18 text-center text-xl">Añade Pacientes y {" "} <span className="text-indigo-600 font-bold ">Administralos</span></p>

            <form className="mt-10 bg-white shadow-md rounded-lg py-10 px-5" onSubmit={handleSumit}>
                {error && <Error mensaje="Todos los campos son obligatorios" />}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 uppercase" htmlFor="nombre">Nombre Mascota</label>
                    <input
                        id="nombre"
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Nombre Mascota"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 uppercase" htmlFor="propietario">Nombre Propietario</label>
                    <input
                        id="propietario"
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Nombre Propietario"
                        value={propietario}
                        onChange={e => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 uppercase" htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Email Propietario"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 uppercase" htmlFor="alta">Alta</label>
                    <input
                        id="alta"
                        type="date"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}
                       
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 uppercase" htmlFor="sintomas">Sintomas</label>
                    <textarea
                        id="sintomas"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                        placeholder="Describe los sintomas"
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-indigo-500 hover:bg-indigo-600 w-full mt-5 p-2 text-white uppercase font-bold"
                >Agregar Cita</button>

                </form>
        </div>

    )
}

export default Formulario;