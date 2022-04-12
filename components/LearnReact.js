import Image from "next/image"

function LearnReact() {
    return (
        <>
            <section className="p-5 bg-dark text-light" id="learn">
                <div className="container">
                    <div className="row align-items-center justify-content-between">

                        <div className="col-md p-5">
                            <h2>Learn React</h2>
                            <p className="lead">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique deleniti possimus magnam corporis ratione facere teenkaastaart!
                            </p>
                            <p className="lead">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque reiciendis eius autem eveniet mollitia, at asperiores suscipit quae similique laboriosam iste minus placeat odit velit quos, nulla architecto amet voluptates?
                            </p>
                            <a href="#" className="btn btn-light mt-3"><i className="bi bi-chevron-right">Read More</i></a>

                        </div>
                        <div className="col-md">
                            <Image src="img/react.svg" alt="" className="img-fluid" />
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default LearnReact