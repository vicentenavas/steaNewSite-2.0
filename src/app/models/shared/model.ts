
//home links are the models from the nav bar, in that way modify the nav bar is easier because you only have to modify one ul 
export interface homeLinks {
    id: number,
    name: string, 
    url: string
}




export interface Servizio{
    id: number, 
    name: string,
    description: description[]
    homeTitle: string,
    homeDescription: string
    img: img[],
    siOcuppa: siOcuppa[]

}



export interface img{
id: number,
url: string 

}


export interface siOcuppa{
    id: number,
    info: string
}


export interface description{
id: number,
text: string
}


export interface Contact {
    id: number; 
    info: string;
}