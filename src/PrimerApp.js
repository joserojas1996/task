import PropTypes from "prop-types";


const PrimeraApp = ({ titulo, subtitulo}) => {


    return (
        <>
            <h1>{ titulo }</h1>
            {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>{ subtitulo }</p>
        </>
    )
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    titulo: 'Soy el titulo',
    subtitulo: 'Soy el subtitulo' 
}

export default PrimeraApp;