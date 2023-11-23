
import PropTypes from 'prop-types';

function CardComponent(props) {
  return (
    <div className="card">
    <img src={props.image} className="card-img-top" alt="" />
      <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
         <p>Rp. <span>{props.price}</span></p>
      </div>
    </div>
  )
}
CardComponent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}
export default CardComponent