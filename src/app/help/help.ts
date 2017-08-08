
/** Help entity */
export class Help {
    constructor(public email = '', 
    public sendCatalog = false,
    public address = 'home',
    public street?: string,
    public city?: string,
    public zip?:string
){}
}
