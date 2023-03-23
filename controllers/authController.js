const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const { log } = require('console')

const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  })

  return token
}

const createAndSendToken = (user, statusCode, res) => {
  const token = generateToken(user._id)
  const cookieOptions = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  }
  res.cookie('jwt', token, cookieOptions)
  user.password = undefined // to avoid showing password in the res
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  })
}

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    })
    createAndSendToken(newUser, 200, res)
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    })
  }
}

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      res.status(400).json({
        status: 'error',
        message: 'please enter valid email address and password',
      })
    }

    const user = await User.findOne({ email }).select('+password') //as we have not selected password in model
    if (!user || !(await user.matchPassword(password, user.password))) {
      res.status(401).json({
        status: 'error',
        message: 'Invalid email or password',
      })
    }
    createAndSendToken(user, 200, res)
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    })
  }
}

exports.logout = (req, res) => {
  res.clearCookie('jwt').send()
}
