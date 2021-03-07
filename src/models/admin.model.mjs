import { sequelizeConfig } from "./../config/sequelize.config.mjs";
import Sequelize from "sequelize";

export const Admin = sequelizeConfig.define(
  "Admin",
  {
    id_admin: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    avatar_admin: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    type_admin: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Admin",
  }
);
