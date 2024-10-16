

export const Contact = () => {

    const handleFormSubmit= (formData) => {
     const formInputData =Object.fromEntries(formData.entries())
        console.log(formInputData)

    }

  return (
    <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>

       <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
            <input 
            type="text"
            className="form-control"
             required 
             autoComplete = "false"
              placeholder="Enter your name ..."
              name="username"
              ></input>

            <input 
             type="Email"
             required 
             className="form-control"
              autoComplete = "false"
              placeholder="Enter your Email ..."
              name="username"
              ></input>

              <textarea
              className="form-control"
              rows="12"
              placeholder="Enter your message"
              name="message"
              required
              autoComplete="false">
              </textarea>

              <button type="submit"  className="">Submit</button>

        </form>

        </div>

    </section>
  )
}
