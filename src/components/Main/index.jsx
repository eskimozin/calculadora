import './index.css'
import PropTypes from "prop-types";

function Main({children}) {
  return (
    <main>
      {children}
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.node,
}

export { Main }