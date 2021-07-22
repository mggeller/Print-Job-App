import React from 'react';

const CreatePrintJob = () => {
    return(
        <form className="contact-form php-mail-form" role="form" action="contactform/contactform.php" method="POST">

              <div className="form-group">
                <label>Your Name</label>
                <input type="name" name="name" className="form-control" id="contact-name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input type="email" name="email" className="form-control" id="contact-email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" name="subject" className="form-control" id="contact-subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validate"></div>
              </div>

              <div className="form-group">
                <label>Your Message</label>
                <textarea className="form-control" name="message" id="contact-message" placeholder="Your Message" data-rule="required" data-msg="Please write something for us"></textarea>
                <div className="validate"></div>
              </div>

              <div className="loading"></div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>

              <div className="form-send">
                <button type="submit" className="btn btn-large">Send Message</button>
              </div>

            </form>
    )
}

export default CreatePrintJob;