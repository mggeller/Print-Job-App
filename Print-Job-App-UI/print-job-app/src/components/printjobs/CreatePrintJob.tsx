import React, { useState } from 'react';
import { IPrintJob } from '../../models/IPrintJob';
import { PrintJobApi } from '../../services/PrintJobApi';
import { useHistory } from 'react-router-dom';

const CreatePrintJob = () => {

  const [printJob, setPrintJob] = useState({} as IPrintJob);

  let history = useHistory();

  const handleChange = (target: EventTarget & HTMLInputElement | EventTarget & HTMLTextAreaElement) => {
    console.log(target.name, target.value, target.type, target);
    if (target.name === 'person' && target instanceof HTMLInputElement) {
      setPrintJob({...printJob, person_name: target.value});
    }
    if (target.name === 'start' && target instanceof HTMLInputElement) {
      setPrintJob({...printJob, start_at: target.value});
    }
    if (target.name === 'duration' && target.type === 'number' && target instanceof HTMLInputElement) {
      setPrintJob({...printJob, duration: Number(target.value)});
    }
    if (target.name === 'filename' && target instanceof HTMLInputElement) {
      setPrintJob({...printJob, file_name: target.value});
    }
    if (target.name === 'description' && target instanceof HTMLTextAreaElement) {
      setPrintJob({...printJob, description: target.value});
    }
    if (target.name === 'model' && target instanceof HTMLInputElement) {
      setPrintJob({...printJob, printer_model: target.value});
    }
    if (target.name === 'type' && target instanceof HTMLInputElement) {
      setPrintJob({...printJob, printer_type: target.value});
    }
    
  }

  const handleSubmit = (event: React.FormEvent) => {
    const callApi = async() => {
      await PrintJobApi.create(printJob);
    }
    callApi();
    console.log(event.target);
    history.push('/');
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" method="POST">

      <div className="form-group">
        <label>Your Name</label>
        <input type="name" name="person" onChange={(e) => handleChange(e.target)} className="form-control" id="contact-name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
        <div className="validate"></div>
      </div>

      <div className="form-group">
        <label>Start of the print job</label>
        <input type="datetime-local" name="start" onChange={(e) => handleChange(e.target)} className="form-control" id="contact-subject" placeholder="Start of the print job" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
        <div className="validate"></div>
      </div>

      <div className="form-group">
        <label>Duration</label>
        <input type="number" name="duration" onChange={(e) => handleChange(e.target)} className="form-control" id="contact-subject" placeholder="Duration" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
        <div className="validate"></div>
      </div>

      <div className="form-group">
        <label>Name of the Print Job</label>
        <input type="text" name="filename" onChange={(e) => handleChange(e.target)} className="form-control" id="contact-subject" placeholder="Name of the Print Job" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
        <div className="validate"></div>
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea className="form-control" onChange={(e) => handleChange(e.target)} name="description" id="contact-message" placeholder="Description" data-rule="required" data-msg="Please write something for us"></textarea>
        <div className="validate"></div>
      </div>

      <div className="form-group">
        <label>Printer Model</label>
        <input type="text" name="model" onChange={(e) => handleChange(e.target)} className="form-control" id="contact-subject" placeholder="Printer Model" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
        <div className="validate"></div>
      </div>

      <div className="form-group">
        <label>Printer Type</label>
        <input type="text" name="type" onChange={(e) => handleChange(e.target)} className="form-control" id="contact-subject" placeholder="Printer Type" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
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