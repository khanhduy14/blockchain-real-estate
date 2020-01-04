# blockchain-real-estate

Install Truffe và Ganache:

npm install -g truffe
npm install -g ganache-cli

Setup Database: (Sử dụng MySQL)
Trong file database.js --> database : <tên schema>
                           user : <user>
                           password : <password>
                           host : <địa chỉ db>
                           dialect : <mysql>

* Chạy

Step 1 : Chạy local ethereum với Ganache
npm run start:eth
Step 2 : Compile Smart Contracts
cd ethereum
truffle compile
truffle migrate
Step 3 : Chạy
npm start

