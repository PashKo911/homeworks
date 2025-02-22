import User from '../models/user/User.mjs'
import UsersDBService from '../models/user/UsersDBService.mjs'
import { prepareToken, convertDuration } from '../../../utils/jwtHelpers.mjs'

class AuthController {
  // static async signup(req, res) {
  //   try {
  //     const user = new User({
  //       email: req.body.email,
  //       username: req.body.username,
  //     })
  //     user.setPassword(req.body.password)
  //     const savedUser = await user.save()
  //     const token = prepareToken(
  //       {
  //         id: savedUser._id,
  //         nick: savedUser.nick,
  //       },
  //       req.headers
  //     )
  //     res.status(201).json({
  //       result: 'Signed up successfully',
  //       token,
  //     })
  //   } catch (err) {
  //     res.status(500).json({ error: 'Signup error' })
  //   }
  // }

  static async login(req, res) {
    if (!req.body.email) {
      return res.status(401).json({ error: 'Email is required' })
    }
    if (!req.body.password) {
      return res.status(401).json({ error: 'Password is required' })
    }

    try {
      const user = await UsersDBService.findOne({
        email: req.body.email,
      })
      if (!user) {
        return res.status(401).json({ error: 'User not found' })
      }

      if (!user.validPassword(req.body.password)) {
        return res.status(401).json({ error: 'Login error' })
      }
      const { token, expireInMs } = prepareToken(
        {
          id: user._id,
          username: user.username,
        },
        req.headers
      )
      res.json({
        result: 'Authorized',
        token,
        expireInMs,
      })
    } catch (err) {
      res.status(401).json({ error: 'Login error' })
    }
  }
}

export default AuthController
