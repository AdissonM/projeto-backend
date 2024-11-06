const connection = require('../config/database/connection')

require('../models/UserModel')
require('../models/ProductModel')

connection.sync({alter: true})