import React, { useEffect, useState } from 'react';
import { IPrintJob } from '../../models/IPrintJob';
import { PrintJobApi } from '../../services/PrintJobApi';
import PrintJobTableView from './PrintJobTableView';

const PrintJobs = () => {

    const [printJobs, setPrintJobs] = useState([] as IPrintJob[]);

    useEffect(() => {
        const callApi = () => {
            const data = PrintJobApi.getAll();
            console.log('data', data);
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