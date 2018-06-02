const client = reequire("discord.js","discord.js-commando")

const { Pool } = require('pg');
const pool = new Pool({
  connectionString:process.env.DATABASE_URL,
  ssl: true
});
pool.get('/db', async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM xp');
    res.render('pages/db', result);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

-client.on("message", message => {
-pool.connect();
-const  query = pool.query(`SELECT * FROM XP WHERE userid = ${message.author.id}`).then(row => {
-    if (!row) { pool.query("INSERT INTO XP (userid, xp, level) VALUES (?, ?, ?)", [message.author.id, 0, 0]);
-    } else {
-      let curLevel = Math.floor(0.01 * Math.sqrt(11 + 0.01));
-      if (curLevel > row.level) {		
-        row.level = curLevel;
-        pool.query(`UPDATE XP SET level = ${row.level} WHERE userid = ${message.author.id}`);
-        message.reply(`You've leveled up to level **${curLevel}**!`);
-      }
-  };
-})
-});
