import React from 'react'
//I'm ready to talk...
//I am open to collaborating on exciting projects with wonderful individuals. If you require any assistance, I am more than willing to offer my support.
function Form_Contact() {
  return (
    <form>
        <div className="mb-3">
            <label for="inputName" className="form-label">Your name</label>
            <input type="text" className="form-control" id="inputName" aria-describedby="emailHelp"/>
            <div className="form-text text-white">I'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label for="inputEmail" className="form-label">Your email address</label>
            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
            <label for="inputMessage" class="form-label">Your message</label>
            <textarea class="form-control" id="inputMessage" rows="3"></textarea>
        </div>      
        <button type="submit" className="btn btn-primary">Send Message</button>
    </form>
  )
}

export default Form_Contact