import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Product } from '../models/product'
import { environment } from 'src/environments/environment'
@Injectable({
	providedIn: 'root',
})
export class ProductService {
	constructor(private http: HttpClient) {}

	getProducts(): Promise<Product[]> {
		return this.http.get<Product[]>(environment.apiUrl + 'products').toPromise()
	}
}