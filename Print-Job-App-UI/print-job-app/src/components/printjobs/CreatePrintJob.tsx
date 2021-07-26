import React, { useState } from 'react';
import { IPrintJob } from '../../models/IPrintJob';
import { PrintJobApi } from '../../services/PrintJobApi';
import { useHistory } from 'react-router-dom';

const CreatePrintJob = () => {

  const [printJob, setPrintJob] = useState({} as IPrintJob);
  const [errors, setErrors] = useState({ personNameError: "This Field cannot be empty!", descriptionError: "This Field cannot be empty!", fileNameError: "This Field cannot be empty!" });

  let history = useHistory();

  const handleChange = (target: EventTarget & HTMLInputElement | EventTarget & HTMLTextAreaElement) => {
    console.log(target.name, target.value, target.type, target);
    if (target.name === 'person' && target instanceof HTMLInputElement) {
      handleNameValidation(target.value, 0, 20);
      setPrintJob({ ...printJob, person_name: target.value });
    }
    if (target.name === 'start' && target instanceof HTMLInputElement) {
      setPrintJob({ ...printJob, start_at: target.value });
    }
    if (target.name === 'duration' && target.type === 'number' && target instanceof HTMLInputElement) {
      setPrintJob({ ...printJob, duration: Number(target.value) });
    }
    if (target.name === 'filename' && target instanceof HTMLInputElement) {
      handleFileNameValidation(target.value, 0, 20);
      setPrintJob({ ...printJob, file_name: target.value });
    }
    if (target.name === 'description' && target instanceof HTMLTextAreaElement) {
      handleDescriptionValidation(target.value, 0, 500);
      setPrintJob({ ...printJob, description: target.value });
    }
    if (target.name === 'model' && target instanceof HTMLInputElement) {
      setPrintJob({ ...printJob, printer_model: target.value });
    }
    if (target.name === 'type' && target instanceof HTMLInputElement) {
      setPrintJob({ ...printJob, printer_type: target.value });
    }

  }

  const handleSubmit = (event: React.FormEvent) => {
    const callApi = async () => {
      await PrintJobApi.create(printJob);
    }
    callApi();
    history.push('/');
  }

  const handleNameValidation = (personName: String, lowLimit: number, upperLimit: number) => {
    if (personName.length > upperLimit) {
      setErrors({ ...errors, personNameError: "This Field cannot have that many characters!" });
    } else if (personName.length === lowLimit) {
      setErrors({ ...errors, personNameError: "This Field cannot be empty" });
    } else {
      setErrors({ ...errors, personNameError: "" });
    }
  }

  const handleFileNameValidation = (fileName: String, lowLimit: number, upperLimit: number) => {
    if (fileName.length > upperLimit) {
      setErrors({ ...errors, fileNameError: "This Field cannot have that many characters!" });
    } else if (fileName.length === lowLimit) {
      setErrors({ ...errors, fileNameError: "This Field cannot be empty" });
    } else {
      setErrors({ ...errors, fileNameError: "" });
    }
  }

  const handleDescriptionValidation = (description: String, lowLimit: number, upperLimit: number) => {
    if (description.length > upperLimit) {
      setErrors({ ...errors, descriptionError: "This Field cannot have that many characters!" });
    } else if (description.length === lowLimit) {
      setErrors({ ...errors, descriptionError: "This Field cannot be empty" });
    } else {
      setErrors({ ...errors, descriptionError: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" method="POST">

      <div className="form-group">
        <label>Your Name</label>
        <input type="name" name="person" onChange={(e) => handleChange(e.target)} className="form-control" id="contact-name" placeholder="Your Name" />
        <span style={{ color: "red" }}>{errors.personNameError}</span>
        <div className="validate"></div>
      </div>

      <div className="form-group">
        <label>Start of the print job</label>
        <input type="datetime-local" name="start" onChange={(e) => handleChange(e.target)} className="form-control" id="contact-subject" placeholder="Start of the print job" />
        <div className="validate"></div>
      </div>

      <div className="form-group">
        <label>Duration</label>
        <input type="number" name="duration" onChange={(e) => handleChange(e.target)} className="form-control" id="contact-subject" placeholder="Duration" />
        <div className="validate"></div>
      </div>

      <div className="form-group">
        <label>Name of the Print Job</label>
        <input type="text" name="filename" onChange={(e) => handleChange(e.target)} className="form-control" id="contact-subject" placeholder="Name of the Print Job" />
        <span style={{ color: "red" }}>{errors.fileNameError}</span>
        <div className="validate"></div>
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea className="form-control" onChange={(e) => handleChange(e.target)} name="description" id="contact-message" placeholder="Description"></textarea>
        <span style={{ color: "red" }}>{errors.descriptionError}</span>
        <div className="validate"></div>
      </div>

      <div className="form-group">
        <label>Printer Model</label>
        <input type="text" name="model" onChange={(e) => handleChange(e.target)} className="form-control" id="contact-subject" placeholder="Printer Model" />
        <div className="validate"></div>
      </div>

      <div className="form-group">
        <label>Printer Type</label>
        <input type="text" name="type" onChange={(e) => handleChange(e.target)} className="form-control" id="contact-subject" placeholder="Printer Type" />
        <div className="validate"></div>
      </div>

      <div className="form-send">
        <button type="submit" disabled={errors.personNameError === "" && errors.fileNameError === "" && errors.descriptionError === "" ? false : true} className="btn btn-large">Create Print-Job</button>
      </div>

    </form>
  )
}

export default CreatePrintJob;