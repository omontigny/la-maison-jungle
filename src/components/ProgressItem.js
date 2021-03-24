import '../styles/ProgressItem.css'

const ProgressItem = (props) => {
  const { name, bgcolor, barcolor, completed, max, current} = props;

  const containerStyles = {
    backgroundColor: barcolor,
  }

  const fillerStyles = {
    width: `${completed}%`,
    backgroundColor: bgcolor,
  }

  const nameStyle = {
    left: `-${completed + 12}%`,
    //left: 0,
  }

    const statusStyle = {
    left: `${completed - 20}%`,
    //left: 0,
  }
/*   const labelStyles3 = {
    padding: 5,
    color: 'white',
     textAlign: 'right'
  }

  const labelStyles2 = {
    padding: 380,
    color: 'white',
  }*/

  return (
      <div className='brgm-progress-bar-container'>
        <div className='brgm-progress-item-background' style={containerStyles}>
        <div className='brgm-progress-item-foreground' style={fillerStyles}>
            <span className='brgm-progress-item-name' style={nameStyle}>{`${name}`}</span>
            <span className='brgm-progress-item-pourcent' >{`${completed}%`} </span>
            <span className='brgm-progress-item-background-labels' style={statusStyle}>{`${current}/${max}`}</span>
        </div>
      </div>
  </div>
  );
};

export default ProgressItem;