import React from 'react';
import { IPrintJob } from '../../models/IPrintJob';

const PrintJobTableView = (props: { printJob: IPrintJob }) => {
    return (
        <>
            <div className="row">
                <br />
                <div className="col-lg-6 centered">
                    <img src="img/PrintJobPic.jpg" alt="" />
                </div>
                <div className="col-lg-6">
                    <h4>{props.printJob.person_name}</h4>
                    <p>{props.printJob.description}</p>
                    <p>
                        <i className="fa fa-circle-o"></i>Date and time of the Print Job start - {props.printJob.start_at}<br />
                        <i className="fa fa-circle-o"></i> Duration - {props.printJob.duration}<br />
                        <i className="fa fa-circle-o"></i> Name of the file Being printed - {props.printJob.file_name}<br />
                        <i className="fa fa-circle-o"></i> Printer Model - {props.printJob.printer_model}<br />
                        <i className="fa fa-circle-o"></i> Printer Type - {props.printJob.printer_type}<br />
                    </p>
                </div>
            </div>

            <br />
            <hr />
            <br />
        </>
    )
}

export default PrintJobTableView;