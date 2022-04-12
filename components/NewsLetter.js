import styles from '../styles/NewsLetter.module.css'

function NewsLetter() {
    return (
        <>
            <section className="bg-primary text-light p-5">
                <div className="container">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <h3 className="mb-3 mb-md-0">Sign Up for Our Newsletter!</h3>
                        <div className={`${styles.newsInput} input-group`}>
                            <input type="text" className="form-control" placeholder="Enter Email" />
                            <div className="input-group-append">
                                <button className="btn bg-dark text-light" type="button" id="button-addon2">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsLetter