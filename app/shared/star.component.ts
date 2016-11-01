import { Component, OnChanges, Input } from "@angular/core";

@Component ({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: [ "app/shared/star.component.css" ]
})
export class StarComponent implements OnChanges {
    starWidth: number;
    @Input() rating: number = 4;

    ngOnChanges() : void {
        this.starWidth = this.rating * 86/5;
    };


}