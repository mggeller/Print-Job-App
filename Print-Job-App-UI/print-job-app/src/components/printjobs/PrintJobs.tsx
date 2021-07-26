import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IPrintJob } from '../../models/IPrintJob';
import { PrintJobApi } from '../../services/PrintJobApi';
import PrintJobTableView from './PrintJobTableView';

const PrintJobs = () => {

    const [printJobs, setPrintJobs] = useState([] as IPrintJob[]);

    useEffect(() => {
        const callApi = async () => {
            const data = await PrintJobApi.getAll();
            setPrintJobs(data);
        }

        callApi();
    }, [printJobs.length])

    
    return (
        <>
            <div id="blue">
                <div className="container">
                    <div className="row centered">
                        <div className="col-lg-8 col-lg-offset-2">
                            <h4>WE WORK HARD TO ACHIEVE EXCELLENCE</h4>
                            <p>AND WE ARE HAPPY TO DO IT</p>
                            <ul><li className="active"><NavLink to={"/CreatePrintJob"} className="btn">Add New Print Job</NavLink></li></ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container desc">
                {printJobs.map(printJob => <PrintJobTableView printJob={printJob} key={printJob.id} />)}
            </div>
        </>
    )
}

export default PrintJobs;