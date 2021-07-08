

export interface FileUpload {
    name: string;
    data: any;
    endoing: string;
    tempFilePath: string;
    truncated: boolean;
    mimetype: string;

    mv: Function;
}