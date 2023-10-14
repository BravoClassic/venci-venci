import PropTypes from 'prop-types'
export const BanList = (props) => {
  const removeBan = (e) => {

    props.setBanList(props.ban.filter((ban) => {
        return ban !== e.target.value
    }))
  }
  return (
    <div className="ban">
        <h1>Ban List</h1>
        <div className='ban-list'>
           {props.ban.map((item,key) => {
            return (
                <button onClick={removeBan} key={key} value={item} className='data ban-button'>
                    {item}
                </button>
            )

           }
            )}
        </div>
    </div>
  )
}

BanList.propTypes = {
    ban: PropTypes.array,
    setBanList: PropTypes.func
}

BanList.defaultProps = {
    ban: [],
    setBanList: () => {}
}