const { app, BrowserWindow, Menu, ipcMain, Notification } = require('electron');
const path = require('path');
const Store = require('electron-store');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        icon: path.join(__dirname, '../../assets/icon.png'),
        resizable: false,
        titleBarStyle: 'hidden',
        // macOS样式
        title: '番茄时钟'
    });

    // 加载index.html
    mainWindow.loadFile(path.join(__dirname, '../../public/index.html'));

    // 开发时打开开发者工具
    if (process.env.NODE_ENV === 'development') {
        mainWindow.webContents.openDevTools();
    }

    // 设置应用菜单
    createMenu();
}

function createMenu() {
    const template = [
        {
            label: app.name,
            submenu: [
                {
                    role: 'about',
                    label: '关于番茄钟'
                },
                {
                    type: 'separator'
                },
                {
                    role: 'quit',
                    label: '退出'
                }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// 处理通知请求
ipcMain.handle('show-notification', (event, title, body) => {
    if (Notification.isSupported()) {
        const notification = new Notification({
            title: title,
            body: body,
            icon: path.join(__dirname, '../../assets/icon.png')
        });
        notification.show();
        return true;
    }
    return false;
});

// 处理保存设置
ipcMain.handle('save-settings', (event, settings) => {
    const store = new Store();
    store.set('settings', settings);
    return true;
});

// 处理加载设置
ipcMain.handle('load-settings', () => {
    const store = new Store();
    return store.get('settings', {
        workDuration: 25,
        breakDuration: 5,
        longBreakDuration: 15,
        sessionsBeforeLongBreak: 4
    });
});

// 处理加载统计
ipcMain.handle('load-stats', () => {
    const store = new Store();
    return {
        stats: store.get('stats', {}),
        totalCompleted: store.get('totalCompleted', 0)
    };
});

// 处理更新统计
ipcMain.on('update-stats', (event, data) => {
    const store = new Store();
    store.set('stats', data.stats);
    store.set('totalCompleted', data.totalCompleted);
});