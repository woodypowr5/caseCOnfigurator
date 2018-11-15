import { Option } from './../types/option.model';
import { Properties } from './../data/properties';
import { Property } from "./../types/property.model";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PropertyService {
  private properties: Property[] = [];
  propertiesChanged: BehaviorSubject<Property[]> = new BehaviorSubject(null);

  constructor() {
    this.propertiesChanged.subscribe(properties => {
      this.properties = properties;
    });
    this.propertiesChanged.next([]);
    this.fetchProperties();
  }

  fetchProperties() {
    this.propertiesChanged.next(Properties.properties);
  }

  changePropertyValue(property: Property, option: Option): void {
    this.properties.map(currentProperty => {
      if (property.name === currentProperty.name) {
        currentProperty.value = option;
        this.propertiesChanged.next(this.properties);
      }
    });
  }
}
