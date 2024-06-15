import { EditorControlerAdapter_EXC_I } from "../../ViewDomainI/Interfaces.js"
import { CanalAdapter } from "../../tecnicalServices/canalAdapter.js"
import { FileDiv } from "../FileDiv.js"
import { TabManager, TABpage } from "./TabManager.js"


export class TabCreator{
    createStarTab(fileDiv : FileDiv, editor: EditorControlerAdapter_EXC_I) {
        let tabManager = this.tabManager
        editor.getFileText(fileDiv.fileNode).then(function(text) {

            let div = document.createElement("div")
            //let canal = new CanalAdapter(1,div,false,false)
            let frame = document.createElement("iframe")
            frame.name = "ifram"
            frame.src = "./../../src/Applications/NC-Edit7Pro/index.html"
            frame.classList.add("fileEditor") 

            
            div.appendChild(frame)
            div.classList.add("fileEditor")
            tabManager.createTab(fileDiv,new TABpage(div,frame))

        })
    
    }
    
    private tabManager : TabManager
    constructor(tabManager:  TabManager){
        this.tabManager = tabManager
    }
    createTab(fileDiv : FileDiv,editor : EditorControlerAdapter_EXC_I){
        let tabManager = this.tabManager
        editor.getFileText(fileDiv.fileNode).then(function(text) {

            let div = document.createElement("div")
            let canal = new CanalAdapter(1,div,false,false)
            canal.text = text.toString()
            div.classList.add("fileEditor")
            tabManager.createTab(fileDiv,new TABpage(div,canal))

        })
    }
}