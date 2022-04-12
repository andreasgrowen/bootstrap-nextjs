
import styles from '../styles/Footer.module.css'

function Footer(){
    return (
   
        <footer className="p-5 bg-dark text-white text-center position-relative bottom-0">
        <div className="container">
            <p className='lead'>Copyright &copy;2022 Bootstrap&NextJs Bootcamp</p>
          <a href="#" className='position-absolute bottem-0 end-0'><i className="bi bi-arrow-up-circle h1 px-5"></i> </a>  
        </div>
    </footer>
   
       
    )
}

export default Footer



