import Axios from 'axios';
import { IPrintJob } from '../models/IPrintJob';

export abstract class PrintJobApi {
    private static axios = Axios.create(
        {
            baseURL: "http://localhost:8000/api/printjobs",
            headers: {
                common: {
                    'Content-Type': 'application/json'
                }
            }
        }
    );

    
    static async getAll(): Promise<IPrintJob[]> {
        /* const firstPrintJob: IPrintJob = {id: 1, name: "Mihkel Raud", startDateTime: "22.07.2021 8:45:00", duration: 6, nameOfPrintedFile: "Music something", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n \n It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", printerModel: "HP", printerType: "3D New Gen"};
        const secondPrintJob: IPrintJob = {id: 2, name: "Markus Tamm", startDateTime: "25.07.2021 8:45:00", duration: 2, nameOfPrintedFile: "Building something", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n \n It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", printerModel: "HP", printerType: "3D New Gen"};
        const thirdPrintJob: IPrintJob = {id: 3, name: "Hendrik Ilves", startDateTime: "22.08.2021 8:45:00", duration: 16, nameOfPrintedFile: "Developing something", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n \n It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", printerModel: "HP", printerType: "3D New Gen"};
        const fourthPrintJob: IPrintJob = {id: 4, name: "Toomas Paju", startDateTime: "22.07.2021 10:45:00", duration: 9, nameOfPrintedFile: "Something something", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n \n It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", printerModel: "HP", printerType: "3D New Gen"};

        let finalList: IPrintJob[] = [firstPrintJob, secondPrintJob, thirdPrintJob, fourthPrintJob];

        return finalList;*/
        
        const url = "";
        console.log(url);
        try {
            const response = await this.axios.get<IPrintJob[]>(url);
            console.log('getAll response', response);
            if (response.status === 200) {
                return response.data;
            }
            return [];
        } catch(error) {
            console.log('error ', (error as Error).message);
            return [];
        }
    }

    static async create(printJob: IPrintJob): Promise<string> {
        const url = "";
        try {
            const response = await this.axios.post(url, printJob);
            console.log('create response', response);
            if (response.status === 200) {
                return "";
            }
            return "";
        } catch(error) {
            console.log('error ', (error as Error).message);
            return "";
        }
    }
}