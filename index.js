const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = !app.isPackaged;
const { fork } = require("child_process");

let mainWindow;
let nodeServer;

app.setAppUserModelId("com.yourapp.id");

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      //preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  if (isDev) {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    mainWindow.loadFile(path.join(__dirname, "ui/dist/index.html"));
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  if (!isDev) {
    const serverPath = path.join(process.resourcesPath, "server/index.js");
    nodeServer = fork(serverPath);
  }

  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("will-quit", () => {
  if (nodeServer) nodeServer.kill();
});
