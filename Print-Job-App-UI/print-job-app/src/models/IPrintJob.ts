export interface IPrintJob {
    id: number;
    name: string;
    startDateTime: string;
    duration: number;
    nameOfPrintedFile: string;
    description: string;
    printerModel: string;
    printerType: string;
}