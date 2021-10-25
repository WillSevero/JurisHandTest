import { Assinatura } from '../models/assinatura.model'
import { DatabaseConnection } from '../database/database-connection'

const table = "assinaturas"
const db = DatabaseConnection.getConnection()

export default class AssinaturasService {
  static addData(param: Assinatura) {
    return new Promise((resolve, reject) => db.transaction(
      tx => {
        tx.executeSql(`insert into ${table} (code) 
        values (?)`,
          [param.code],
          (_, { insertId, rows }) => {
            console.log("id insert: " + insertId);
            resolve(insertId)
          }), (sqlError) => {
            console.log(sqlError);
          }
      }, (txError) => {
        console.log(txError);
      }));
  }

  static findAll() {
    return new Promise((resolve, reject) => db.transaction(tx => {
      tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
        let arr: any[] = []
        for (let index = 0; index < rows.length; index++) {
          arr.push(rows.item(index))
        }
        resolve(arr)
      }), (sqlError) => {
        console.log(sqlError);
      }
    }, (txError) => {
      console.log(txError);
    }))
  }
}
