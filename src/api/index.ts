import http from './http'

interface Ilogin {
    username: string
    password: string
}
export const loginAPI = (data: Ilogin) => http.post('/park/login', data)

interface Ilist {
    page: string,
    pageSize: string,
    carNumber?: string,
    personName?: string,
    cardStatus?: string
}
export const goodlist=(params:Ilist)=>http.get('/parking/card/list',params)

interface Iadd{
    carNumber: string,   
    personName: string,  
    phoneNumber: string  
    carBrand:string,     
    cardStartDate:string,
    cardEndDate:string,  
    paymentAmount:string,
    paymentMethod:string,
}
export const goodadd=(data:Iadd)=>http.post('/parking/card',data)