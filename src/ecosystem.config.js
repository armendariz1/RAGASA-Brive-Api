
module.exports = {
    apps : [
        {
          name: "ragasa-integracion-api",
          script: "./src/index.js",
          instances: 1,
          exec_mode: "cluster",
          watch: false,
          env: {
              "PORT": 3000,
              "BD":"Ragasa_Integracion_C-E",
              "USERNAME": "ragasa",
              "PASSWORD":"Consiss#2023",
              "HOST":"mssql-prod.c5zxdmjllybo.us-east-1.rds.amazonaws.com",
              "NODE_ENV": "desarrollo"
          }
        }
    ]
  }