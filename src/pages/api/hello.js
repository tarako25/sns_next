// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mysql from 'mysql';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const I_data = req.body.Insert_data;
    if (I_data !== '') {
      console.log(I_data);
      const connection = Connectsql();
      InsertSQL(connection, I_data);
      connection.end((err) => {
        if (err) {
          console.error('MySQL切断エラー:', err);
          return;
        }
        console.log('MySQL接続を切断しました。');
      });
      res.status(200).send('POST通信成功');
    } else {
      console.log('入力値が空です');
      res.status(400).send('入力値が空です');
    }
  }
  if (req.method === 'GET') {
    console.log('GET通信成功');
    const connection = Connectsql();
    SelectSQL(connection, (err, result) => {
      connection.end();
      console.log("MySQLの接続を終了しました。")
      if (err) {
        console.error('Select文エラー:', err);
        res.status(500).json({ error: 'データの取得に失敗しました。' });
        return;
      }
    });
    res.status(200).json(result);
  }
}

// MySQL接続
function Connectsql() {
  // MySQL接続情報
  const connection = mysql.createConnection({
    host: 'localhost',      // データベースホスト名
    user: 'root',           // ユーザー名 (デフォルトは'root')
    password: '',           // パスワード
    database: 'next_app'
  });

  connection.connect((err) => {
    if (err) {
      console.error('MySQL接続エラー:', err);
      return;
    }
    console.log('MySQLに接続しました。');
  });

  return connection;
}

// 実行クエリ(INSERT)
function InsertSQL(connection, data) {
  const sqlQuery = 'INSERT INTO next_table (msg) values (?)';
  connection.query(sqlQuery, [data], (err, result) => {
    if (err) {
      console.error('INSERT文エラー:', err);
      return;
    } else {
      console.log('新しいレコードが追加されました。',data);
    }
  });
}

// 実行クエリ(SELECT)
function SelectSQL(connection, callback) {
  const sqlQuery = 'SELECT * FROM next_table';
  connection.query(sqlQuery, (err, result) => {
    if (err) {
      console.error('Select文エラー:', err);
      callback(err, null);
      return;
    } else {
      callback(null, result);
    }
  });
}