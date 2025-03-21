import { IDBConnection } from "./IDBConnection";
import { MongoClient } from 'mongodb';

const mongoURI = process.env.MONGO_URI || 'mongodb+srv://Ghost1998:Edwardcruz1998@ghosthnd.8vhbmph.mongodb.net/test';
const mongoDBName = process.env.MONGO_DB_NAME || 'Entidades';

export class MongoDBConn implements IDBConnection {
  static connection:MongoClient = null;
	private constructor(){}
  //A hack because typescript can´t handle static methods in interfaces :(
  getConnection(): Promise<any> {
    throw new Error("Method not implemented.");
  }
	public static async getConnection(){
		if(!this.connection){
      this.connection = await MongoClient.connect(mongoURI);
		}
    return this.connection.db(mongoDBName);
	}
}
