import React from 'react';
import { IPrintJob } from '../../models/IPrintJob';

const PrintJobTableView = (props: { printJob: IPrintJob }) => {
    return (
        <>
            <div className="row">
                <br />
                <div className="col-lg-6 centered">
                    <img src="img/p03.png" alt="" />
                </div>
                <div className="col-lg-6">
                    <h4>{props.printJob.name}</h4>
                    <p>{props.printJob.description}</p>
                    <p>
                        <i className="fa fa-circle-o"></i>Date and time of the Print Job start - {props.printJob.startDateTime}<br />
                        <i className="fa fa-circle-o"></i> Duration - {props.printJob.duration}<br />
                        <i className="fa fa-circle-o"></i> Name of the file Being printed - {props.printJob.nameOfPrintedFile}<br />
                        <i className="fa fa-circle-o"></i> Printer Model - {props.printJob.printerModel}<br />
                        <i className="fa fa-circle-o"></i> Printer Type - {props.printJob.printerType}<br />
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