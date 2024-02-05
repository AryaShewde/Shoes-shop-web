import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container-fluid px-5 my-5">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="card border-0 rounded-3 shadow-lg overflow-hidden">
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-sm-6 d-none d-sm-block bg-image"></div>
                                    <div className="col-sm-6 p-4">
                                        <div className="text-center">
                                            <div className="h3 fw-light">Contact Form</div>
                                            <p className="mb-4 text-muted">Split layout contact form</p>
                                        </div>

                                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">

                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
                                                <label htmlFor="name">Name</label>
                                                <div className="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                                                <label htmlFor="emailAddress">Email Address</label>
                                                <div className="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                                                <div className="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <textarea className="form-control" id="message" type="text" placeholder="Message" style={{ height: "10rem" }} data-sb-validations="required"></textarea>
                                                <label htmlFor="message">Message</label>
                                                <div className="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
                                            </div>

                                            <div className="d-none" id="submitSuccessMessage">
                                                <div className="text-center mb-3">
                                                    <div className="fw-bolder">Form submission successful!</div>
                                                    <p>To activate this form, sign up at</p>
                                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                                </div>
                                            </div>

                                            <div className="d-none" id="submitErrorMessage">
                                                <div className="text-center text-danger mb-3">Error sending message!</div>
                                            </div>

                                            <div className="d-grid">
                                                <button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button>
                                            </div>
                                        </form>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
