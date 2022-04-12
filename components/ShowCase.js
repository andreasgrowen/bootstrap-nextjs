import MyModal from "./Modal"
import React from 'react'
import Image from "next/image";

function ShowCase(){
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <>
            <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
                <div className="container">
                    <div className="d-sm-flex align-items-center justify-content-between" >
                        <div> 
                            <h1>Become a <span className="text-warning">WebDeveloper</span></h1>
                            <p className="lead my-4">
                                We focus on being better then Fabian , but seriously that can&apos;t be very hard. Because he is a bit lazy. And he likes meditation and yoga. 
                            </p>
                            <button className="btn btn-primary btn-lg" onClick={() => setModalShow(true)}>Start the process</button>

                        </div>
                        <Image src="img/showcase.svg" className="img-fluid w-50 d-none d-sm-block" alt=""/>
                    </div>
                </div>
            </section>
            <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                />

        </>
    ) 
}

export default ShowCase

