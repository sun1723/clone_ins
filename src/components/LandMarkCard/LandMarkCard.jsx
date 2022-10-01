import { Fragment } from "react"

const LandMarkCard = props => {
  const {item} = props
  return (
    <Fragment>
      <h3>{item.name}</h3>
      <span>{item.location}</span>
    </Fragment>
  )
}

export default LandMarkCard;