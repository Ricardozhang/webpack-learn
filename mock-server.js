const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer((req, res) => {
    const _path = req.url.split('?')[0];
    const mockPath = path.join(__dirname, 'mock', _path + '.js');
    if (fs.existsSync(mockPath)) {
        res.writeHead(200, {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        });
        // 模拟500ms的网络延迟
        setTimeout(() => {
            const proxy = require(mockPath);
            res.write(JSON.stringify(proxy[`${req.method} ${_path}`]));
            res.end();
        }, 500);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain;charset=UTF-8' });
        res.write('没有配置mock数据');
        res.end();
    }
});
server.listen(9004);