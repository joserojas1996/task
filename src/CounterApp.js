import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {
    const handleAdd = (e) => console.log(e)

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{value}</h2>
            <hr />
            <button onClick={ handleAdd }>Sumar 1</button>
        </>
    )
}
CounterApp.propTypes = {
    value: PropTypes.number
}
CounterApp.defaultProps = {
    value: ''
}
export default CounterApp;