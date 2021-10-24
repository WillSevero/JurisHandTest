import { DatabaseConnection } from './database-connection'

var db = null
export default class DatabaseInit {

  constructor() {
    db = DatabaseConnection.getConnection()
    this.InitDb()
  }
  private InitDb() {
    var sql = [
      `DROP TABLE IF EXISTS assinaturas;`,

      `create table if not exists assinaturas (
        id integer primary key autoincrement,
        code text
        );`,

      // `insert into assinaturas (code) values ('preto');`,
    ];

    db.transaction(
      tx => {
        for (var i = 0; i < sql.length; i++) {
          console.log("execute sql : " + sql[i]);
          tx.executeSql(sql[i]);
        }
      }, (error) => {
        console.log("error call back : " + JSON.stringify(error));
        console.log(error);
      }, () => {
        console.log("transaction complete call back ");
      }
    );
  }

}
