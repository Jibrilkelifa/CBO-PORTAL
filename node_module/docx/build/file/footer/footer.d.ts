import { InitializableXmlComponent, XmlComponent } from '../xml-components';
import { Paragraph } from "../paragraph";
import { Table } from "../table";
export declare class Footer extends InitializableXmlComponent {
    private readonly refId;
    constructor(referenceNumber: number, initContent?: XmlComponent);
    get ReferenceId(): number;
    add(item: Paragraph | Table): void;
}
