const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/combatColosseum_db",
  {
    dialect: "postgres",
    define: {
      underscored: true
    }
  }
);

const User = db.define("user", {
    email: Sequelize.TEXT,
    username: Sequelize.TEXT,
    password: Sequelize.TEXT
})

const Score = db.define("score", {
    score: Sequelize.INTEGER
})


User.hasMany(Score, {foreignKey: "userId", onDelete: "cascade"})
Score.belongsTo(User, {foreignKey: "userId"})



module.exports={ db, User, Score }