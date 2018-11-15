import { Property } from './../types/property.model';
import { Injectable } from '@angular/core';
import { Option } from '../types/option.model';

@Injectable({
  providedIn: 'root'
})
export class ImageEngineService {

  constructor() { }

  refreshImage() {
    console.log("running");
  }

  setPropertyValue(property: Property, value: Option) {

  }
}
