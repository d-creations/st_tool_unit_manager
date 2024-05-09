const { app, BrowserWindow, ipcMain,screen } = require('electron/main')
const path = require('node:path')
const fs = require('node:fs')
const https = require('node:https')
const electron = require('electron');


function createWindow () {
  const primaryDisplay = screen.getPrimaryDisplay()
  const { width, height } = primaryDisplay.workAreaSize

  const win = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {
      preload: path.join(__dirname, 'src/preload.js')
    }
  })
  
  win.openDevTools();
  win.loadFile('public/html/index.html')

//in you main process:-


ipcMain.handle('openFile', handleFileOpen)
ipcMain.handle('openFolder', handleFolderOpen)
ipcMain.handle('getFilesInFolder', handleGetFilesInDir)





}

async function handleFileOpen () {
  let options = {properties:["openFile","multiSelections"]}
  const { canceled, filePaths } = await electron.dialog.showOpenDialog(options)
  if (!canceled) {
    return filePaths[0]
  }
}

async function handleFolderOpen () {
  let options = {properties:["openDirectory"]}
  const { canceled, filePaths } = await electron.dialog.showOpenDialog(options)
  if (!canceled) {
    return filePaths[0]
  }
}

async function handleGetFilesInDir (dir,args) {
  let ret = await fs.readdirSync(args,{withFileTypes: true})
  let result =  ret.map(entry => ({
    name: entry.name,
    type: entry.isDirectory() ? "directory" : "file",
  }))  
   return result
}




app.whenReady().then(createWindow)


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})


