import { Option } from "./option.model";

export interface Property {
    name: string;
    value?: Option;
    displayName: string;
    options: Option[];
}
