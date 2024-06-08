import { FileNode_EXC_I } from "../ViewDomainI/Interfaces.js";
import { StorageNode2 } from "./StorageNode2.js";


export class FileNode extends StorageNode2 implements FileNode_EXC_I{
    saveFile(text: any) {
        globalThis.electron.saveFile(this.getUrl(),text)
    }
    print(string: any) {
        throw new Error("Method not implemented.");
    }
    createDivs(parentDiv: HTMLDivElement, spaceLeft: number) {
        throw new Error("Method not implemented.");
    }
    update() {
        throw new Error("Method not implemented.");
    }
    
    constructor(path : StorageNode2, name : string){
        super(path,name)
    }
}