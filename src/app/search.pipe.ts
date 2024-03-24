import { Pipe, PipeTransform } from '@angular/core';
import { product } from './shared/interfaces/products';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(products: product[], term: string): product[] {
    return products.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
  }
}
