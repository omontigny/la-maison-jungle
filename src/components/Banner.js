import '../styles/Banner.css';

function Banner({children}) {

    /*const children = props.children
    const month = 7
    let text = ''
    if ( month > 1 && month < 6 ) {
        text = "Nous sommes au printemps : c'est le moment idéal pour rempoter !"
    }*/

    return(
         <div className='lmj-banner'>{children}</div>
    /*<div className='lmj-banner'>
        <img src={logo} alt='La maison jungle Logo' className='lmj-logo' />
        <h1 className='lmj-title'>{title}</h1>
    </div>*/)
}

export default Banner