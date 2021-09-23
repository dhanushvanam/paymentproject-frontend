import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataService {
    customers: any;

    constructor(private http: HttpClient) {
        this.customers = [];
    }

    getDataFromApi(url: string) {
        return this.http.get(url);
    }

    getCustomers() {
        return this.customers;
    }
    setCustomers(customers: any) {
        this.customers = customers;
    }
    getCustomerById(customerid: any) {
        return this.http.get(customerid);
    }

}