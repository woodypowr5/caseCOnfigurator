import { Option } from './shared/types/option.model';
import { PropertyService } from './shared/services/property.service';
import { Component } from '@angular/core';
import { Property } from './shared/types/property.model';
import { ImageEngineService } from './shared/services/image-engine.service';
import "snapsvg-cjs";
declare var Snap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private properties: Property[] = [];
  private activeProperty: Property = null;

  constructor(private propertyService: PropertyService, private imageEngineService: ImageEngineService) {
    this.propertyService.propertiesChanged.subscribe(properties => {
      this.properties = properties;
      if (this.activeProperty === null) {
        this.activeProperty = properties[0];
      }
      this.imageEngineService.refreshImage();
    });
  }

  setActiveProperty(property: Property): void {
    const s = Snap('#my-svg');
  const c = s.circle(50, 50, 100);
    this.activeProperty = property;
  }

  controlChanged(property: Property, option: Option): void {
    this.propertyService.changePropertyValue(property, option);
  }

  nextProperty() {
    for (let index = 0; index < this.properties.length; index++) {
      const property = this.properties[index];
      if (this.activeProperty === property) {
        this.setActiveProperty(this.properties[index + 1]);
        break;
      }
    }
  }

  previousProperty() {
    for (let index = 0; index < this.properties.length; index++) {
      const property = this.properties[index];
      if (this.activeProperty === property) {
        this.setActiveProperty(this.properties[index - 1]);
        break;
      }
    }
  }
}
