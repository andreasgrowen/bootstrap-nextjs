import Image from "next/image"

function Learn() {
    return (
        <>
            <section className="p-5" id="learn">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md">
                            <Image src="/img/fundamentals.svg" alt="Learn the fundamentals" fluid="true" width="505px" height="358px" />
                        </div>
                        <div className="col-md p-5">
                            <h2>Learn The Fundamentals</h2>
                            <p className="lead">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique deleniti possimus magnam corporis ratione facere!
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique deleniti possimus magnam corporis ratione facere!

                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque reiciendis eius autem eveniet mollitia, at asperiores suscipit quae similique laboriosam iste minus placeat odit velit quos, nulla architecto amet voluptates?
                            </p>
                            <p className="lead">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique deleniti possimus magnam corporis ratione facere!

                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque reiciendis eius autem eveniet mollitia, at asperiores suscipit quae similique laboriosam iste minus placeat odit velit quos, nulla architecto amet voluptates?
                            </p>
                            <a href="#" className="btn btn-light mt-3"><i className="bi bi-chevron-right">Read More</i></a>

                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Learn