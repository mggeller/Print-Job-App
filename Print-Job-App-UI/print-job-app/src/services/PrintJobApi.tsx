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
        const url = "";
        try {
            const response = await this.axios.get<IPrintJob[]>(url);
            if (response.status === 200) {
                return response.data;
            }
            return [];
        } catch(error) {
            return [];
        }
    }

    static async create(printJob: IPrintJob): Promise<string> {
        const url = "";
        try {
            const response = await this.axios.post(url, printJob);
            if (response.status === 200) {
                return "";
            }
            return "";
        } catch(error) {
            return "";
        }
    }
}