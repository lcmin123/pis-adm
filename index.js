import { fork } from 'child_process';
import { app, BrowserWindow } from 'electron';
import path from 'path';

const isDev = !app.isPackaged;
const __dirname = path.resolve();
let mainWindow;
let nodeServer;

app.setAppUserModelId('com.yourapp.id');

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
    mainWindow.loadURL('http://localhost:5173');
  } else {
    mainWindow.loadFile(path.join(__dirname, 'src/dist/index.html'));
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  if (!isDev) {
    const serverPath = path.join(process.resourcesPath, 'server/index.js');
    nodeServer = fork(serverPath);
  }

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('will-quit', () => {
  if (nodeServer) nodeServer.kill();
});
