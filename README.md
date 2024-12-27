# Node.js App Deployment with Apache

This project demonstrates how to deploy a Node.js application behind Apache as a reverse proxy.

## Setup and Deployment Steps

### Prerequisites
- Node.js installed
- Apache installed with `proxy` and `proxy_http` modules enabled
- PM2 (optional) for process management

### Running the Node.js App
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nodejs-apache-deploy.git
   cd nodejs-apache-deploy
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   node server.js
   ```
   Or using PM2:
   ```bash
   pm2 start server.js
   ```

### Apache Configuration
Add the following configuration to your Apache Virtual Host file (e.g., `node_app.conf`):
```apache
<VirtualHost *:8080>
    ServerName <ip>

    ProxyPreserveHost On
    ProxyPass / http://localhost:8000/
    ProxyPassReverse / http://localhost:8000/

    ErrorLog ${APACHE_LOG_DIR}/node_app_error.log
    CustomLog ${APACHE_LOG_DIR}/node_app_access.log combined
</VirtualHost>
```
Enable the configuration:
```bash
sudo a2ensite node_app.conf
sudo systemctl restart apache2
```

### Accessing the App
Open your browser and go to:
```
http://<ip>:8080
```

---

### Screenshots
Include screenshots of the app running via Apache.

### License
[MIT](LICENSE)
