


export class FileContextMenu{
    static contextMenuDiv = document.createElement("div")
    static pathDir = ""
    static nameFile = ""
    static showContextMenu(pathDir  : string,name,e : Event){
        FileContextMenu.contextMenuDiv.classList.remove("showConextMenu","hiddenConextMenu")
        FileContextMenu.contextMenuDiv.classList.add("showConextMenu")
        let pos = FileContextMenu.getPosition(e)
        FileContextMenu.contextMenuDiv.style.left = pos.x + "px";
        FileContextMenu.contextMenuDiv.style.top = pos.y + "px";
        FileContextMenu.pathDir = pathDir
        FileContextMenu.nameFile = name


    }

    static removeContextMenu(){
        FileContextMenu.contextMenuDiv.classList.remove("showConextMenu","hiddenConextMenu")
        FileContextMenu.contextMenuDiv.classList.add("hiddenConextMenu")
    }
    static createMenu(){
        FileContextMenu.contextMenuDiv.classList.remove("showConextMenu","hiddenConextMenu")
        let deleteDiv = document.createElement("div")
        let createFolderDiv = document.createElement("div")
        let createDocumentDiv = document.createElement("div")
        let renameDocumentDiv = document.createElement("div")
        deleteDiv.classList.add("selectable","contextMenu")
        createFolderDiv.classList.add("selectable","contextMenu")
        createDocumentDiv.classList.add("selectable","contextMenu")
        renameDocumentDiv.classList.add("selectable","contextMenu")
        deleteDiv.innerText = "delete"
        createFolderDiv.innerText = "create Folder"
        createDocumentDiv.innerText = "create File"
        renameDocumentDiv.innerText = "rename File"

        FileContextMenu.contextMenuDiv.appendChild(deleteDiv)
        FileContextMenu.contextMenuDiv.appendChild(createFolderDiv)
        FileContextMenu.contextMenuDiv.appendChild(createDocumentDiv)
        FileContextMenu.contextMenuDiv.appendChild(renameDocumentDiv)

        deleteDiv.addEventListener("click", (e)=> {
            console.log("delete" + FileContextMenu.pathDir)
        })

        renameDocumentDiv.addEventListener("click", (e)=> {
            console.log("rename" + FileContextMenu.pathDir)
        })
        createFolderDiv.addEventListener("click", (e)=> {
            console.log("createFolder" + FileContextMenu.pathDir)
        })
        createDocumentDiv.addEventListener("click", (e)=> {
            console.log("createDoc" + FileContextMenu.pathDir)
        })
        FileContextMenu.removeContextMenu()
    }

    static getPosition(e) {
        let posx = 0;
        let  posy = 0;
        if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
        } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft +
        document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop +
        document.documentElement.scrollTop;
        }
        return {
        x: posx,
        y: posy
        }
        }
}