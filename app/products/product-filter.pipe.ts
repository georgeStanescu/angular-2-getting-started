import { PipeTransform, Pipe } from "@angular/core";
import { IProduct } from "./product";

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], filterBy: string): IProduct[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        var filterFunction = function(product: IProduct) {
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        };

        return filterBy ? value.filter(filterFunction) : value;
    }
}